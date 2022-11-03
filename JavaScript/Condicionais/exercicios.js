var valor = prompt ('Digite um número:') 

if (valor >= 10){
    console.log ('Esse número é maior que 10')
}else{
   console.log ("Esse número é menor que 10")
}

//Operadores lógicos

/*
  == -> igualdade
  >  -> maior que
  <  -> menor que
  != -> diferente
  >= -> maior que igual
  <= -> menor ou igual
*/

var a = 1,
    b = 5,
    c = 2,
    d = 1;
console.log (a>b) // false
console.log(a<b)  // true
console.log (a==d) // true
console.log (b >= a) // true
console.log (c <= b) // true
console.log (d != a) // false
console.log (d != b) // true