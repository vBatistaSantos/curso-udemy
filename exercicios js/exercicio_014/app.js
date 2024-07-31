/* ----------------------------------------------------------------------------

Exercício: 014
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. 
    Depois da inserção com sucesso, o input deve ser limpo e receber o focus para
    nova inserção.
    Não são permitidas as palavras "teste", "obrigado" e "hoje"
---------------------------------------------------------------------------- */

document.querySelector("button").addEventListener('click',()=>{
    let text = document.querySelector("input");
    const excecoes = ["","teste","obrigado","hoje"];
    if(!excecoes.includes(text.value.toLowerCase())){
        inserir_paragrafo(text.value);
        text.value="";
        text.focus();
    }
})

function inserir_paragrafo(text){
    let para = document.createElement("p");
    para.textContent = text;

    document.querySelector("#posts").appendChild(para);
}