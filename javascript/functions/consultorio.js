// Crie um sistema de senhas para nosso consultorio
// ele deve ter tres opcoes, Normal, Preferencial e Retorno
// Cada vez que o usuario chamar a funcao correspondente ele deve
// adicionar um novo numero a senha chamada
// Utilize seu conhecimento de Clouseres para resolver o problema




function senha(prefixo) {
    let cont = 0;
    let pre = prefixo;

    function increment() {
        return pre + (++cont)
    }

    return increment;
}

normal = senha('N');
preferencial = senha('P');
retorno = senha('R')