//Nosso jogo
let gameTurma23 = [9, 57, 23, 8, 28, 33];
// console.log('Bolão da turma 23:', gameTurma23);

//Números sorteados
let number1 = Math.floor(Math.random() * 60) + 1;
let number2 = Math.floor(Math.random() * 60) + 1;
let number3 = Math.floor(Math.random() * 60) + 1;
let number4 = Math.floor(Math.random() * 60) + 1;
let number5 = Math.floor(Math.random() * 60) + 1;
let number6 = Math.floor(Math.random() * 60) + 1;

let megaSenaNumbers = [number1, number2, number3, number4, number5, number6];
// console.log('Sorteio de hoje:', megaSenaNumbers);

let numeroDeAcertos = 0;

for(let index = 0; index < gameTurma23.length; index += 1) {
    let numeroApostado = gameTurma23[index];
    // console.log('Numero apostado:', gameTurma23[index]);
    
    for(let gameIndex = 0; gameIndex < megaSenaNumbers.length; gameIndex += 1){
        let numeroSorteado = megaSenaNumbers[gameIndex];
        // console.log('Mega Sena:', megaSenaNumbers[gameIndex]);
        // console.log(numeroApostado, numeroSorteado);
        if(numeroApostado === numeroSorteado){
            numeroDeAcertos += 1
        };
    };
};
console.log('Nossos números da sorte:', gameTurma23);
console.log('Números sorteados:', megaSenaNumbers);
console.log('Numero de acertos:',numeroDeAcertos);