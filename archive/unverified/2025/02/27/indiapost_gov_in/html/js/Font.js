/* Following is new function for increasing and decreasing font sizes of texts*/
/*This file has  a jquery for increasing /decreasing fonts of text on all the pages of portal*/

/*This file has  a function for playing video on  portal home page and view all media*/

/*This file has also a function for selecting hindi/english on master page using ECMA.However..It is obsolte*/


/*This file for ucsign in */
function helphover() {
    document.getElementById('helpPanel').style.display = "block";
}

function helphoverhide() {
    document.getElementById('helpPanel').style.display = "none";
}


$(document).ready(function () {
    $("#searchPanel").hide();
    $("#registerLink").click(function () {
        $("#registerPanel").slideToggle(0);
        $("#signInPanel").hide();
    });
    $("#signInLink").click(function () {
        $("#registerPanel").hide();
        $("#signInPanel").slideToggle(0);
    });
    $("#searchLink").click(function () {        
        $("#searchPanel").slideToggle();
    });
    
    var dvAfterLogin = document.getElementById('<%=dvAfterLogin.ClientID%>');
    if (dvAfterLogin != null) {
        $(dvAfterLogin).parent().width('205px');
    }
});




/* sign in */
$(document).ready(function () {
    $("#login-link").click(function () {
        $("#login-panel").slideToggle(200);
    })
});
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $("#login-panel").hide(0);
    }
});


$(document).ready(function () {
    var value; if (lcidValuePortal != '') { value = lcidValuePortal; } else { value = _spPageContextInfo.currentLanguage; }
    if (value == 1081) {
        $('#<%= lblSignIn.ClientID%>').html("साइन इन");
        $('#<%= lblRegister.ClientID%>').html("रजिस्टर");
        $('#<%= lblName.ClientID%>').html("नाम");
        $('#<%= lblChangePassword.ClientID%>').html("पासवर्ड बदले");
        $('#<%= lblMyProfile.ClientID%>').html("माई प्रोफाइल");
    }
    if (value == 1033) {
        $('#<%= lblSignIn.ClientID%>').html("Sign In");
        $('#<%= lblRegister.ClientID%>').html("Register");
        $('#<%= lblName.ClientID%>').html("Name");
        $('#<%= lblChangePassword.ClientID%>').html("Change Password");
        $('#<%= lblMyProfile.ClientID%>').html("My Profile");
    }
});

/* end This file for ucsign in */


//This code is to test if Pdf opens in a new tab

$(document).ready(function () {
    $("a[href$='.pdf']").each(function () {
        $(this).click(function (event) {
            event.preventDefault();
            event.stopPropagation();
            window.open(this.href, '_blank');
        })
    });
});


var fontFlag = 0;
var IncreaseorDecreaseFont = "";

$(document).ready(function () {
    try {

        var cookieArray = document.cookie.split(';');

        for (var i = 0; i < cookieArray.length; i++) {
            var name = cookieArray[i].split('=')[0];
            if (name.match("fontFlag")) {
                fontFlag = cookieArray[i].split('=')[1];
                if (fontFlag > 0) {
                    for (var i = 0; i < fontFlag; i++) {
                        IncreaseFont();
                    }
                }
                else if (fontFlag < 0) {
                    for (var i = 0; i > fontFlag; i--) {
                        DecreaseFont();
                    }
                }
            }
        }
    } catch (err) {

    }
    var originalFontSize = $('html').css('font-size');

    var rstatusdec = 0;
    var rstatusinc = 0;

    // fontchange
    $("body").delegate(".fontchange", "click", function () {
        try {
            if (IncreaseorDecreaseFont == "" && fontFlag != 0) {
                if (fontFlag > 0) {
                    IncreaseorDecreaseFont = "D";
                }
                else if (fontFlag < 0) {
                    IncreaseorDecreaseFont = "I";
                }
                NormalFont();
            }
            else if (IncreaseorDecreaseFont == "" && fontFlag == 0) {
                IncreaseFontandCookie();
            }
            else if (IncreaseorDecreaseFont == "I") {
                if (fontFlag < 1) {
                    IncreaseFontandCookie();
                }
                else {
                    DecreaseFontandCookie();
                }
            }
            else if (IncreaseorDecreaseFont == "D" && fontFlag < 1) {
                if (fontFlag > -1) {
                    DecreaseFontandCookie();
                }
                else {
                    IncreaseFontandCookie();
                }
            }
        }
        catch (err) {
        }

    });

    // Increasing the Font Size
    function IncreaseFontandCookie() {
        if (fontFlag < 1) {
            fontFlag++;
            document.cookie = "fontFlag=" + fontFlag + ";path=/; domain=.indiapostdev.gov.in"
            IncreaseFont();
            IncreaseorDecreaseFont = "I";
        }
        return false;
    }

    // Decreasing Font Size
    function DecreaseFontandCookie() {
        if (fontFlag > -1) {
            fontFlag--;
            document.cookie = "fontFlag=" + fontFlag + ";path=/; domain=.indiapostdev.gov.in"
            DecreaseFont();
            IncreaseorDecreaseFont = "D";
        }
        return false;
    }

    $("body").delegate(".normalfont", "click", function () {
        NormalFont();
        return false;
    });
});

