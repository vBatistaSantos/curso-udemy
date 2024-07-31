/* ----------------------------------------------------------------------------

Exercício: 025
Enunciado:
    O input number text_numero é o multiplicando. O seu valor só pode variar
    entre 1 e 20. Ao alterar o valor, deve ser apresentada a tabuada do número definido
    no div cujo id = resultados.
---------------------------------------------------------------------------- */

const controle = document.querySelector('.form-control');
let resultados = document.querySelector('#resultados');
controle.setAttribute('min','1');
controle.setAttribute('max','20');

controle.addEventListener('input',()=>{
    resultados.innerHTML='';
    for(let i=1;i<=10;i++){
        resultados.innerHTML+=controle.value + ' x '+i+' = '+ controle.value*i +'<br>';
    }
})