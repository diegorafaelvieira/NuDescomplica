/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algorito para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor*/
var carro = 40000;
var percDist;
var imposto;
var totalCarro;

percDist = carro * 28/100;
imposto = carro * 45/100;
totalCarro = carro + percDist + imposto;
console.log("Valor final do carro R$"+totalCarro);