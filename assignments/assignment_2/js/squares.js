// Function for the squares
function myRunningSquares(x,y,c, colorNumber){
this.xPos = x;
this.yPos = y;
this.squareColor = c;
this.colorNumber =colorNumber;

this.render =function(){
    fill(this.squareColor);
    /**SABINE CHANGE--> use this.xPos, this.yPos....)*/
    rect(this.xPos,this.yPos,20,20);

  }

// Movement of the squares
 this.update = function(){
  this.xPos++;
  }

// Each square is assigned a tone to be played
this.tones = function (){
console.log("tone"+ this.colorNumber);

if(this.colorNumber === 0){
   tone1.play();
}

if(this.colorNumber === 1){
   tone2.play();
}

if(this.colorNumber === 2){
   tone3.play();
}

if(this.colorNumber === 3){
   tone4.play();
}

if(this.colorNumber === 4){
   tone5.play();
}

if(this.colorNumber === 5){
   tone6.play();
}

if(this.colorNumber === 6){
   tone7.play();
}

if(this.colorNumber === 7){
   tone8.play();
}
}

} //end myRunningSquare
