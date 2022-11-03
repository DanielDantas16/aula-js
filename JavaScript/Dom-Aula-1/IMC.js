const nome = document.querySelector('#Nome')
const altura = document.querySelector ('#Idade')
const peso = document.querySelector ('#Peso')
const calcular = document.querySelector ('#Calcular')
const resultado = document.querySelector ('#Resultado')

function imc (){
    if (nome.value !== ''){
    const valorIMC = (peso.value/
    (altura.value**2))
  
    if(valorIMC <= 18){
        resultado.textContent = `${nome.value}, você possui ${valorIMC}
        de IMC, Você está abaixo do peso`
    }else if (valorIMC > 18 && valorIMC <= 25){resultado.textContent = `${nome.value},
    você possui ${valorIMC} de IMC. você está no peso ideal`
    }else{ 
    resultado.textContent = '${nome.value},voc'


    }else{
        alert ('preencha o campo vazio!')
    }
}

Calcular.addEventListener('click', imc)