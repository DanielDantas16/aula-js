//Objetos 


// Conjunto de variáveis e funções, que são chamadas de propriedades e e métodos 


var pessoa = { 
    nome: 'Grazi',
    idade: 20,
    profissao: 'Monitora do professor bonitão',
    MaiorIdade: true,
}

console.log(pessoa)
console.table(pessoa) 

pessoa.nome // puxa informação de apenas um dado citado na variavel 
console.table (pessoa)
//objeto com funções ou métodos

var quadrado = {
    perimetro: function (lado){
        return lado + lado + lado + lado
    },
     quadradoDeRetangulos: function (area1,area2){
        return area1*area2;
    }
}

//Arrays 

//È um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma unica variável.

var videoGames = ['PS4','XBox', 'Switch']
console.log (videoGames.length) 