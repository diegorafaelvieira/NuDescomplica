/*Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos em uma viagem, sabendo-se que o carro faz 12km com um litro. Deverão ser fornecidos o tempo gasto na viagem e a velocidade média.
o algoritmo deverá apresentar os valores da velocidade média, tempo gasto na viagem, distância percorrida e a quantidade de litros utilizados na viagem.*/

var litros;
var tempo = 3;
var velocidadeMedia = 80;
var distancia;

distancia = tempo * velocidadeMedia;
litros = distancia/12;

console.log("Velocidade média: " + velocidadeMedia);
console.log("Tempo: "+ tempo);
console.log("Distância: "+ distancia);
console.log("Litros: "+ litros);