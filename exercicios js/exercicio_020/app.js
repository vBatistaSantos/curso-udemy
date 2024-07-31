/* ----------------------------------------------------------------------------

Exercício: 020
Enunciado:
    Existem 4 inputs na página.
    Sempre que o focus de um input for alterado, a cor de fundo do input
    deve ficar amarela, indicando que o input está ativo. 
    Os inativos devem ficar a branco.
---------------------------------------------------------------------------- */
const inputs = document.querySelectorAll('input');
inputs.forEach(input=>{
    input.addEventListener('focus',(input)=>{
        all_white();
        input.target.style.backgroundColor='yellow';
    })
})

function all_white(){
    inputs.forEach(input=>{
        input.style.backgroundColor='white';
    })
}