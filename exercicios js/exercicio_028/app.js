/* ----------------------------------------------------------------------------

Exercício: 028
Enunciado:
    Existe um botão o qual, ao ser clicado, cria 20 números aleatórios entre 1 e 1000.
    Esses números devem ser apresentados cada um em sua própria linha dentro do elemento
    cujo id é igual a "numeros".
---------------------------------------------------------------------------- */
let botao = document.querySelector('button');
let container = document.querySelector('#numeros');

botao.addEventListener('click',()=>{
    container.innerHTML='';
    for(let i=1;i<=20;i++){
        let n = Math.floor(Math.random() * 1000) + 1;
        
        let para = document.createElement('p');
        para.innerHTML=n;

        container.appendChild(para);
    }
})