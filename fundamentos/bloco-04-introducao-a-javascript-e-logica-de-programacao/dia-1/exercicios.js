/* const a = 10;
const b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b)); */


/* const a = 35;
const b = 10;

if (a > b) {
  console.log("'a' é maior que 'b'");
}else {
  console.log("'b' é maior que 'a'");
} */

/* const a = 20;
const b = 10;
const c = 40;

if (a > b && a > c) {
  console.log("'a' é maior que 'b' e 'c'");
  
} else if (b > a && b > c) {
  console.log("'b' é maior que 'a' e 'c'");

} else {
  console.log('"c" ' +c+ ' é maior que "a" ' + a + ' e "b" ' + b +'.');
}
 */


/* const number = 4;

if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
}; */


/* 
let ladoA = 75;
let ladoB = 80;
let ladoC = 25;

let somaDosAngulos = ladoA + ladoB + ladoC;

if(ladoA > 0 && ladoB > 0 && ladoC > 0){
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro, ângulo 0 ou negativo');
}
 */


/* const chessPiece = 'cavalo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}; */



/* const nota = 83;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
} */



/* const a = 2;
const b = 13;
const c = 25;

let isEven = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  isEven = true;
};
console.log(isEven); */


/* const a = 2;
const b = 10;
const c = 15;

let isOdd = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  isOdd = true;
};
console.log(isOdd); */

/* const custoProduto = 10;
const valorVenda = 20;

if (custoProduto >= 0 && valorVenda >= 0) {
  const custoTotalProduto = custoProduto * 1.2;
  const lucro = (valorVenda - custoTotalProduto);
  const lucroTotal = lucro * 1000;
  console.log("Lucro individual por produto é: "+lucro);
  console.log("Lucro Total de 1000 unidades vendidas é "+lucroTotal);
} else {
  console.log("Error, valor menor que 0");
}; */



let aliquotaINSS;
let aliquotaIR;
const parcelaFies = 307.67;
let aliquotaTrybe

const salarioBruto = 3500.00.toFixed(2);

if (salarioBruto >= 3000.00) {
  aliquotaTrybe = (salarioBruto * 0.17);
} else {
  aliquotaTrybe = 0;
}


if (salarioBruto <= 1212.00) {
  aliquotaINSS = salarioBruto * 0.075;
} else if (salarioBruto <= 2427.35) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 3641.03) {
  aliquotaINSS = salarioBruto * 0.12;
} else if (salarioBruto <= 7.087,22) {
  aliquotaINSS = salarioBruto * 0.14;
} else {
  aliquotaINSS = 828,39;
}


const salarioBase = salarioBruto - aliquotaINSS;


if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
};

console.log("Salário bruto: "+salarioBruto);
console.log("Descontado de INSS: "+aliquotaINSS.toFixed(2));
console.log("Descontado da Trybe: "+aliquotaTrybe.toFixed(2));
console.log("Descontado de IRRF: "+aliquotaIR.toFixed(2));
console.log("Descontado de FIES: "+parcelaFies);
console.log("");
console.log("Salário descontado Trybe: " + (salarioBase - aliquotaIR - aliquotaTrybe).toFixed(2));
console.log("Salário descontado FIES: "+ (salarioBase - aliquotaIR - parcelaFies).toFixed(2));
console.log("Salário descontando FIES e Trybe: " + (salarioBase - parcelaFies - aliquotaIR - aliquotaTrybe).toFixed(2));
console.log("Salário sem descontar Trybe e FIES: " + (salarioBase - aliquotaIR).toFixed(2));
