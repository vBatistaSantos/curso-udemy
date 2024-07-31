/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    O mesmo exercício do vídeo anterior, mas com código mais sintético.
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