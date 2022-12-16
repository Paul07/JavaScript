function more() {//addition function
	var more = 7+5;
	document.getElementById	("math").innerHTML = " 5+7 = " + more;
}

function less() {//subtraction function
	var less = 7-5;
	document.getElementById ("math1").innerHTML = " 7-5 = " + less;
}

function times() {//multiplication function
	var times = 7*5;
	document.getElementById ("math2").innerHTML = " 7*5 = " + times;
}

function divide() {//division function
	var divide = 7/5;
	document.getElementById ("math3").innerHTML = " 7/5 = " + divide;
}

function maths() {//several operations function
	var maths = 7+5*(7/5)-7;
	document.getElementById ("math4").innerHTML = " 7+5*(7/5)-7 "+
	" = " + maths; 
}

function modulus() {//modulus function
	var modulus = 7%5;
	document.getElementById ("math5").innerHTML = " 7%5 = " + modulus;
}

function negation() {//negation function
	var negation = 7;
	document.getElementById ("math6").innerHTML = -negation;
}

var j = 7;
j++
document.write(j);//increment

var w = 5;
w--
document.write(w);//decrement

function rando() {
	let rando = Math.random() * 10;
	document.getElementById("math7").innerHTML = rando;
}//random Number

function most() {//largest number in a list
	document.getElementById("math8").innerHTML =
	Math.max(7, 500, 70, 55, 700, 77);
}
