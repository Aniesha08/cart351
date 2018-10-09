function myRunningSquares(x,y,c, colorNumber){
this.xPos = x;
this.yPos = y;
this.squareColor = c;
this.colorNumber =colorNumber;


//member function
this.render =function(){
    fill(this.squareColor);// change the color we are using
    /**SABINE CHANGE--> use this.xPos, this.yPos....)*/
    rect(this.xPos,this.yPos,30,30);

  }

 //member function for updating
 this.update = function(){
  this.xPos++;
  }

this.tones = function (){
    console.log("tone"+ this.colorNumber);
// add the sound functions
}

} //end myRunningSquare
