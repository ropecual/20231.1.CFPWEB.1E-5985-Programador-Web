// funçoes nativas

// console.log('oi')
// confirm('oi')

function echo(msg = 'Mensagem em branco', tipo='log') {
    switch (tipo){
        case 'alert': alert(msg);
            break
        case 'confirm': confirm(msg)
            break
        case 'prompt':
            prompt(msg)
            break
        default:
            console.log(msg);
    }
    console.log(msg);
}


echo('oi', 'prompt');