

let pausado = true;
const bola = document.getElementById('bola');
const elemento_coordenada = document.getElementById('coord')

let x = bola.offsetLeft;
let y = bola.offsetTop;
block()
coordenada(x,y)
function teclado(event) {
    console.log(event)
    if (event.keyCode == 13) {
        console.log('enter apertado')
        pausado = !pausado
        block(pausado)

    }
    if (!pausado) {
        if (event.key === 'b') {
            // Apertou a tecla B
            // Vamos mudar a cor da bola para azul
            mudarCor(bola, ' blue');
        } else if (event.key === 'g') {
            mudarCor(bola, 'green')
        } else if (event.key === 'r') {
            mudarCor(bola, 'red')
        } else if (event.key === 0) {
            mudarCor(bola, 'black')
        }

        if (event.key === 'ArrowRight') {
            coordenada(x++,y)
            mudarCor(bola)
        } else if (event.key === 'ArrowLeft') {
            coordenada(x--,y)
            mudarCor(bola)
        } else if (event.key === 'ArrowDown') {
            coordenada(x,y++)
            mudarCor(bola)
        } else if (event.key === 'ArrowUp') {
            coordenada(x,y--)
            mudarCor(bola)
        }

    } else {
        console.log('Jogo Pausado')
    }

}

function coordenada(x,y) {
    bola.style.top = `${y}px`
    bola.style.left = `${x}px`
    elemento_coordenada.textContent = `${x},${y}`
}

function mudarCor(elemento, cor = '') {
    if (cor === '') {
        cor = gerarCorAleatoria()

    }
    elemento.style.backgroundColor = cor;

}

function gerarCorAleatoria() {
    // Gere valores aleatórios para os componentes RGB
    var r = Math.floor(Math.random() * 256); // Valor de 0 a 255
    var g = Math.floor(Math.random() * 256); // Valor de 0 a 255
    var b = Math.floor(Math.random() * 256); // Valor de 0 a 255

    // Crie uma string no formato RGB
    var cor = 'rgb(' + r + ',' + g + ',' + b + ')';

    return cor;
}

function block(block = true) {
    const caixa = document.getElementsByClassName('block')[0]
    // Usamos aqui um ternario, caso a variavel block seja true, ele muda o css para block, caso contrario, none
    caixa.style.display = (block) ? 'block' : 'none';
}


// Pegamos o evento, no caso o mover do mouse
// Então pegamos as coordenadas X e Y
function mover(event) {
    const coord = document.getElementById('coord')
    coord.textContent = `${event.x},${event.y}`
    // Aqui pegamos a bola que criamos e manipulamos com as coordenadas do mouse
    const bola = document.querySelector('.bola');
    bola.style.top = event.y + 'px';
    bola.style.left = event.x + 'px';
}