/* ----------------------------------------------------------------------------

Exercício: 022
Enunciado:
    Está disponível um elemento select com 3 opções.
    Por baixo existem 4 checkboxes.
    Quando é selecionada a opção 3 no select, as checkboxes devem ficar ativas.
    Qualquer outra opção, devem desativar as checkboxes.
---------------------------------------------------------------------------- */
let selecao = document.querySelector(".form-select");

selecao.addEventListener('input',()=>{
    let opcao = selecao.value;
    
    let checkboxes = document.querySelectorAll('[type="checkbox"]')
    checkboxes.forEach(check=>{
        if(opcao==3){
            check.disabled = false;
        }else{
            check.disabled = true;
            check.checked = false;
        }
    })
})