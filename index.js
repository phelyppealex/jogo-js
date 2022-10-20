let canvas = document.getElementById('canvas')
let c = canvas.getContext('2d')
console.log(canvas)

//Definindo largura do canvas
canvas.width = 960
canvas.height = 540

//Criando objeto da imagem do mapa
const imagem = new Image()
imagem.src = 'map.png'

//Criando objeto da imagem do boneco
const jogadorImagem = new Image()
jogadorImagem.src = '/images/playerDown.png'

imagem.onload = () => {
    c.drawImage(imagem,0,-150)
    c.drawImage(jogadorImagem,0,0)
}