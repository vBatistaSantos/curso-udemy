/* ----------------------------------------------------------------------------

Exercício: 009
Enunciado:
    Exercício simples: O texto é branco e o elemento range vai servir para
    alterar a transparência do texto. Do valor mais opaco à esquerda, até
    à transparência total à direita.

    NOTA: Deves definir os valores do range.
---------------------------------------------------------------------------- */

let slide = document.querySelector("#range");
slide.setAttribute('min',0); slide.setAttribute('max',100); slide.value=0;
slide.addEventListener('input',(e)=>{
    document.querySelector("h3").style.opacity=1-(e.target.value/100);
})