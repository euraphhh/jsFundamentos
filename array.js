const paises = ['Brasil', 'Argentina', 'Alemanha'] // lista de dados

console.log('Acessando o país: ' + paises[0]) // acessando uma posição do array
console.log('Tamanho do array: ' + paises.length) // tamanho do array

// Operações com arrays

paises.push('EUA') // adiciona um elemento no final do array
paises.pop() // remove o último elemento do array
paises.unshift('França') // adiciona um elemento no início do array
paises.shift() // remove o primeiro elemento do array

console.log(paises)