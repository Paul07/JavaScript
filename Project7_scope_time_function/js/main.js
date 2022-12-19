var x=7
if (x + 2 > 8) {
	document.write ("Of course it is!")
}

function fixed() {
	var y=9;
	document.write(20+x+y+"<br>");
}
fixed();

function broken() {
	document.write(19+x+y);
}
broken();

function get_date() {
	if (new Date().getHours() < 18);
{document.getElementById("greeting").innerHTML = "How are you today?";
	}
}

