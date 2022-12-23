//This veriable keeps track of whose turn it is
let activePlayer = 'X';
//This array stores moves, it is used to determine the winner
let selectedSquares = [];

//this function is for placing an X or O
function placeXOrO(squareNumber) {
    //this condition ensures a square was not already seleceted
    //the .some() method checks each elemenent of the array to see if it
    //contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this var retrieves the HTML element that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks whose turn it is
        if (activePlayer === 'X') {
            //if activePlayer = X, the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //activePlayer may only be X or O so, if not X then O
        } else{
            //if activePlayer = O, the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squarenumber and activeplayer are concatenated together and added to the array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for win conditions
        checkWinConditions();
        //this condtion is for checking active players
        if (activePlayer === 'X') {
            //if activeplayer is x change it to o
            activePlayer = 'O';
            //if activeplayer is anything other than X, 
        } else {
            //change activeplayer to X
            activePlayer = 'X';
        }

        //this fucntion plays the placement sound
        audio('./media/place.mp3');
        //this condition checks to see if it is the computers turn
        if (activePlayer === 'O') {
            //this disables clicking on the computers turn
            disableClick();
            //this waits 1 second before the computer places an image and enables click
            setTimeout(function() { computersTurn(); }, 1000)
        }
        //returning true is needed for the computersTurn() function to work
        return true;
    }
    // this results in a random square being selected by the computer
    function computersTurn() {
        //this boolean is needed for the while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare; 
        //this allows the while loop to keep picking if a square is already seleceted
        while (!success) {
            //a random number 0-8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square has not been selected yet
            if (placeXOrO(pickASquare)) {
                //this line calls the function
                placeXOrO(pickASquare);
                //this changes the boolean and ends the loop
                success = true;
            };
        }
    }
}
//this function parses the selectedsquares array to search for win conditions
//drawline() function is called to draw a line on the screen if the condition is met
    function checkWinConditions() {
        //x 0, 1, 2 condition
        if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
        // x 3, 4, 5 condition
        else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
        // x 6, 7, 8 condition
        else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 558, 558, 508) }
        // x 0, 3, 6
        else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
        // x 1, 4, 7
        else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
        // x 2, 5, 8
        else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
        // x 6, 4, 2
        else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
        // x 0, 4, 8
        else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
        //o 0, 1, 2
        else if (arrayIncludes('0o', '1o', '2o')) { drawWinLine(50, 100, 558, 100) }
        //o 3, 4, 5 
        else if (arrayIncludes('3o', '4o', '5o')) { drawWinLine(50, 304, 558, 304) }
        //o 6, 7, 8
        else if (arrayIncludes('6o', '7o', '8o')) { drawWinLine(50, 508, 558, 508) }
        //o 0, 3, 6
        else if (arrayIncludes('0o', '3o', '6o')) { drawWinLine(100, 50, 100, 558) }
        //o 1, 4, 7
        else if (arrayIncludes('1o', '4o', '7o')) { drawWinLine(304, 50, 304, 558) }
        //o 2, 5, 8
        else if (arrayIncludes('2o', '5o', '8o')) { drawWinLine(508, 50, 508, 558) }
        //o 6, 4, 2
        else if (arrayIncludes('6o', '4o', '2o')) { drawWinLine(100, 508, 510, 90) }
        //o 0, 4, 8
        else if (arrayIncludes('0o', '4o', '8o')) { drawWinLine(100, 100, 520, 520) }
        //This condition checks for a tie. If none of the conditions are met and all the 
        //squares are filled the code executes.
        else if (selectedSquares.length >= 9) {
            //this makes the tie game sound play
            audio('./media/tie.mp3');
            //this sets a .3 second timer before the reset game is called
            setTimeout(function() { resetGame(); }, 500);
        }
    //this checks if the array has 3 strings. It is used to check
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //these var will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variables we pass are all included in our array then
        //true is returned our else if condition executest he drawline() function.
        if (a === true && b === true && c === true) {return true;}
    }
}

//this function makes the body element temporarily unclickable
function disableClick() {
    //this makes the body unclickable
    body.style.pointerEvents = 'none';
    //makes the body clickable again after 1 second
    setTimeout(function () {body.style.pointerEvents = 'auto'; }, 1000);
}

//this function takes a string of the path set earlier for
//placement sound('.media/place.mp3')
function audio(audioURL) {
//creates a new audio object and passes the path as a parameter
let audio = new Audio(audioURL);
//play method plays our audio sound
audio.play();
}

//This function uss HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
//this accesses the canvas element
const canvas = document.getElementById('win-lines');
//this gives us access to the methods and properties to use on canvas
const c = canvas.getContext('2d');
//this line indicates where the start of a lines x axis is
let x1 = coordX1,
//this line indicates the start of the y line
    y1 = coordY1,
    //this indicates the end of the x line
    x2 = coordX2,
    //this line indicates the end of the y line
    y2 = coordY2,
    //this stores temp x axis data we update in the animation loop
    x = x1,
    //this stores temp y axis data
    y= y1;
//this function interacts with canvas
function animateLineDrawing() {
    //this variable creates a loop
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //this method clears content from the last loop iteration
    c.clearRect(0, 0, 608, 608);
    //this method starts a new path
    c.beginPath();
    //this moves to a starting point in the line
    c.moveTo(x1, y1);
    //this indicates the end point in the line
    c.lineTo(x, y);
    //sets line width
    c.lineWidth = 10;
    //this sets the color of the line
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    //this draws out everything laid out above
    c.stroke();
    //checks if we have reached the endpoints.
    if (x1 <= x2 && y1 <= y2) {
        //this adds 10 to the previous end x endpoint
        if (x < x2) { x += 10;}
        //this adds 10 to the previous end y endpoint
        if (y <y2) { y += 10;}
        //this condition is similare to the one above
        //this is necessary for the 6,4,2 win condition
        if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}        
    }
    //similar to the condition above
    //it is necessary for the 6,4,2 win condition
    if (x1 <= x2 && y1 <= y2) {
        if (x<x2) {x+=10;}
        if (y<y2) {y-=10;}
       if (x>=x2 && y<=y2) {cancelAnimationFrame(animationLoop);}
}
}
//this clears the canvas after the win line is drawn
function clear() {
    //this starts the animation loop
    const animationLoop = requestAnimationFrame(clear);
    //this clear the canvas
    c.clearRect(0, 0, 608, 608);
    //this stops the animation loop
    cancelAnimationFrame(animationLoop);
}
//this disables clicking while the win sound plays
disableClick();
//plays the win sound
audio('./media/winGame.mp3');
//calls the main animation loop
animateLineDrawing();
//waits 1 second, then clears the canvas, resets the game, and allows clicking
setTimeout(function() {clear(); resetGame();}, 1000);
}

//resets the gaem in the event of a win or tie
function resetGame() {
    //for loop iterates through each HTML square element 
    for (let i = 0; i < 9; i++) {
        //this variable gets the HTML element i 
        let square = document.getElementById(String(i));
        //removes the elements background image
        square.style.backgroundImage = '';
    }
    //resets the array so the game can start over
    selectedSquares = [];
}