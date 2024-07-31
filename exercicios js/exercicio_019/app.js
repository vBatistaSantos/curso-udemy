/* ----------------------------------------------------------------------------

Exercício: 019
Enunciado:
    Está declarado um array de frutos.
    Ao inserir uma palavra no input text e clicando em pesquisar, o sistema deverá
    indicar se a palavra existe ou não no array e indicar o resultado SIM ou NAO no
    elemento com o id = "resultado"

    NOTA: Não podes usar um ciclo neste exercício.
---------------------------------------------------------------------------- */
let frutos = ['laranja', 'maçã', 'pêra', 'morango', 'ananás', 'limão', 'banana'];

document.querySelector("button").addEventListener('click',()=>{
    let busca = document.querySelector("input");
    if(busca.value!==''){
        if(frutos.includes(busca.value)){
            document.querySelector('#resultado').innerHTML='SIM';
        }else{
            document.querySelector('#resultado').innerHTML='NÃO';
        }
    }
})