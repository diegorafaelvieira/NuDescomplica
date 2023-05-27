/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.*/

var salario = 6000;
var reajuste = 10;
var novoSal;

novoSal = salario + (salario * reajuste/100);
console.log("Novo salário R$"+ novoSal);