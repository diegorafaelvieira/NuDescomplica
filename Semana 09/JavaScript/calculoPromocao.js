/*Para fazer uma promoção, os comerciantes estão procurando aumentar suas vendas oferecendo desconto. Faça um algoritmo que possa receber um valor de um produto e que o novo valor tendo em vista que o desconto foi de 9%. */
var valorProduto = 1000;
var desconto;
var novoValor;

desconto = valorProduto * 0.09;
novoValor = valorProduto - desconto;

console.log("Valor com desconto R$"+novoValor);