function IncreaseFont() {

    try {
        $("span, input, label, Select, a, p, h1, h2, h3").each(function (index, element) {
            var currentFontSize = $(element).css("font-size");
            var currentFontSizeNum = parseInt(currentFontSize);
            //try {
            //    if
            //    if (element.parent.classname == 'dc-mega-li') {
            //        alert(1);
            //    }
            //} catch (err) { alert(err); }

            var newFontSize = currentFontSizeNum + 1;
            var nF = newFontSize + 'px';
            var spstatus = 0;
            var cnt = 0;
            var parents = $(this).parents();
            if (spstatus == 0) {
                $(element).css('font-size', nF);
            }

            if (newFontSize >= 14) {
                $('#quicktool_app').css('height', '254px');
            }
            else {
                $('#quicktool_app').css('height', '230px');
            }


            //if (newFontSize == 14) {
            //    $('.zerogrid1').css('width', '96%');
            //    $('.zerogrid').css('width', '96%');
            //    $('.wrap-footer.zerogrid').css('width', '96%');
            //    $('.wrap-header.zerogrid').css('width', '101%');
            //    //$('.red ul.mega-menu li').css('margin-right', '7.2px');
            //    $('.dc-mega-li').css('margin-right', '7.2px');

            //}
            //else if (newFontSize == 15) {
            //    $('.zerogrid1').css('width', '96%');
            //    $('.zerogrid').css('width', '96%');
            //    $('.wrap-footer.zerogrid').css('width', '96%');
            //    $('.wrap-header.zerogrid').css('width', '101%');
            //    $('.dc-mega-li').css('margin-right', '5.2px');
            //}


            //try{
            //    $('#s4-workspace').css('width', '1024px !important');
            //    $('#s4-workspace').css('overflow', 'inherit !important');
            //    $('#s4-workspace').css('position', 'absolute');


            //} catch (err) {

            //}

        });
        $(".SubscribeNewsLetterPointer").each(function (index, element) {
            $(element).css('font-size', '11px');
        });
    }
    catch (err) {

    }

}

function DecreaseFont() {

    $("span, input, label, Select, a, p, h1, h2, h3 ").each(function (index, element) {
        var currentFontSize = $(element).css("font-size");
        var currentFontSizeNum = parseInt(currentFontSize);
        var newFontSize = currentFontSizeNum - 1;
        var nF = newFontSize + 'px';
        var spstatus = 0;
        var cnt = 0;
        var parents = $(this).parents();
        if (spstatus == 0) {
            $(element).css('font-size', nF);
        }
        //for height of left menu
        if (newFontSize == 14) {
            $('#quicktool_app').css('height', '230px');
        }
        //if (newFontSize == 13) {
        //    $('.zerogrid1').css('width', '1000px');

        //    $('.zerogrid').css('width', '1000px');
        //}
        //if (newFontSize == 12) {
        //    $('.zerogrid1').css('width', '950px');

        //    $('.zerogrid').css('width', '950px');
        //}
        //else if (newFontSize == 11) {
        //    $('.zerogrid1').css('width', '950px');
        //    $('.zerogrid').css('width', '950px');
        //} 
        //if (newFontSize == 14) {
        //    $('.zerogrid1').css('width', '96%');
        //    $('.zerogrid').css('width', '96%');
        //    $('.wrap-footer.zerogrid').css('width', '96%');
        //    $('.wrap-header.zerogrid').css('width', '101%');
        //    //$('.red ul.mega-menu li').css('margin-right', '7.2px');
        //    $('.dc-mega-li').css('margin-right', '7.2px');

        //}
        //else if (newFontSize == 15) {
        //    $('.zerogrid1').css('width', '96%');
        //    $('.zerogrid').css('width', '96%');
        //    $('.wrap-footer.zerogrid').css('width', '96%');
        //    $('.wrap-header.zerogrid').css('width', '101%');
        //    $('.dc-mega-li').css('margin-right', '5.2px');
        //}
        //try {
        //    $('#s4-workspace').css('width', '1024px !important');
        //    $('#s4-workspace').css('overflow', 'inherit !important');
        //    $('#s4-workspace').css('position', 'absolute');


        //} catch (err) {

        //}
    });
    $(".SubscribeNewsLetterPointer").each(function (index, element) {
        $(element).css('font-size', '11px');
    });
}

function NormalFont() {
    if (fontFlag > 0) {
        while (fontFlag > 0) {
            fontFlag--;
            document.cookie = "fontFlag=" + fontFlag + ";path=/; domain=.indiapostdev.gov.in"
            DecreaseFont();
        }
    }
    else if (fontFlag < 0) {
        while (fontFlag < 0) {
            fontFlag++;
            document.cookie = "fontFlag=" + fontFlag + ";path=/; domain=.indiapostdev.gov.in"
            IncreaseFont();
        }
    }

}


