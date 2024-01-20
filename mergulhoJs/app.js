alert("Boasvindas ao jogo do número secreto");

let chute;
let tentativas = 1; 
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() *  numeroMaximo + 1);
console.log(numeroSecreto);

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);
// ns = 9 chute = 2 
    if (chute == numeroSecreto){
        break;
     } else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
    
}

let palavraTentativa = tentativas > 1 ? "tentativas": "tentativa"
alert(`Isso aí! Você descobriu o Nùmero Secreto ${numeroSecreto}. 
Com ${tentativas} ${palavraTentativa}`)


