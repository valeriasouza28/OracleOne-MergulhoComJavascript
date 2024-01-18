let porcentagemDesconto = 0;
let quantidadeMilhas

if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
}

if(quantidadeMilhas > 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    porcentagemDesconto = 0;
}