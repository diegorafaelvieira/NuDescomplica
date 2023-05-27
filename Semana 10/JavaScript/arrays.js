var valores = [8,1,7,2,9];

console.log(valores[0]);
console.log(valores[3]);

console.log("Array invertido: " + valores.reverse());

for(var pos = 0; pos < valores.length; pos++) {
  console.log("Posição: " + valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW", "Yamaha", "Honda");

// Calcular a média de todos os números de um array
var soma = 0;
for(var pos = 0; pos < valores.length; pos++) {
  soma += valores[pos];
}
var media = soma / valores.length;
console.log("Média: " + media);

var maior = 0;
for(var pos = 0; pos < valores.length; pos++) {
  if(maior < valores[pos]) {
    maior = valores[pos];
  }
}
console.log("Maior valor: " + maior);

var arr1 = [1,2,3,4,5,6];

console.log(arr1.join('|'));

var retirado = arr1.shift(); //retira o 1 elemento do array
console.log(retirado);
console.log(arr1);
console.log("Posição do número 3: " + arr1.indexOf(3));

arr1.push(7);//acrescenta no final
console.log(arr1);

arr1.pop();//retira o último elemento do array
console.log(arr1);

var ar = [-5,10,15,20,-3,89];

var arr2 = [1,2,3,4,5,6,7];
arr2.splice(2, 3);
console.log(arr2);

var nomes = ["Maria", "Joao", "Lucas", "Pedro"];
var novos = nomes.splice(1, 1, "Luiz");
console.log(nomes);
console.log(novos);

var pais = ["Brasil", "Argentina", "Colombia"];
pais.unshift("Uruguai"); // insere no começo do array
console.log(pais);

var nomes2 = ["Guilherme", "Manuel", "Samuel", "Davi", "Joao"];
nomes2.unshift("Monica");
nomes2.pop();
console.log(nomes2.indexOf("Samuel"));
console.log(nomes2);
nomes2.splice(2, 1, "Emanuel");
console.log(nomes2);


var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var gerente = ["Davi", "Manuela"];
var pessoas1 = pessoa.slice(1,3);
console.log(pessoa);
console.log(pessoas1);
var empresa = pessoa.concat(gerente);
console.log(empresa);

var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
/*Dividir em trimestre  novo array pra cada*/
var trim1 = meses.slice(0,3);
var trim2 = meses.slice(3,6);
var trim3 = meses.slice(6,9);
var trim4 = meses.slice(9);
console.log(trim1);
console.log(trim2);
console.log(trim3);
console.log(trim4);



