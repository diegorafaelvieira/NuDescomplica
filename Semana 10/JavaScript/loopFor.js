var carro = [{modelo: 'Audio A3', marca: 'Audi', ano: 2020},
             {modelo: 'Compass', marca: 'Jipe', ano: 2021}
]

for(let caracteristica in carro) {
  console.log(carro[caracteristica]);
}

for (let c of carro) { //mais indicado para pegar uma propriedade
  console.log(c.ano);
}

var c = 1;
while(c <= 10) {
  console.log(c);
  c++;
}

var t = 1;
do{ //pelo menos uma vez vai executar mesmo sendo falsa
  console.log(t);
  t++;
} while(t < 6)


/*FOREACH*/
var a = [10,20,30,40,50,60];

a.forEach(valor => console.log(valor));

var tot = 0;
a.forEach(valor => {
  tot += valor;
});
console.log(tot);

a.forEach(function(valor, indice, array){
  console.log(array[indice]);
})