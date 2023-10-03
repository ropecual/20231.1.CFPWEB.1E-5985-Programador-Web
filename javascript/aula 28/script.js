let h3 = document.getElementsByTagName('h3')[0]

// Pegando um elemento dentro de outro elemento, no caso, pegamos a imagem que esta dentro do h3
let msg_img = h3.getElementsByTagName('img')[0]
// E aqui o div
let msg_text = h3.getElementsByTagName('div')[0]
console.log(h3)


//console.log(h3.textContent)
// Alterando o texto do elemento
// h3.textContent = 'Roni'
// Alterando HTML
// h3.innerHTML = "<img src='success.png'/> Roni"


function alertSucesso(texto) {
    msg_img.src = 'success.png'
    msg_text.textContent = texto;
    h3.style.display = 'flex';
    h3.style.color = 'green';
    h3.style.background = 'lime';
    h3.style.borderColor = 'green';
    // Se ja construimos a classe CSS podemos chama-la e/ou remove-la, ao inves de escrever aqui os atributos
    h3.classList.remove('error')
}


function alertError(texto) {
    msg_img.src = 'error.png'
    msg_text.textContent = texto;
    // Se ja construimos a classe CSS podemos chama-la e/ou remove-la, ao inves de escrever aqui os atributos
    h3.style.display = 'flex';
    h3.classList.add('error')
    h3.style.color = 'red';
    h3.style.background = 'pink';
    h3.style.borderColor = 'red';
}

let login = document.getElementById('login')
let senha = document.querySelector(('input[name="senha"]'))

function bloquearLogin(bloquear = true){
    login.disabled = bloquear;
    senha.disabled = bloquear;
}
function logar() {
    if (login.value == "") {
        login.style.borderColor = 'red';
    }
    if (senha.value == "") {
        senha.style.borderColor = 'red';
    }

    if (login.value != 'Roni' || senha.value != '123') {
        alertError('Senha Invalida');
    } else {
        alertSucesso("Bem vindo Roni");
    }

    console.log(login)
    console.log(senha)
}