var REGEX_URL = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
var REGEX_EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
var REGEX_NUMBER = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;

function log(m) {
    console.log(m);
}

function makeArray(v) {
    if (v !== null && v !== 'undefined') {
        return v instanceof Array ? v : new Array(v);
    }
    return new Array();
}

function logArray(arr) {
    if (arr !== null && arr !== 'undefined' && arr instanceof Array) {
        arr.forEach(logArrayElements);
    }
}


function logArrayElements(element, index, array) {
    log("a[" + index + "] = " + element);
}

function arraySortDescNumeric(arr) {
    log(arr);
    return arr.sort(function(a, b) {
        return b - a;
    });
}

function arrayHasVal(arr, val) {
    for (i = 0; arr !== null && i < arr.length; i++) {
        if (arr[i] === val) {
            return true;
        }
    }
    ;
    return false;
}


function arrayRemoveNullElements(options) {
    o2 = new Array();
    options.forEach(function(element) {
        if (element !== null) {
            o2.push(element);
        }
    });
    return o2;
}




