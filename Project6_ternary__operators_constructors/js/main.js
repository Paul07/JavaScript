function ride_function() {
	var height, can_ride;
	height = document.getElementById("height").value;
	can_ride = (height<52) ? "You are too short":"You are tall enough";
	document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function dog(color, age, weight) {
	this.color = color;
	this.age = age;
	this.weight = weight;
}

var tank = new dog("brown", 9, 80);

function info() {
	document.getElementById("new_and_this").innerHTML = tank.age + 
	" years old.";	
}

function nest() {
	document.getElementById("nested_function").innerHTML = count();
	function count() {
		var start = 7;
		function plus_two() {start += 2;}
		plus_two();
		return start
	}
}


