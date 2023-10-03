var numeros = [0, 2, 5, 232]
var mistas = ['nome', 4, "er", 5.6]

mistas[0] = 'Roni'


let frutas = ['maca', 'pera', 'uva', 'abacate', 'limao', 'abacaxi']


// adicionando no final da lista
frutas.push('banana')
console.log(frutas)

// removendo um item do final da lista
retorno = frutas.pop() // ele, alem de remover o ultimo elemente, ele o retorna, podendo salvar em uma variavel
console.log(frutas)
console.log(retorno)

// adicionando no inicio da lista
frutas.unshift('banana')
console.log(frutas)

// removendo um item do inicio da lista
retorno = frutas.shift() // ele, alem de remover o primeiro elemente, ele o retorna, podendo salvar em uma variavel
console.log(frutas)
console.log(retorno)


// remove um elemento do meio da lista (entre o primeiro e o ultimo) sendo o primeiro argumento
// o primeiro elemento a ser removido e o segundo argumento a quantidade a serem removidos
console.log(frutas)
frutas.splice(2, 2)
console.log(frutas)

// adiciona ou substitui um elemento do meio da lista (entre o primeiro e o ultimo) sendo o primeiro argumento
// o primeiro elemento a ser adicionado e o segundo argumento a quantidade a serem substituidos
console.log(frutas)
frutas.splice(2, 0, 'laranja', 'lima')
console.log(frutas)


// Percorrendo listas

for (let indice = 0; indice < frutas.length; indice++) {
    console.log(`A fruta n ${indice} eh a ${frutas[indice]}`)
}

// percorrendo com foreach
frutas.forEach((item, index) => {
    console.log(`FOREACH A fruta n ${index} eh a ${item}`)
})

// alterando um elemento da lista
frutas.forEach((item, index,nova_frutas) => {
    console.log(`FOREACH A fruta n ${index} eh a ${item}`)
    if (item == 'lima') {
        nova_frutas[index] = 'Jaca'
    }
})
console.log(frutas)