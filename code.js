let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let tileSet = new Image()
tileSet.src = "tileset.gif"

let camerax = 0
let cameray = 0
let speed = 5
let passo = 3

let canvasWidth = 700
let canvasHeight = 500

let zoom = 2

const draw = () => {
    ctx.clearRect(0, 0, 700, 500)
    ctx.drawImage(tileSet, camerax, cameray, canvasWidth/zoom, canvasHeight/zoom, 0, 0, canvasWidth, canvasHeight)
}

let gameRun = setInterval(draw, 1);

document.addEventListener("keydown", (evento) => {
    switch(evento.key){
        case 'w':
            if(cameray > 0) cameray -= passo
        break;
        case 's':
            if(cameray < 810)cameray += passo
        break;
        case 'a':
            if(camerax > 0) camerax -= passo
        break;
        case 'd':
            if(camerax < 740) camerax += passo
        break;
    }
});