/* ----------------------------------------------------------------------------

Exercício: 012
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão.
---------------------------------------------------------------------------- */

document.querySelector("button").addEventListener('click',()=>{
    inserir_texto();
})

function inserir_texto(){
    let text = document.querySelector("input").value;
    if(text!=""){
        novo_paragrafo(text);
        console.log(text);
    }
}

function novo_paragrafo(text){
    const para = document.createElement("p");
    const node = document.createTextNode(text);
    para.appendChild(node);

    document.querySelector("#posts").appendChild(para);
}