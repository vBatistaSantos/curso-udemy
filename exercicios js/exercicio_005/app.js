/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */
for(let r=1; r<=3; ++r){
    let slider = document.querySelector("#range_"+r);
    slider.setAttribute('min',0);
    slider.setAttribute('max',100);
    slider.value=0;
    slider.addEventListener('input',(e)=>{
        document.querySelector("#value_"+r).textContent= e.target.value;
    })
}