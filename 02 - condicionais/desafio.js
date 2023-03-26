/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoEtanol = 5.79, precoGasolina = 6.66, tipoCombustivel = 'gasolina', gastoPorKm = 10, distanciaKm = 1580;

if (tipoCombustivel === 'etanol') {
    console.log('O gasto medio de combustivel foi: ' + ((distanciaKm / gastoPorKm) * precoEtanol).toFixed(2));
} else {
    console.log('O gasto medio de combustivel foi: ' + ((distanciaKm / gastoPorKm) * precoGasolina).toFixed(2));
}
