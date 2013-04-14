function log(m) {
    //console.log(m);
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




