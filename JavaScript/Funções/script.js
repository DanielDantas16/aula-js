// Funções 

/*
Function = Função 
Function nome (parâmetros){
    bloco ações 
}
*/
// var a = 5
// var b = 7
// var total = a + b


// function soma(a,b){
//     var total = a + b 
//     return console.log(total)
// }

// soma(7,8)
// soma(10,20)


// Crie uma função que ache a área de um retângulo de medidas diferentes 

function areaDoRetangulo(ladoA, ladoB){
        var multiplicacao = ladoA * ladoB
      return console.log(multiplicacao)
}

areaDoRetangulo(8,9)


// Crie uma função que ache a área de um quadrado 

function areaDoQuadrado(ladoC){
    var multiplicacaoo = ladoC*ladoC
    return console.log(multiplicacaoo)
}

areaDoQuadrado(8) // argumento 

function pi(){
    return 3.1415 
}

var total = 5 + pi();
console.log(total)

function corFavorita (cor){
    if (cor === 'Azul'){
    return   'Gosta do céu'
    }else if (cor === 'Verde'){
        return 'È Palmeirense'
    }else{
    return 'Você gosta de nada'
    }
}


