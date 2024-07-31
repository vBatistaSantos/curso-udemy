/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */

for (let d=1 ; d<=3 ;++d){
    let tab = document.querySelector("#tab"+d);
    // document.querySelector("#info1").style.display= 'none';
    tab.addEventListener('click',()=>{
        console.log(d);
        for(let i=1;i<=3;++i){
            let info = document.querySelector("#info"+i);
            document.querySelector("#info"+i).style.display = (i==d) ? 'block':'none';
        }
    })
    document.querySelector("#tab1").click(); 
}

// document.querySelector("#info1").style.display = 'none';