//console.log(h3.textContent)
// Alterando o texto do elemento
// h3.textContent = 'Roni'
// Alterando HTML
// h3.innerHTML = "<img src='success.png'/> Roni"

//<h3 className="msg"><img src="success.png">
//    <div>msg</div>
//</h3>
//<h3 className="msg error"><img src="error.png">
//    <div>msg</div>
//</h3>

//let msgs = document.getElementById('msgs')
let h1 = document.getElementsByTagName('h1')[0]
let login = document.getElementById('login')
let senha = document.querySelector(('input[name="senha"]'))


function createAlert(mensagem, tipo = 'sucesso') {
    let h3 = document.createElement('h3'); // Cria um elemento
    h3.classList.add('msg')
    let img = document.createElement('img')
    img.src = 'success.png'
    if (tipo == 'erro') {
        img.src = 'error.png'
        h3.classList.add('error')
    }
    let text = document.createElement('div')
    text.textContent = mensagem
    // tem que por em ordem pois eh como sera construido o html
    h3.appendChild(img)
    h3.appendChild(text) // Adiciona dentro do elemento
    h1.insertAdjacentElement('afterbegin', h3) // Adiciona ou antes ou depois do elemento
    setTimeout(
        function () { // Aqui temos uma funçao anonima... para usar junto ao setTimeout, que remove o elemento
            h3.remove();
        }, 5000
    );
    return h3
}

function alertSucesso(texto) {
    return createAlert(texto)
}


function alertError(texto) {
    return createAlert(texto, 'erro')
}


function bloquearLogin(bloquear = true) {
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