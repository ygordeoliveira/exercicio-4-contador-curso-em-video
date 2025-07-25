// FIZ UMA FUNÇAO CONTAR PARA QUANDO EU CLICAR NO BOTÃO DE CONTAR ELE FARÁ A CONTAGEM PRA MIM//
// CRIEI AS VARIAVEIS DE INICIO,FIM,PASSO E RES PARA PEGAR OS ELEMENTOS DELE POR UM ID//
function contar(){
    let ini = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let res = document.getElementById("res");

 //FIZ UMA CONDIÇAO SE TIVER ALGUM CAMPO VAZIO EU MANDA A MENSAGEM//
    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
       res.innerHTML = "Impossível contar!"

//E SE TIVER COM OS VALORES NO CAMPO ELE VAI ESTAR CONTANDO//
//EMBAIXO CRIEI 3 VARIAVEIS E CONVERTI O VALOR QUE TEM DENTRO DO CAMPO PARA NÚMERO//
    } else {
       res.innerHTML = " Contando: <br>"
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       
//FIZ UMA CONDIÇAO PARA O PASSO DA MINHA CONTAGEM//
//SE O PASSO DA MINHA CONTAGEM FOR DE 0, ELE VAI CONSIDERAR A CONTAGEM DE 1 A 1//
       if(p <= 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
       }
       
       //SE O I FOR MENOR QUE O F, EU VOU FAZER UMA CONTAGEM CRESCENTE//
       if(i < f){
        for(let c = i; c <= f; c +=p){
            res.innerHTML += ` ${c} \u{1F449} `
          }
    
      //SENÃO EU VOU FAZER UMA CONTAGEM DO MAIOR PARA O MENOR//
       } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
       }
       //EMOJI DE BANDERINHA, QUANDO TERMINA//
       res.innerHTML += `\u{1F3C1}`
    }
 }   