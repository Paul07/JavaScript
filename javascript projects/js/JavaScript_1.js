function platforms() {
	var game_output;
	var platform = document.getElementById("game_input").value;
	var game_string = " is a great game system!";
	switch (platform) {
		case "Playstation":
			game_output= "Playstation" + game_string;
		break;
		case "Xbox":
			game_output= "Xbox"+ game_string;
		break;
		case "Switch":
			game_output= "Switch" + game_string;
		break;
		case "Tablet":
			game_output= "Tablet" + game_string;
		break;
		case "PC":
			game_output= "PC" + game_string;
		break;
		default:
		game_output = "Please enter the name exactly as written above.";
	}
	document.getElementById("output").innerHTML = game_output;
}

function classy() {
	var c = document.getElementsByClassName("click");
	c[1].innerHTML = "See, told you so!";
}

var canvas = document.getElementById("Drawings");
var ctx = canvas.getContext("2d");
var grd = ctx.createLinearGradient(0,0,400,100	);
grd.addColorStop(0, "black");
grd.addColorStop(1, "orange");
ctx.fillStyle = grd;
ctx.fillRect(0,0,525,300);

ctx.font = "50px comic sans ms";
ctx.strokeText("What's up?", 130, 200);