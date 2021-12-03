import Drop from "./Drop.js"

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

const drops = []

for(let x = 0; x < 600; x++) {
  const width = Math.floor(Math.random() * 4 + 1)
  
  const drop = new Drop(Math.floor(Math.random() * canvas.clientWidth), Math.floor(Math.random() * canvas.clientHeight), width, width*4)
  
  drop.color = "rgb(255, 255, 255)"
  
  drops.push(drop)
}

const update = delta=>{
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
  
  for(let x = 0; x < drops.length; x++) {
    drops[x].draw(200, delta)
    
    if(drops[x].y > canvas.clientHeight) {
      const width = Math.floor(Math.random() * 4 + 1)
      
      const drop = new Drop(Math.floor(Math.random() * canvas.clientWidth), Math.floor(Math.random() * canvas.clientHeight), width, width * 4)
      
      drop.color = "rgb(255, 255, 255)"
      
      drops[x] = drop
    }
  }
  
  setTimeout(update, 0, 1/120)
}

update(1/120)