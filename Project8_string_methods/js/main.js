function sliced() {
	var sentence = "What we have here is a failure to communicate."
	var section = sentence.slice(23,30);
	document.getElementById("chunk").innerHTML = section;
}

function bigger() {
	var text = document.getElementById("sloth").innerHTML;
	document.getElementById("sloth").innerHTML = text.toUpperCase();
}

function look() {
	var text = "What do it do, when it do what it do?";
	document.getElementById("where").innerHTML = text.indexOf("do");
}

function strung() {
	var x = 648;
	document.getElementById("strung").innerHTML = x.toString();
}

function precise() {
	var x = 867.5309;
	document.getElementById("jenny").innerHTML = x.toPrecision(3);
}

function fix() {
	var x = 867.5309;
	document.getElementById("fix").innerHTML = 
		x.toFixed(0) + "<br>" +
		x.toFixed(1) + "<br>" +
		x.toFixed(2); 
}

function acv() {
	var x = 867
	var j = x.valueOf();
	document.getElementById("acv").innerHTML = j;
}