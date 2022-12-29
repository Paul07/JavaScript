//functions for opening and closing the contact form
function openForm() {
	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

//this function displays the first slideshow image on load
var slideIndex = 1;
showSlides(slideIndex);

//changes the slide on left or right arrow click
function plusSlides(n) {
	showSlides(slideIndex += n);
}

//changes the slide when the dots are clicked
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var slides = document.getElementsByClassName("mySlides");//places all "mySlides" elements in an Array called mySlides
	var dots = document.getElementsByClassName("dot");//places all the "dot elements into an array called Dots"
	if (n > slides.length) {slideIndex = 1};// If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
	if (n < 1) {slideIndex = slides.length};// If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";// This for loop takes each item in the array "slides" and sets the display to none
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");// This for loop takes each item in the array "dots" and removes "active" which removes the active styling
	}
	slides[slideIndex - 1].style.display = "block";//displays the image in the slideshow
	dots[slideIndex - 1].className += "active"; //add the active stylign to the dot associated with the image
}


//this will close the contact form when the user clicks off it
//an event listener for any clicks on the website must first be added
document.addEventListener("click", function(event) {
	//defines where to click to interact with or close the contact form
	if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
		closeForm()
	}
}, false)