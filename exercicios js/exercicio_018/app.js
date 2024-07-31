/* ----------------------------------------------------------------------------

Exercício: 018
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Cada texto inserido deve ser precedido da expressão "Eliminar" com cor vermelha
    e como efeito de um mouse hover.

    Se clicar em "Eliminar" apenas poderá ser removida a palavra ou frase
    correspondente.
---------------------------------------------------------------------------- */
let excecoes = [""];

document.querySelector("button").addEventListener('click',()=>{
    let text = document.querySelector("input");
    if(!excecoes.includes(text.value)){
        inserir_paragrafo(text.value);
    }
    text.value="";
    text.focus();
})



function inserir_paragrafo(text){
    let posts = document.querySelector("#posts");
    let para = document.createElement("p");
    
    let eliminar = document.createElement("span");
    eliminar.innerHTML = "Eliminar";
    eliminar.setAttribute("style","cursor:pointer; color:red");
    eliminar.setAttribute("id","para"+posts.children.length);

    
    para.appendChild(eliminar);
    para.innerHTML += "&emsp; | &emsp;"+text;
    
    posts.appendChild(para);

    let botoes = document.querySelectorAll('[id^="para"]')
    botoes.forEach(botao=>{
        botao.addEventListener('click',(eliminar)=>{
            eliminar.target.parentElement.remove();
        })
    })
}