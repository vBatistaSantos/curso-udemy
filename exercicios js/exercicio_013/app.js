/* ----------------------------------------------------------------------------

Exercício: 013
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. O texto deve apresentar uma numeração
    sequencial e depois de inserido, o input deve ser limpo e receber o focus para
    nova inserção.
---------------------------------------------------------------------------- */
let i=1;
document.querySelector("button").addEventListener('click',()=>{
    let text = document.querySelector("input");
    if(text.value!==""){
        inserir_paragrafo(i +" - " + text.value);
        i++;
        text.value="";
        text.focus();
    }
})

function inserir_paragrafo(text){
    let para = document.createElement("p");
    para.textContent = text;

    document.querySelector("#posts").appendChild(para);
}