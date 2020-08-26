{
    {
        {
            { var sera = 'sera??' }

        }
    }
}

console.log(sera)

var numero = 1
function mostrar() {
    var numero = 2
    console.log('dentro = '+ numero)
}

console.log('fora = ' + numero)
mostrar()
console.log('fora novamente = ' + numero)