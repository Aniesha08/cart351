// Code modified from Pendulum Swing by Fredo Corleone
// https://codepen.io/eternalsunshineofspotlessmind/pen/wxbwqE
// P5

class Pendulum {
constructor(origin, radius = 20, arm = 200) {
  this.origin = origin
  this.bob = createVector(origin.x, origin.y + arm)

  this.radius = radius
  this.arm = arm

  this.angle = 3.14 / 2
  this.aVel = 0.0
  this.aAcc = 0.0

  this.damping = 0.99

  this.dragging = false
}

go () {
  this.update()
  this.drag()
  this.render()
}

// Movement of the Pendulum ball
update() {
  if (!this.dragging) {
    this.angle += this.aVel
    this.aVel += this.aAcc
    this.aVel *= this.damping
    this.aAcc = 0.33 / this.arm * cos(this.angle)
  }
}

render() {
  this.bob.set(cos(this.angle) * this.arm, sin(this.angle) * this.arm)
  this.bob.add(this.origin)

  stroke(255)
  line(this.origin.x, this.origin.y, this.bob.x, this.bob.y)

  if (this.dragging)	{
    fill(128)
  }
  else{
    fill(255)
  }

  ellipse(this.bob.x, this.bob.y, this.radius * 2)
}

// Mouse interactions

clicked() {
  let distance = dist(mouseX, mouseY, this.bob.x, this.bob.y)
  if (distance < this.radius) {
    this.dragging = true
  }
}

stopDragging() {
  if (this.dragging) {
    this.aVel = 0
    this.dragging = false // stops it from sticking with the mouse, enabling you to release
  }
}

drag() {
  if (this.dragging) {
    let difference = p5.Vector.sub(this.origin, createVector(mouseX, mouseY))
    this.arm = constrain(difference.mag(), 0, height)
    this.angle = atan2(-difference.y, -difference.x)
  }
}
}
