function mobilecheck(){
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|ipad|hiptop|iemobile|ip(hone|od)|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
    return isMobile;
}};


$(document).ready(function () {
    var isMobile=mobilecheck();
    var lang=$('#slide-menu').attr('lang');
    if (lang=='en')
    {
        if (isMobile && (window.location.href.toLowerCase().match('/vas/pages/indiaposthome.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/indiaposthome.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/aboutus/aboutus.aspx')
|| window.location.href.toLowerCase().match('/vashindi/pages/aboutus/aboutus.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/aboutus/cabinetminister.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/aboutus/ministerofstate.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/aboutus/meetthesecratary.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmdashboard.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/spbookingdeliver.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/spkpi.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/postofficesavingsbankandcertificates.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/ippbtransaction.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/plisummaryreport.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/darpan.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/emobycirclewise.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/distributionofpostoffices.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/gdsdepartment.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/digitalframework.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/mailoperationsbookingstatsreport.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/sukanyasamriddhiaccount.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/seniorcitizensavingsscheme.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/doorstepservice.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/customers.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/digitaltransaction.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/dbt.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/aspirationaldistricts.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/corebankingsolutions.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/branchpostofficeusingict.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/pmodashboard/panchayatsanchaarsewakendras.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/bulkcomplaint.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/bulkcomplaintmis.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/bulkcomplainthistory.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/bulkcomplainthistorydetails.aspx')
|| window.location.href.toLowerCase().match('/vas/pages/complaintregistration.aspx')
            || window.location.href.toLowerCase().match('/mbe/pages/trackingreports.aspx')


            || window.location.href.toLowerCase().match('/_layouts/15/dop.portal.tracking/trackconsignment.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/trackconsignment.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/trackcomplaintstatus.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/findpincode.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/locatepostoffices.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/compareservices.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/clickandbook.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/rtireply.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/customerfeedback.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/customerfeedback.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/clickandbook.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/calculatepostage.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/trackcomplaintstatus.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/findpincode.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/locatepostoffices.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/compareservices.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/calculatepostage.aspx')))
        {
            $('#slide-menu').multilevelpushmenu({
                onTitleItemClick: function(){
                $('#slide-menu').multilevelpushmenu('option', 'menuHeight', '470px');
                $('#slide-menu').multilevelpushmenu('redraw');
                },
                onCollapseMenuStart:function(){
                a=$('#slide-menu').multilevelpushmenu( 'visiblemenus' );
                if (a.length==1)
                {
                    $('#slide-menu').multilevelpushmenu('option', 'menuHeight', '30px');
                    $('#slide-menu').multilevelpushmenu('redraw');
                }
                },
            menuWidth: '104%',
            menuHeight: '30px',
            menu: IndiaPostMenu,
            mode: 'cover',
            collapsed:true
            });
        }
    else
        {
            $('#slide-menu').multilevelpushmenu({
            onTitleItemClick: function(){
                $('#slide-menu').multilevelpushmenu('option', 'menuHeight', '470px');
                $('#slide-menu').multilevelpushmenu('redraw');
                },
                onCollapseMenuStart:function(){
                a=$('#slide-menu').multilevelpushmenu( 'visiblemenus' );
                if (a.length==1)
                {
                    $('#slide-menu').multilevelpushmenu('option', 'menuHeight', '30px');
                    $('#slide-menu').multilevelpushmenu('redraw');
                }
                },
            menuWidth: '16%',
            menuHeight: '470px',
            menu: IndiaPostMenu,
            mode: 'cover',
            collapsed:false
		}); 
        }
    }
    else if (lang=='hi')
    {
        if (isMobile && (window.location.href.toLowerCase().match('/vas/pages/indiaposthome.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/indiaposthome.aspx')
            || window.location.href.toLowerCase().match('/_layouts/15/dop.portal.tracking/trackconsignment.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/trackconsignment.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/trackcomplaintstatus.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/findpincode.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/locatepostoffices.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/compareservices.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/clickandbook.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/clickandbook.aspx')
            || window.location.href.toLowerCase().match('/vas/pages/calculatepostage.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/trackcomplaintstatus.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/findpincode.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/locatepostoffices.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/compareservices.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/calculatepostage.aspx')
            || window.location.href.toLowerCase().match('/vashindi/pages/customerfeedback.aspx')))
        {
            $('#slide-menu').multilevelpushmenu({
            onTitleItemClick: function(){
                $('#slide-menu').multilevelpushmenu('option', 'menuHeight', '470px');
                $('#slide-menu').multilevelpushmenu('redraw');
                },
                onCollapseMenuStart:function(){
                a=$('#slide-menu').multilevelpushmenu( 'visiblemenus' );
                if (a.length==1)
                {
                    $('#slide-menu').multilevelpushmenu('option', 'menuHeight', '30px');
                    $('#slide-menu').multilevelpushmenu('redraw');
                }
                },
            menuWidth: '104%',
            menuHeight: 30,
            menu: IndiaPostMenuHindi,
            backText: 'वापस जाएँ',
            mode: 'cover',
            collapsed:true
            });
        }
    else
        {
            $('#slide-menu').multilevelpushmenu({
            onTitleItemClick: function(){
                $('#slide-menu').multilevelpushmenu('option', 'menuHeight', '470px');
                $('#slide-menu').multilevelpushmenu('redraw');
                },
                onCollapseMenuStart:function(){
                a=$('#slide-menu').multilevelpushmenu( 'visiblemenus' );
                if (a.length==1)
                {
                    $('#slide-menu').multilevelpushmenu('option', 'menuHeight', '30px');
                    $('#slide-menu').multilevelpushmenu('redraw');
                }
                },
            menuWidth: '16%',
            menuHeight: '470px',
            menu: IndiaPostMenuHindi,
            backText: 'वापस जाएँ',
            mode: 'cover',
            collapsed:false
		}); 
        }
    }

    //$('#slide-menu').multilevelpushmenu('option', 'menuHeight', $('#body-content').height());
    $('#slide-menu').multilevelpushmenu('redraw');
    // Checking if desktop, so that we can expand the menu

    if (window.location.href.toLowerCase().match('/mbe/pages/bulkarticletracking.aspx')
           || window.location.href.toLowerCase().match('/mbe/pages/trackingreports.aspx')
           || window.location.href.toLowerCase().match('/vas/pages/bulkcomplaint.aspx')
           || window.location.href.toLowerCase().match('/vas/pages/complaintregistration.aspx')
           || window.location.href.toLowerCase().match('/vas/pages/userprofilemanagement.aspx')
           || window.location.href.toLowerCase().match('/vas/pages/userregistration.aspx')
           || window.location.href.toLowerCase().match('/vas/pages/trackcomplaintstatus.aspx')

           ) {
        var msg = '<div style=' + '" padding: 5px;margin: 0 10px 10px 10px;border: 1px solid transparent;border-radius: 4px;background-color: rgb(248, 231, 2);"' + '>' + ' <strong>Alert!</strong>Page will remain under maintenance from 2100 hrs, 23.07.22 to 0600 hrs, 25.07.21. Services will not be available temporarily during that period. Inconvenience regretted.' +
            '</div>';
        $(".alertmsg").append(msg);
        $(".alertmsg").hide();
        //$(".alertmsg").show();

    }

    //Code added for clicknbook modal
    window.addEventListener("load", GetSP);
    function GetSP() {
        LoadSodByKey("sp.js", function () { });
    }

    function openDialogAndReceiveTermsData() {
        var tUrl = GetUrl() + '/_layouts/15/DOP.Portal.UILayer/TermsAndCondition.aspx?Arg1=' + 'DB';
        var tTitle = 'Terms and Conditions';
        var options = SP.UI.$create_DialogOptions();
        options.url = tUrl;
        options.title = tTitle;
        options.showClose = true;
        options.allowMaximize = true;
        //options.dialogReturnValueCallback = onPopUpCloseCallBackWithData;
        SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
    }

    window.addEventListener("load", myFunction2);
    function myFunction2() {
        $('a[href="TermsnConditonsCall"]').click(function () {
            $('a[href="TermsnConditonsCall"]').removeAttr("href")
            ExecuteOrDelayUntilScriptLoaded(openDialogAndReceiveTermsData(), 'sp.ui.dialog.js');
        });
    };

    window.addEventListener("load", myFunction);
    function myFunction() {
        $('a[href="/mbe/Pages/dmbe.aspx"]').click(function () {
            $('a[href="/mbe/Pages/dmbe.aspx"]').removeAttr("href")
            $("#myModal2").modal("show");
        });
    };


    function GetUrl() {
        if (window.location.href.toLowerCase().match("/sites/")) {
            var t = window.location.href.split('/');
            return t[0] + '//' + t[2] + '/' + t[3] + '/' + t[4];
        }
        else {
            return "";
        }
    };

    //Create the element using the createElement method.
    var myDiv = document.createElement("div");

    //Set its unique ID.
    myDiv.id = 'ClickBookModal';

    //Add your content to the DIV
    myDiv.innerHTML = '<div class="modal fade" id="myModal2" role="dialog">' +
              '  <div class="modal-dialog"> ' +
                 '   <div class="modal-content">' +

                       ' <div class="modal-header"> ' +

                                '<h3 style="color: #B62A26 !important;text-align: left;">' +
                                ' <strong>Click & Book</strong> </h3> </div> ' +
                            '<div class="modal-body">' +

   ' <p style="color: black;font-size: 15px;text-align: left;/* border-bottom: 1px solid #ddd; */padding-bottom: 5px;" > ' +
   ' <strong>1. This service is available for Registered Users only. Please Register/Login your self with Department of Post.<br>2. Please read the terms and conditions for booking carefully.' +
   ' (<a href="TermsnConditonsCall" target="_self" style="color:blue;"><span id="ctl00_SPWebPartManager1_g_1a7311e9_4cc2_46a5_b215_37448c0a7567_ctl00_lblTermsandConditions" title="Terms and Conditions.">Terms and Conditions</span></a>)<br>3. This service is available for selected cities. To check whether the service is available at your city or not <a href="https://www.indiapost.gov.in/mbe/Pages/Availablelocations.aspx" style="color:blue;">click here</a>. <br>4. Pick up will not be available on Sunday/Closed Holidays.<br><br> ' +
    'Press Continue for Click & Book. </strong></p></div><div class="modal-footer" style="clear: both;">' +

    '<a href="https://www.indiapost.gov.in/mbe/pages/dmbe.aspx" style="color:white;"><div class="btn btn-danger callback-btn" style="Margin-right:10px">Continue</div></a>' +
                                '<div class="btn btn-danger callback-btn" data-dismiss="modal">Close</div></div> </div></div></div>';

    //Finally, append the element to the HTML body
    document.body.appendChild(myDiv);

});



