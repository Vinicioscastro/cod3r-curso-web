const bebidas = {
}
const bebidas2 = {
}
const bar = 'ViniBar'

var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;


bebidas.nome = 'skol'
bebidas.quantidade = 50

console.log(bebidas)

function venda(bebidas, numerodevenda) {
    bebidas.quantidade = bebidas.quantidade - numerodevenda
    for (var i = 0; i < 3; i++) {
        return console.log(`
    |--venda de bebidas realizada com sucesso--|
                ${bar}
    -> Quantidade de bebidas --------------> ${1}
    -> Nome da Bebida ---------------------> ${bebidas.nome}
    -> Data da Compra ---------------------> ${dataAtual}
    `)

    }


    /* numerodevenda = numerodevenda -1
     if (numerodevenda = 0) {
         return
     }else if(numerodevenda != 0) venda (bebidas, numerodevenda)
     */
}

function cadastrar(nome, quantidade) {
    bebidas2.nome = nome
    bebidas2.quantidade = quantidade
}

//venda(bebidas, 5)

//console.log(bebidas)

cadastrar('Magnifica', 150)

//console.log(bebidas2)

venda(bebidas2, 3)

console.log(bebidas2)

for(var j=0 ; j<10; j++){
    console.log(j)
}