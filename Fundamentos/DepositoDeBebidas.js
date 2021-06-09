const bebidas = {
}
const bebidas2 = {
}


bebidas.nome = 'skol'
bebidas.quantidade = 50

console.log(bebidas)

function venda (bebidas , numerodevenda) {
    bebidas.quantidade = bebidas.quantidade - numerodevenda
    return console.log('venda de bebidas realizada com sucesso')
}

function cadastrar (nome, quantidade){
    bebidas2.nome = nome
    bebidas2.quantidade = quantidade
}

venda(bebidas, 5)

console.log(bebidas)

cadastrar('Magnifica', 150)

console.log(bebidas2)

venda(bebidas2 , 52)
console.log(bebidas2)

