let canvas = document.getElementById('canvas')
let c = canvas.getContext('2d')

console.log(collisions)

//Definindo largura do canvas
canvas.width = 960
canvas.height = 540

const speed = 4

//Criando objeto da imagem do mapa
const image = new Image()
image.src = 'img/map.png'

//Criando objeto da image do boneco
const jogadorImagem = new Image()
jogadorImagem.src = 'img/playerDown.png'

class Sprite{
    constructor({position,velocity,image}){
        this.position = position
        this.image = image
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({
    position:{
        x: -214,
        y: -1371
    },
    image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    c.drawImage(
        jogadorImagem,
        0,
        0,
        jogadorImagem.width/4,
        jogadorImagem.height,
        canvas.width/2 - jogadorImagem.width/8,
        canvas.height/2 - jogadorImagem.height/2,
        jogadorImagem.width/4,
        jogadorImagem.height
    )

    if(keys.w.pressed) background.position.y += speed
    else if(keys.a.pressed) background.position.x += speed
    else if(keys.s.pressed) background.position.y -= speed
    else if(keys.d.pressed) background.position.x -= speed

}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
})


window.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})