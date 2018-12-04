// Code from: Rain Landing by Ed Ball
// https://codepen.io/edball/pen/AIdwi
// Original Code is modified for this project**
// View original code here:

//setTimeoue needed to get full screen canvas
setTimeout(function() {

function resizeCanvas() {
  ch = window.innerHeight;
  cw = window.innerWidth;
  c.width = cw;
  c.height = ch;
};


var cw, ch,
    c = document.getElementById('c'),
    ctx = c.getContext('2d'),
    parts = [],
    globalTick = 0,
    rand = function(min, max){
        return Math.floor( (Math.random() * (max - min + 1) ) + min);
    };



var Part = function(){
  this.reset();
};

Part.prototype.reset = function(){
  this.startRadius = rand(1, 5);
  console.log(this.startRadius);
  this.radius = this.startRadius;
  this.x = rand(0, c.width);
  this.y = rand(0, c.height);
  this.startAlpha = 0.8;
  this.alpha = this.startAlpha;
  this.decayRate = .3;
  this.startLife = rand(10, 20);
  this.life = this.startLife;
  this.lineWidth = 2;
  this.growSpeed =1;
  this.colorChosen =colorChosen;
}

Part.prototype.update = function(){
  this.alpha = this.startAlpha * (this.life / this.startLife);
  if(this.radius>75 || this.radius<1 )
  {
    this.growSpeed*=-1;
  }
  this.radius = this.radius+this.growSpeed;
  this.life -= this.decayRate;
};

Part.prototype.render = function(){
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  ctx.strokeStyle= this.colorChosen;
  ctx.lineWidth = this.lineWidth;
  ctx.stroke();
};

var createParts = function(){
for (var i = 0; i < 5; i++){
  parts.push(new Part());
}
};

var updateParts = function(){
   var i = parts.length;
  while(i--){
  //   if (parts[i].life < 0){
  //     parts.splice(i, 1)
  //   }
    parts[i].update();
  }
};

var renderParts = function(){
  var i = parts.length;
  while(i--){
    parts[i].render();
  }
};

var clear = function(){
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillRect(0, 0, cw, ch);
  ctx.globalCompositeOperation = 'source-over';
};

//Run through the first iterations to get all the parts ready for rendering.
// for (i = 0 ; i < 1 ; i++){
//     if (globalTick % 60 == 0){
//       createParts();
//     }
//     updateParts();
//     globalTick++;
// }

var loop = function(){
  window.requestAnimFrame(loop, c);
      clear();

      //if (globalTick % 60 == 0){
    if(questionAnwsered ===true){

        createParts();
        console.log("in here");
        questionAnwsered =false;
    }

  		updateParts();
  		renderParts();
  		globalTick++;



};

window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();


resizeCanvas();
window.onresize = resizeCanvas;

loop();

}, 1);
