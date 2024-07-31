/* ----------------------------------------------------------------------------

Exercício: 021
Enunciado:
    Existem 4 inputs na página.
    1. Coloca o focus automaticamente no input acima e à esquerda.
    2. Sempre que pressionares a tecla Enter (return), o focus deverá
    passar para o input seguinte, mesmo que não tenhas escrito qualquer texto.
---------------------------------------------------------------------------- */
const inputs = document.querySelectorAll('input');
inputs[0].focus(); 

inputs.forEach(input=>{
    input.addEventListener('keydown',input=>{
        if(input.key=='Enter'){
            let id = input.target.name.substring(5,6) - 1;
            if(id>=3){
                id = 0;
            }else{
                id++;
            }
            inputs[id].focus();
        }
    })
})