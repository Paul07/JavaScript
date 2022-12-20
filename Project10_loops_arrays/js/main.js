var instruments = ["guitar", "drums", "saxophone", "washboard", "flute"];
var content = "";
var y;
function for_loop() {
    for (y=0; y< instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("instruments").innerHTML = content;
}//for loop

function bands() {
    var punk_rock = [];
    punk_rock[0] = "Bad Religion";
    punk_rock[1] = "Lagwagon";
    punk_rock[2] = "Vandals";
    punk_rock[3] = "MXPX";
    document.getElementById("band").innerHTML = punk_rock[3] + 
    " is amazing live.";
}//array

function constant_function() {
    const coffe_cup = {type:"thermos", brand: "Hydroflask", color: "black"};
    coffe_cup.brand = "Yeti";
    coffe_cup.size = "16 ounces";
    document.getElementById("constant").innerHTML = "My " + coffe_cup.brand + 
    " holds " + coffe_cup.size + " of delicious life giving coffee!";
}//constant

function shall_we() {
    var x = "stolen"
    document.write(x); {
        let x = "given"
        document.write("<br>" + x);
    }
    document.write("<br>" + x);
}//global vs local

let dog = {
    breed: "mutt ",
    age: "9 ",
    weight: "80 ",
    color: "tan ",
    good: "GOODEST ",
    description: function () {
        return "Tank is a " + this.breed + " that is " + this.age + "years young " + 
        "he weighs " + this.weight + " pounds. " + "He is the " + this.good +
        this.color + "dog ever!"
    }
};
    document.getElementById("Tank").innerHTML = dog.description();//return


