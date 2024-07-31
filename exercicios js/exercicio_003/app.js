/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */
let valor=0;
const htmlValor = document.querySelector("#valor");

document.querySelector("#btn_decremento").addEventListener('click',()=>{
    --valor;
    set_valor();
})
document.querySelector("#btn_incremento").addEventListener('click',()=>{
    ++valor;
    set_valor();
})

function set_valor(){
    
    htmlValor.textContent=valor;
    if (valor>0){
        htmlValor.style.color = "green";
    }else if(valor<0){
        htmlValor.style.color = "red";
    }else{
        htmlValor.style.color = "white";
    }

}