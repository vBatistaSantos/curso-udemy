/* ----------------------------------------------------------------------------

Exercício: 029
Enunciado:
    Começando pelo exercício 28, mas agora queremos apresentar os números numa
    sequência de quatro por cada linha. Deve aparecer com fundo branco e texto 
    de cor verde. Deve ter uma distribuição consistente da informação. 
---------------------------------------------------------------------------- */
let gerar = document.querySelector('button');
let container = document.querySelector('#numeros');

gerar.addEventListener('click',()=>{
    gerarNumeros();
})

function gerarNumeros(){
    
    container.innerHTML='';

    for(let r=1;r<=5;r++){
       
        let row = document.createElement('div');
        row.className='row bg-white mb-4';
        row.id='r'+r;
        container.appendChild(row);
       
        for(let c=1;c<=4;c++){
            
            let n = Math.floor(Math.random() * 100) + 1;
            let col = document.createElement('div');
            col.className='col text-black';
            col.innerHTML=n;
            row.appendChild(col);
            
        }
    }



}