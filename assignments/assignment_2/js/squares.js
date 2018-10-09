function myRunningSquares(x,y,c){
this.xPos = x;//initial vals
this.yPos = y;
// position the squares starting from 3/4 of the canvas height
//  y = (canvas.height-300 + Math.floor(Math.random() * 300));
this.squareColor = c;


//member function
this.render =function(){
    fill(this.squareColor);// change the color we are using
    /**SABINE CHANGE--> use this.xPos, this.yPos....)*/
    rect(this.xPos,this.yPos,30,30);
  }
 //member function for updating
 this.update = function(){
     if (this.squareColor === "#df439e"){
         console.log ('this color');
     }

  this.xPos++;
  }
} //end myRunningSquare
