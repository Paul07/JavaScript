var x = 7
if (x + 2 > 8) {
	document.write ("Duh!");
}

function myage() {
	age = document.getElementById("age").value;
	if (age >= 18) {
		awww = "You are still a kid!";
	}
	else {
		awww = "You're just a baby!";
	}
	document.getElementById("How old are you?").innerHTML = awww;
}