$(window).resize(function () {
    //$('#menu').multilevelpushmenu('option', 'menuHeight', $(document).height());
    var isMenuCollapsed = false;
    var slidemenu = document.getElementById("slide-menu");
    if (slidemenu.style.height == '30px' || slidemenu.style.height == '30') {
        isMenuCollapsed = true;
    }
    $('#slide-menu').multilevelpushmenu('redraw');

    if (!window.location.href.toLowerCase().match('indiaposthome') && isMenuCollapsed) {
        try {

            slidemenu.style.height = '30px';
            slidemenu.style.minHeight = '30px';

            var multilevelpushmenu = document.getElementById('slide-menu_multilevelpushmenu')
            multilevelpushmenu.style.height = '30px';
            multilevelpushmenu.style.minHeight = '30px';

        } catch (err) {
            console.log(err);
        }
    }
});


$(document).ready(function () {
    if (!window.location.href.toLowerCase().match('indiaposthome')) {
        try {
            var slidemenu = document.getElementById("slide-menu");
            
            slidemenu.style.top = '170px';
            slidemenu.style.width = '70px';
            slidemenu.style.minWidth = '40px';
            //slidemenu.style.paddingLeft = '37px';
            slidemenu.style.height = '30px';
            slidemenu.style.minHeight = '30px';
            slidemenu.style.left = '0';

            $('#slide-menu_multilevelpushmenu > div > ul').hide();

            var levelHolder = $('#slide-menu_multilevelpushmenu > div.levelHolderClass')[0];
            $(levelHolder).addClass('multilevelpushmenu_inactive');
            levelHolder.style.marginLeft = '-152px';

            document.getElementById('slide-menu_multilevelpushmenu').style.minWidth = '40px';
        } catch (err) {
            console.log(err);
        }
    }
    else {
        var slidemenu = document.getElementById("slide-menu");
        slidemenu.style.paddingLeft = '0';
    }

    $('nav#slide-menu_multilevelpushmenu a[href="#"]').click(function(){
        return false;
    });

    $('ul#Ul2 a[href="#"]').click(function(e){
        e.preventDefault();
    });

    $('#telephone').click(function () {
        return false;
    });
    $('#signInLink').click(function () {
        return false;
    });

    $('#registerLink').click(function () {
        return false;
    });

});

