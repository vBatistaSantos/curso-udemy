/* ----------------------------------------------------------------------------

Exercício: 015
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão.

    As palavras e frases mais recentes devem ficar no topo.
---------------------------------------------------------------------------- */
document.querySelector("button").addEventListener('click',()=>{
    let text = document.querySelector("input");
    const excecoes = [""];
    if(!excecoes.includes(text.value.toLowerCase())){
        inserir_paragrafo(text.value);
        text.value="";
        text.focus();
    }
})

function inserir_paragrafo(text){
    let para = document.createElement("p");
    para.textContent = text;

    const posts = document.querySelector("#posts");
    if (posts.childElementCount==0){
        posts.appendChild(para);
    }else{
        posts.insertBefore(para, posts.firstElementChild);
    }
}