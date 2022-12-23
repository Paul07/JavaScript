function valid() {
	let x = document.forms["phone"]["Digits"].value;
	if (x == ""){
		alert("You must enter a phone number!");
		return false;
	}
}