
var specialKeys = new Array();
specialKeys.push(8); //Backspace
specialKeys.push(9); //Tab
specialKeys.push(46); //Delete
specialKeys.push(36); //Home
specialKeys.push(35); //End
specialKeys.push(37); //Left
specialKeys.push(39); //Right

//for name/last name
function IsValidName(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode == 46) || (keyCode == 39) || (keyCode == 32) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    return ret;
}



// for mobile/pincode
function IsNumeric(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    return ret;
}

function IsValidComplaintNumber(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode==45) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode)|| (e.ctrlKey && (keyCode == 97 || keyCode == 99 || keyCode == 118 || keyCode == 120)));
    return ret;
}

//for address
function IsValidAddress(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode >= 44 && keyCode <= 47) || (keyCode == 32) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    return ret;
}

//for email
function IsValidEmail(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode == 46) || (keyCode == 64) || (keyCode == 45) || (keyCode == 95) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    return ret;
}

//For Article ID
function IsValidAlphaNumeric(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    return ret;
}

//AlphaNumeric with spaces
function IsValidAlphaNumericWithSpace(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode)) || (keyCode ==32);
    return ret;
}