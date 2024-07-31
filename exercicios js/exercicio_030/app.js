/* ----------------------------------------------------------------------------

Exercício: 030
Enunciado:
    No input de texto só podemos inserir números.
    Se clicarmos no botão "Calcular", devemos apresentar o resultado do valor
    inserido no input de texto a dividir por 3.
    Todos os resultados devem ser apresentados com uma casa decimal.
    Se o resultado de qualquer cálculo for incorreto, deve aparecer a mensagem
    "Valor inválido"
---------------------------------------------------------------------------- */
let input = document.querySelector('input')

// input.addEventListener('keydown',(e)=>{
//     if(!/([0-9]|backspace|tab|enter)/i.test(e.key)) e.preventDefault();
//     console.log(e.key);
// })  

let calcular = document.querySelector('button');
let resultado = document.querySelector('#resultado');
calcular.addEventListener('click',()=>{
    if(input.value==''||isNaN(input.value)){
        resultado.innerHTML = 'Valor inválido';
    }else{
        resultado.innerHTML = (input.value/3).toFixed(1);
    }
    
})