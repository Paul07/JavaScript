function vote() {
	var age, can_vote;
	age = document.getElementById("age").value;
	can_vote = (age<18) ? "You are too young":"You are old enough";
	document.getElementById("vote").innerHTML = can_vote + " to vote.";
}