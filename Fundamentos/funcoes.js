// função sem retorno
function imprimirsoma(a, b) {
    {


        console.log(a + b)

    }
}

imprimirsoma(5, 3)

// função com retorno

function imprimir(c, d = 1) {
    return c + d
}

let somas = imprimir(2, 14)
console.log(somas)

// armazenamento de uma função arrpw em uma variarel 

let soma = (i, v) => {
    return i + v
}

// retorno implicito
let somar = (r, b) => r + b


console.log('teste aqui')

console.log(soma(6, 7))
console.log(somar(6, 7))

