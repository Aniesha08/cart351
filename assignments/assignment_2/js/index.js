let pendulum;
// Variables & array for square
const MAX_SQUARES =800;
let mySquares = [];
let colors = ["#df439e","#c379e5","#0789df","#1fe9d6","#acf800","#fffc00","#ff931e","#ff5451"];

// Mouse functions for pendulum
function mousePressed() {
	pendulum.clicked(mouseX, mouseY);
}

function mouseReleased() {
	pendulum.stopDragging();
}

// Variables for sound
let tone1;
let tone2;
let tone3;
let tone4;
let tone5;
let tone6;
let tone7;
let tone8;

// Preload the sound
function preload(){
tone1 = loadSound ("sounds/tone_1.mp3");
tone2 = loadSound ("sounds/tone_2.mp3");
tone3 = loadSound ("sounds/tone_3.mp3");
tone4 = loadSound ("sounds/tone_4.mp3");
tone5 = loadSound ("sounds/tone_5.mp3");
tone6 = loadSound ("sounds/tone_6.mp3");
tone7 = loadSound ("sounds/tone_7.mp3");
tone8 = loadSound ("sounds/tone_8.mp3");
}

function setup() {
	createCanvas(700, 600);

	// Pendulum at center of canvas
	let origin = createVector(width / 2, 0);
	pendulum = new Pendulum(origin);

  //fill the array with objects
	for (let i =0; i< MAX_SQUARES;i++){
	let offsetX = 40;
	let offsetY = Math.floor(Math.random()*(canvas.height-250)+30); //generate a random y location
	// space out the squares, give a color from the array, colorNumber (from array)
	// colorNumber ex: "#c379e5" is colorNumber 1
	mySquares.push(new myRunningSquares(-i*offsetX,offsetY,colors[i%colors.length],i%colors.length));

	}
}

function draw() {
	background(0);
	noStroke();
	for (let i =0; i< MAX_SQUARES;i++){
	  mySquares[i].update();
	  mySquares[i].render();

	 // If pendulum hits the squares, play the tones
	if(hit(pendulum, mySquares[i]) ===true){
		mySquares[i].tones();
	 }
	}

	pendulum.go();

}

// Collision check
// Code modified from: http://jsfiddle.net/m1erickson/n6U8D/

function hit(Pendulum, myRunningSquare) {
    var distX = Math.abs(Pendulum.bob.x - myRunningSquare.xPos - 20 / 2);
    var distY = Math.abs(Pendulum.bob.y - myRunningSquare.yPos - 20 / 2);

		// Not colliding
    if (distX > (20 / 2 + Pendulum.radius)) {
        return false;
    }
    if (distY > (20 / 2 + Pendulum.radius)) {
        return false;
    }

		// Are colliding
    if (distX <= (20 / 2)) {
        return true;
    }
    if (distY <= (20 / 2)) {
        return true;
    }

    var dx = distX - 20 / 2;
    var dy = distY - 20 / 2;
    return (dx * dx + dy * dy <= (Pendulum.radius * Pendulum.radius));
}
