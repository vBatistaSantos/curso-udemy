/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */
for(let b=1; b<=5;++b){
    let botao = document.querySelector("#btn"+b);
    botao.addEventListener('click',()=>{
        // botao.textContent = botao.style.backgroundColor;
        let botaoCor = getComputedStyle(botao);
        console.log(botaoCor['background-color']);
        
        document.querySelector("h3").style.color = botaoCor['background-color'];
    })
}