//This FUNCTION will play video on click of icons on home page.
function PlayMedia(mediaUrl) {
    var value = _spPageContextInfo.currentLanguage;


    if (value == 1081)//english
    {
        var mediaTitle = mediaUrl.substr(mediaUrl.lastIndexOf("/") + 1);
        window.location.href = "/VASHindi/Pages/player.aspx" + "?media=" + mediaTitle + "&download=0";
    }
    else {
        var mediaTitle = mediaUrl.substr(mediaUrl.lastIndexOf("/") + 1);
        window.location.href = "/VAS/Pages/player.aspx" + "?media=" + mediaTitle + "&download=0";
    }
}


//BELOw FUNCTION is responsibe in selecting the language site.
var clientContext;
var siteCollection;

var VasUrl = "";

//var isVasUrlHindi = "";
var objContext = null;
var objWeb = null
var objList = null;
var objItem = null;

var allItems;
function englishVersion() {
    VasUrl = "VASUrlEnglish";
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', sharePointReady);
}
function hindiVersion() {
    VasUrl = "VASUrlHindi";
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', sharePointReady);
}
// Create an instance of the current context and get the site collection.
function sharePointReady() {

    objContext = SP.ClientContext.get_current();

    siteCollection = objContext.get_site();

    objContext.load(siteCollection);
    objContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);
}
function onRequestSucceeded() {
    //alert('URL of the root website: ' + siteCollection.get_url());

    // objWeb = objContext.get_web();clientContext.get_site().get_rootWeb().get_lists().
    objWeb = objContext.get_site().get_rootWeb();
    objList = objWeb.get_lists().getByTitle("DOP_SystemConfigList");

    var query = SP.CamlQuery.createAllItemsQuery();
    allItems = objList.getItems(query);
    objContext.load(allItems);
    objContext.executeQueryAsync(onSuccess, onFail);


}
function onRequestFailed(sender, args) {
    alert('Error: ' + args.get_message());
}
function onSuccess() {

    var ListEnumerator = allItems.getEnumerator();
    var i = 0;
    //try

    {

        while (ListEnumerator.moveNext()) {
            var temp = VasUrl;
            i++;
            var currentItem = ListEnumerator.get_current();
            if (currentItem.get_item('PropertyName') == temp) {


                var targetURL = currentItem.get_item('PropertyValue');
                targetURL = targetURL.toString();
                //alert(targetURL);
                location.href = targetURL;

            }

        }
        //location.href = targetURL;
    }//
}
function onFail(sender, args) {
    alert('Some error in last step has occured.' + args.get_message());
}

$(document).ready(function () {
    try {

        $(".bgnavigate a").each(function () {
            if (this.href != '' && this.href[this.href.length - 1] != '#' && (window.location.href.toLowerCase() == this.href.toLowerCase() || window.location.href.toLowerCase().match(this.href.toLowerCase()))) {
                $(this).parent().addClass('currenthighlight_bgnavigate');
            }
        });

        $("#quicktool_app a").each(function () {
            if (this.href != '' && this.href[this.href.length - 1] != '#' && (window.location.href.toLowerCase() == this.href.toLowerCase() || window.location.href.toLowerCase().match(this.href.toLowerCase()))) {
                $(this).parent().addClass('currenthighlight_quicktool');
            }
        });

        $(".leftbox1 a").each(function () {
            if (this.href != '' && this.href[this.href.length - 1] != '#' && (window.location.href.toLowerCase() == this.href.toLowerCase() || window.location.href.toLowerCase().match(this.href.toLowerCase()))) {
                $(this).parent().addClass('currenthighlight_Leftbox1');
            }
        });
    } catch (err) {
    }
});


/*dropdown menu on key TAB*/
$(document).ready(function () {
    $('ul.nav li.dropdown').focusin(function () {
        $(this).addClass('no-border');
        $(this).find('.dropdown-menu').show();
        /*$(this).find('.dropdown-menu .mega-menu-column li a').attr('style', 'color: #fff !important');*/
        $(this).find('.dropdown-menu .mega-menu-column li a').addClass('fontcolor-focusin');
        $(this).siblings().children('.dropdown-menu').hide();
    });
    /*close dropdown-menu after traversing last child*/
    $(".mega-menu-column:last-child li:last-child").focusout(function () {
        $('.dropdown-menu').hide();
    });

    /*maintain background color and color of top navigation items on focus*/
    $('.dropdown-menu').focusin(function () {
        $(this).parent().addClass('bgcolor-focusin');
        $(this).parent().find('a').addClass('fontcolor-focusin');
    });
    $('.dropdown-menu').focusout(function () {
        $(this).parent().removeClass('bgcolor-focusin');
        $(this).parent().find('a').removeClass('fontcolor-focusin');
    });

    $("ul.nav li.dropdown").focusout(function () {
        setTimeout(function () { // needed because nothing has focus during 'focusout'            
            if ($(':focus').closest('.nav').length <= 0) {
                $('.dropdown-menu').hide();
            }
        }, 0);
    });

});






