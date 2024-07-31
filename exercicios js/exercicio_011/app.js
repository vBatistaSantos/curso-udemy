/* ----------------------------------------------------------------------------

Exercício: 011
Enunciado:
    A grelha inicial contém dezasseis imgs sem souce.
    Quando clicamos numa das imgs, vamos apresentar o símbolo X (imagem)
    No clique seguinte, que só pode acontecer numa img que não tenha símbolo,
    vamos apresentar o símbolo 'O'.
---------------------------------------------------------------------------- */
let png='x.png';
const imgs = document.querySelectorAll('[id^="img"]')
imgs.forEach(img=>{
    img.addEventListener('click',(img)=>{
        if (img.target.src==""){
            console.log('ola mundo');
            img.target.src=png;
            (png=="x.png")?png='o.png':png='x.png';
        }
    })
})

