//---------------------------------------//

// var frase = 'Meu nome é Luiz Henrique.';
// var idade = 22.03;
// var ativo = false;
// var contem = null;
// var definido;

// console.log();

//---------------------------------------//

// Operadores Aritméticos

// console.log (4 + 4 );  // Adição
// console.log (4 - 4);   // Subtração
// console.log (4 * 4);   // Mutiplicação
// console.log (4 / 4);   // Divisão
// console.log (4 % 4);   // Módulo
// console.log (4 ** 4);  // Potenciação

// console.log();

//---------------------------------------//

// Operadores de Comparação

// console.log(10 > 5); // maior que
// console.log(10 < 5); // menor que
// console.log(10 >= 5); // maior ou iqual a que
// console.log(10 <= 5); // menor ou iqual a que
// console.log(10 == '10'); // iqualdade
// console.log(10 === '10'); // estrita igualdade

// console.log();

//---------------------------------------//

// Operadores de Atribuição

// var numero = 10; // atribuição
// numero += 5; // atribuição com adição de valor
// numero -= 5; // atibuição com subtração de valor
// numero *= 5; // atibuição com multiplicação de valor
// numero -= 5; // atibuição com divisão de valor

// console.log(numero);

//---------------------------------------//

// var idade = 18;
// // console.log(idade >= 18);

// if(idade = 18){
//     console.log('Você e maior de idade.');
// }

//---------------------------------------//

// if(true){
//     console.log('hello')
// }

//---------------------------------------//

// Estrutura Fucional

// var idade = Number(prompt('Digite sua idade'));


// if(idade >= 18){
//     alert("pô! Pode entrar na festa.")
// } else {
//     alert("Pô! Vai tirar a cantinga de mijo.")
// }

// //---------------------------------------//

// // Atividade 1 //

// // Pede dois números ao usuário (n1 = Numero1) e (n2 = Numero2)
// let n1 = Number(prompt("Digite o primeiro número:"));
// let n2 = Number(prompt("Digite o segundo número:"));

// // Verifica qual é o maior (Adicional : verifica se os dois numeros são iqual)
// // (Explicação = if vai adicionar os dois numeros que foi digitado e vai analisa ser o numero (n1) e maior que o numero (n2) e depois fazer o mesmo processo ao contrario e por final se o (n1) e (n2) for iqual vai dar a ultima alternativa os dois numero sendo iqual.)

// if (n1 > n2) {
//     alert("O maior número é: " + n1);
// } else if (n2 > n1) {
//     alert("O maior número é: " + n2);
// } else {
//     alert("( Os dois números são iguais )" );
// }

// //---------------------------------------//

// // Atividade 2

// // Praticamente a mesma coisa do progama de cima mais aqui ele verificarar se e positivo ou negativo  mais tambem ser for zero ele falara que e ("O número é zero.").
// let n = Number(prompt("Digite um número:"));

// if (n > 0) {
//   alert("O número ((" + n +  ")) é positivo.");
// } else if (n < 0) {
//   alert("O número ((" + n +  ")) é negativo.");
// } else {
//   alert("O número ((" + n + ")) é zero.");
// }

// //---------------------------------------//

// Atividade 3
 
// Explicação : Ser a letra (F) ser for digitada vai dar feminino, Ser a letra (M) ser for digitado vai dar masculino o (toUpperCase) vai obriga esta em maiusculo se não vai ter uma alerta de  "alert("A letra deve ser maiúscula e única.");" com isso não respodendo a perqunta.
// Programa para verificar gênero a partir de uma letra

// let letra = prompt("Digite uma letra (F ou M):");

// // Transforma a entrada em maiúscula
// if (letra && letra.length === 1) {
//     let letraMaiuscula = letra.toUpperCase();

//     if (letraMaiuscula === "F") {
//         alert("Feminino");
//     } else if (letraMaiuscula === "M") {
//         alert("Masculino");
//     } else {
//         alert("Letra inválida. Digite so as letras ([ M ] || [ m ] ou [ F ] || [ f ]) !!! ");
//     }
// } else {
//     alert("Digite apenas uma letra.");
// }


// //---------------------------------------//