let pendulum;
const MAX_SQUARES =5;
let mySquares = [];
let colors = ["#df439e","#c379e5","#0789df","#1fe9d6","#acf800","#fffc00","#ff931e","#ff5451"];

function mousePressed() {
	pendulum.clicked(mouseX, mouseY);
}

function mouseReleased() {
	pendulum.stopDragging();
}

function setup() {
	createCanvas(700, 600);
	let origin = createVector(width / 2, 0);
	pendulum = new Pendulum(origin);

  //fill the array with objects
	for (let i =0; i< MAX_SQUARES;i++){

	/** SABINE CHANGE**/
	let offsetX = 40;
	let offsetY = Math.floor(Math.random()*(canvas.height-250)+50); //generate a random y

	/** SABINE CHANGE**/
	// set the x to  be off screen - but space them out i.e. first square will be
	//-50, second, -100, third, -150 ...
	//possibility: randomize the offset ....
	//offsetX = (Math.random()*100)+75;
	mySquares.push(new myRunningSquares(-i*offsetX,offsetY,colors[i%colors.length],i%colors.length));
		
	  

	}

}

function draw() {
	background(0);
	noStroke();
	//fill(255);
	//textSize(16);
	//text('Drag the bob anywhere', 16, 32)
	for (let i =0; i< MAX_SQUARES;i++){
	  mySquares[i].update();
	  mySquares[i].render();
	 // mySquares[i].tones();	
	 if(hit(pendulum, mySquares[i]) ===true){
		mySquares[i].tones();
	 }
	}

	pendulum.go();

}

// http://jsfiddle.net/m1erickson/n6U8D/

function hit(Pendulum, myRunningSquare) {
    var distX = Math.abs(Pendulum.bob.x - myRunningSquare.xPos - 30 / 2);
    var distY = Math.abs(Pendulum.bob.y - myRunningSquare.yPos - 30 / 2);

    if (distX > (30 / 2 + Pendulum.radius)) {
        return false;
    }
    if (distY > (30 / 2 + Pendulum.radius)) {
        return false;
    }

    if (distX <= (30 / 2)) {
        return true;
    }
    if (distY <= (30 / 2)) {
        return true;
    }

    var dx = distX - 30 / 2;
    var dy = distY - 30 / 2;
    return (dx * dx + dy * dy <= (Pendulum.radius * Pendulum.radius));
}

// if (Hit(Pendulum, myRunningSquares)) {
// 	console.log("Hit!");
// 	// if they hit, play the sound...
// } 