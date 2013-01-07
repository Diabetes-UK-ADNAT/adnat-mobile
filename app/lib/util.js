function log(m) {
	console.log(m);
}

function makeArray(v) {
	if (v != null ) {
		return v instanceof Array ? v : new Array(v);
	}
	return new Array();
}

function logArray(arr) {
	if (arr != null) arr.forEach(logArrayElements);
}


function logArrayElements(element, index, array) {
    log("a[" + index + "] = " + element);
}

function arraySortDescNumeric(arr) {
	return arr.sort(function(a,b){return b - a});  
}	




