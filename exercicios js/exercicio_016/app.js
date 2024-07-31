/* ----------------------------------------------------------------------------

Exercício: 016
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
    Não importa a ordem das palavras e frases.
    Quando clicar em "Limpar", todas as palavras e frases devem desaparecer
    e o input deve ficar limpo e receber o focus.

    NOTA: O HTML não pode ser alterado.
---------------------------------------------------------------------------- */

const botoes = document.querySelectorAll('button')
const add = botoes[1];
const limpar = botoes[0];
let text = document.querySelector("input");

add.addEventListener('click',()=>{
    if(text.value!==""){
        inserir_paragrafo(text.value);
        limpa_input(text);
    }
})

limpar.addEventListener('click',()=>{
    const posts = document.querySelector("#posts");
    posts.innerHTML=null;
    // while(posts.hasChildNodes()){
    //     posts.removeChild(posts.firstChild);
    // }
    limpa_input(text);
})

function inserir_paragrafo(text){
    let para = document.createElement("p");
    para.textContent = text;

    document.querySelector("#posts").appendChild(para);
}

function limpa_input(text){
    text.value="";
    text.focus();
}