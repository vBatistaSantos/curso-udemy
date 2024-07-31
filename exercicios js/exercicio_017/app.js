/* ----------------------------------------------------------------------------

Exercício: 017
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Não pode ser adicionada uma palavra ou frase repetida.
---------------------------------------------------------------------------- */
let excecoes = [""];

document.querySelector("button").addEventListener('click',()=>{
    let text = document.querySelector("input");
    if(!excecoes.includes(text.value)){
        inserir_paragrafo(text.value);
        excecoes.push(text.value);
    }
    text.value="";
    text.focus();
})

function inserir_paragrafo(text){
    let para = document.createElement("p");
    para.textContent = text;

    document.querySelector("#posts").appendChild(para);
}