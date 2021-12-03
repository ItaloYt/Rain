const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

export default function Drop(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = "";
  
  let fallVel = 0;
  
  this.draw = (gravity, delta)=>{
    ctx.fillStyle = this.color
    
    ctx.fillRect(this.x, this.y, this.w, this.h)
    
    this.y += fallVel * delta
    fallVel += gravity * delta
  }
}