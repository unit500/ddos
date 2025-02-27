try {
    var file = window.location.protocol + "//" + window.location.host + "/Documents/ArrayMenuList_Eng.txt";
    var IndiaPostMenu;
    var rawfile = new XMLHttpRequest();
    rawfile.open("GET", file, false);

    rawfile.onreadystatechange = function () {
        if (rawfile.status === 200) {
            IndiaPostMenu = JSON.parse(rawfile.responseText.trim());
        }
    }
    rawfile.send(null);
}

catch (error) {

}


try {
    var file1 = window.location.protocol + "//" + window.location.host + "/Documents/ArrayMenuList_Hindi.txt";
    var IndiaPostMenuHindi;
    var rawfile1 = new XMLHttpRequest();
    rawfile1.open("GET", file1, false);

    rawfile1.onreadystatechange = function () {
        if (rawfile1.status === 200) {
            IndiaPostMenuHindi = JSON.parse(rawfile1.responseText.trim());
        }
    }
    rawfile1.send(null);
}

catch (error) {
}