$(document).ready(function () {
    //This code is to confrim if a user wnat to navigate to external website.
    try {
        //    var currentURL = window.location.host;
        if (window.location.host.lastIndexOf(":") != -1) {
            var currentURL = window.location.host.substr(0, window.location.host.lastIndexOf(":"))
        }
        else
            var currentURL = window.location.host

        var location = "";

        $("a").click(function () {
            if (this.hostname == null || this.hostname == "") {

            }
            else {
                var url = (this.hostname || this.pathname);

                var sites = ["uat.indiapost.gov.in", "www.indiapost.gov.in"];
                var isExternalURL = true;
                $(sites).each(function () {
                    if (url.match(this))
                        isExternalURL = false;
                });

                var CompleteURL = this.href;
                //if (CompleteURL.match("UnsecuredLinkHandler.aspx")) {
                //    var UnsecuredLinkKeys = ["postallifeinsurance", "mumbaigpophilately", "snapdeal", "pgportal", "tenders", "india", "indiagov", "nvsp", "tcs", "snapdealcollectibles", "cept", "utilities"];
                //    var LinkKey = CompleteURL.split('?')[1].split('=')[1];
                //    $(UnsecuredLinkKeys).each(function () {
                //        if (LinkKey.match(this))
                //            isExternalURL = true;
                //    });
                //}

                if ((url != currentURL && isExternalURL) || CompleteURL.match("UnsecuredLinkHandler.aspx")) {
                    var r = confirm("You will be redirected to an external website.\nAre you sure you want to proceed?");
                    if (r) {
                        location = this.getAttribute('href');
                        window.open(location);
                       
                        return false;
                    }
                    else {
                        return false;
                    }
                }

            }
        });
    }
    catch (err) {
    }
});


