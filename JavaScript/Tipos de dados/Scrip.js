//tipos de dados 

//todos são primitivos exceto os objetos.

var nome = "João"  //String
var idade = 15 // number
var VerdadeiroOuFalso = true // Boolean
var time;  // Undefined
var comida = null //null
var novoobjeto = {}  //object

//objetos 

    const Alunos  = {
        NomeDoAluno: 'Erick',
        IdadeDoAluno:  16,
        TimeDoAluno: false,
    }

    console.log(Alunos.NomeDoAluno)
    //Verificar os Tipos de dados 

    console.log (typeof nome);
    console.log (typeof idade);
    console.log (typeof VerdadeiroOuFalso);
    console.log (typeof time);
    console.log (typeof comida);
    console.log (typeof novoobjeto);

    //Você pode somar string e assim concatenar as palavras.

    var nome2 = "Daniel" 
    var sobrenome = "Guimarães"
    var nomeCompleto = nome2 +" "+ sobrenome;
    console.log (nomeCompleto)

    //você pode somar números com strings, o resultado final sempre será uma strnig.

    var gols = 1000
    var frase = 'Pelé fez ' + gols +  'gols'
    console.log (frase)

    //Template String
    var golaços = 1000;
    var frase2 = `Daniel Guimarães fez mais de ${golaços} gols`
    console.log (frase2)

    var nome = "João"  //String
    console.log (nome)

    var gols = "9 Gols" // number
    console.log (gols)

    var idade = "16 Anos" 
    console.log (idade)

    var nome2 = "Daniel" 
    var sobrenome = "Guimarães"
    var nomeCompleto = nome2 +" "+ sobrenome;
    console.log (nomeCompleto)

    let ItsTime = "It's time"
    console.log (ItsTime)
    console.log (typeof nomeCompleto)

   /* var numero = prompt ("digite um valor: ");
    console.log (numero)*/

    //faça um programa que peça dois numeros para o usuario. Imprima a soma desses dois numeros.

    //Criar dois prompt

    //Criar dois prompt dentro de variaveis

    let x = parseInt(prompt ("Digite o 1° valor: "))
    let y = parseInt(prompt ("Digite o 2° valor: "))

    //somar os resultados
   let soma = x + y
   console.log (soma)    