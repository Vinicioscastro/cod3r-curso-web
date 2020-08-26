var lista = ['vinicios', 'bernardo', 'zilda', 'vitor']

// console.log(lista[0])


function mostrarLista() {
    for (let i = 0; i < 4; i++) {
        console.log(lista[i])
    }
}

lista[4] = 'iker'
mostrarLista()
