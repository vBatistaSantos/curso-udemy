/* ----------------------------------------------------------------------------

Exercício: 004
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES
    
    Estão disponíveis três input ranges e respetivas áreas de apresentação dos valores.
    Criar os mecanismos que permitem visualizar os valores dos sliders.
    Todos os sliders devem variar entre 0 e 100. Essas propriedades devem ser
    definidas através do JavaScript.

---------------------------------------------------------------------------- */
// const slider=new Array(
//     document.querySelector("#range_1"),
//     document.querySelector("#range_2"),
//     document.querySelector("#range_3")
// );

// const sliderValor=new Array(
//     document.querySelector("#value_1"),
//     document.querySelector("#value_2"),
//     document.querySelector("#value_3")
// );

// slider[0].oninput = ()=>{
//     sliderValor[0].textContent = slider[0].value;
// };

const listaSliders = document.querySelectorAll(".form-range");
const listaOutput = document.querySelectorAll(".fs-1");

listaSliders[0].oninput=()=>{
    listaOutput[0].textContent=listaSliders[0].value;
}
listaSliders[1].oninput=()=>{
    listaOutput[1].textContent=listaSliders[1].value;
}
listaSliders[2].oninput=()=>{
    listaOutput[2].textContent=listaSliders[2].value;
}