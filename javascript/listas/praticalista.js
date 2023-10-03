// FILA = first in first out
// PILHA = first in last out

var fila = []

//adicionar item a fila
function filaAdd(nome){
    fila.push(nome);
}

function filaProx(){
    return fila.shift()
}


var pilha = []

function pilhaAdd(nome){
    pilha.push(nome);
}

function pilhaProx(){
    return pilha.pop()
}