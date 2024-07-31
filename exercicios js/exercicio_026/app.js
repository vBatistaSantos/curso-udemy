/* ----------------------------------------------------------------------------

Exercício: 026
Enunciado:
    Existem 4 inputs de texto, cada um com um id diferente.
    Cada input só pode receber um caracter.
    O focus deve iniciar no primeiro input.
    Ao digitar um algarismo, o focus deve ir para o próximo input.
    Ao digitar o último algarismo, o focus deve ir para o primeiro input.
    Se todos os inputs estiverem preenchidos, o sistema deve verificar se o
    número constituído pela concatenacao dos 4 algarismos é igual a 1234.
    Se for igual, deve aparecer uma mensagem de sucesso, caso contrário,
    a mensagem de sucesso deve estar escondida.
---------------------------------------------------------------------------- */
let inputs = document.querySelectorAll('[id^="t"]');
inputs[0].focus();
let sucesso = document.querySelector('.text-success');
sucesso.style.visibility='hidden';
const n = ['0','1','2','3','4','5','6','7','8','9'];
inputs.forEach(input=>{
    input.maxLength=1;
    input.addEventListener('keydown',(e)=>{
        if(!n.includes(e.key)){
            e.preventDefault(); //demorou umas 2 horas pra eu descobrir isso
        }
    })
    input.addEventListener('keyup',(e)=>{
        if(n.includes(e.key)){
            let index = e.target.id.substring(1);
            (index<=3)?index=index:index=0;
            console.log(index);
            inputs[index].focus();
        }
        let senha='';
        for(let i=0;i<=3;i++){
            senha +=inputs[i].value;
        }
        (senha=='1234')?sucesso.style.visibility='visible':sucesso.style.visibility='hidden';

    })
    
})