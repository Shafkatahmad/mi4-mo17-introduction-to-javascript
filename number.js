var orangePrice = 20;
var chocolate = 0.5;
var applePrice = '26';

console.log(typeof orangePrice);
console.log(typeof applePrice);
console.log(orangePrice + applePrice);

applePrice = parseInt('26');
console.log(applePrice);
console.log(orangePrice + applePrice);

applePrice = parseInt('andarkilla');
console.log(typeof applePrice);
console.log(applePrice);

applePrice = parseInt('22.5');
console.log(applePrice);

applePrice = parseFloat('22.5');
console.log(applePrice);



var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total);
console.log(total.toFixed(3));
console.log(parseFloat(total.toFixed(3)));


var num = 50 / 0;
console.log(num);
num = -50 / 0;
console.log(num);