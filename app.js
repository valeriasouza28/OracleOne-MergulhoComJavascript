alert("Boasvindas ao jogo do número secreto");

let chute;
let tentativas = 1; 
let numeroSecreto = 9;
console.log(numeroSecreto);

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e 10: `);
// ns = 9 chute = 2 
    if (chute == numeroSecreto){
        alert(`Isso aí! Você descobriu o Nùmero Secreto ${numeroSecreto} com ${tentativas} tentativas`);
     } else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++
    }
    
}


