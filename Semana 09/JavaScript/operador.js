var n = 3;
//n = n * 10;
n *= 10;
console.log(n);

var x = 10;
x--;

a = 50;
b = 20;
c = 60;

console.log(x);

console.log(n < x);

console.log(n <= x && b != c);
console.log(n <= x || b != c);
console.log(!(n <= x || b != c));

// verificar se a é maior que b e b é divisivel por 2
console.log(a > b && b % 2 == 0);


//verificar se b é maior igual a ou b dividido por 2 o resultado é 2
console.log(b >= a || b / 2 == 2);

//verificar se a é maior que b e b maior igual a 5
console.log(a > b && b >= 5);

//verificar se b é par ou ímpar usando ternário
console.log(b % 2 == 0 ? "par":"ímpar");