alert("Boasvindas ao jogo do número secreto");

let numeroSecreto = 9;
console.log(numeroSecreto)

let chute = prompt("Escolha um número entre 1 e 10: ");

if (chute == numeroSecreto){
   alert(`Isso aí! Você descobriu o Nùmero Secreto ${numeroSecreto}`);
} else {
    alert("Você errou! :( ")
}
