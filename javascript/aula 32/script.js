function gerarCorAleatoria() {
    // Gere valores aleatórios para os componentes RGB
    var r = Math.floor(Math.random() * 256); // Valor de 0 a 255
    var g = Math.floor(Math.random() * 256); // Valor de 0 a 255
    var b = Math.floor(Math.random() * 256); // Valor de 0 a 255

    // Crie uma string no formato RGB
    var cor = 'rgb(' + r + ',' + g + ',' + b + ')';

    return cor;
}


function mudarCor(elemento, cor = gerarCorAleatoria()) {

    if (elemento.getAttribute('cor') == cor) {
        elemento.style.backgroundColor = '';
        elemento.setAttribute('cor', '');
    } else {
        elemento.style.backgroundColor = cor;
        elemento.setAttribute('cor', cor)
    }

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
    bola.style.top = event.y+'px';
    bola.style.left = event.x+'px';
}