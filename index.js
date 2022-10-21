let canvas = document.getElementById('canvas')
let c = canvas.getContext('2d')

//Definindo largura do canvas
canvas.width = 960
canvas.height = 540

//Criando objeto da imagem do mapa
const imagem = new Image()
imagem.src = 'img/map.png'

//Criando objeto da imagem do boneco
const jogadorImagem = new Image()
jogadorImagem.src = 'img/playerDown.png'

imagem.onload = () => {
    c.drawImage(imagem,0,-150)
    c.drawImage(
        jogadorImagem,
        0,
        0,
        jogadorImagem.width/4,
        jogadorImagem.height,
        canvas.width/2 - jogadorImagem.width/2,
        canvas.height/2 - jogadorImagem.height/2,
        jogadorImagem.width/4,
        jogadorImagem.height
    )
}