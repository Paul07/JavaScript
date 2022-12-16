function detroit() {//first dictionary
	var detroit= {
		football:"lions",
		basketball:"pistons",
		baseball:"tigers",
		hockey:"red wings",
		winners: 0,
		college:"spartans"
	};
	document.getElementById("dictionary").innerHTML = detroit.football;
}

function couch() {//delete function
	var couch= {
		color:"green",
		cushions:5,
		comfy:"yeah",
		big:"sure",
		stinky:"nope"		
	};
	delete couch.comfy;
	document.getElementById("couch").innerHTML = couch.comfy;
}
	