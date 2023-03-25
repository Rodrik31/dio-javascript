/*  Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoCombustivel = 5.79, KmPorLitro = 12, distanciaKm = 1580;

console.log('O gasto medio de conbustivel foi: ' + ((distanciaKm/KmPorLitro)*precoCombustivel).toFixed(2));