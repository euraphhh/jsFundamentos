// Exercício 2 - Estrutura de decisão

// Percorrer uma lista de cidades
// Contendo: São Paulo, Rio de Janeiro, Florianópolis e Recife
// Para cada item, verificar se a cidade Florianópolis está presente
// Caso esteja, avisar
// Caso não esteja, avisar que não está presente
// Número da execução

// Execução: 1
// Cidade: São Paulo
// Encontrado / Não encontrado
// -------------------

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']

cidades.forEach((cidade, index ) => {
    console.log("Execução número: " + (index + 1))
    console.log("Cidade: " + cidade)

    if (cidade == 'Florianópolis') {

        console.log("Encontrado")
        console.log("-------------------")

    } else {
    console.log("Não encontrado")
    console.log("-------------------")
    }
}
)