
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

console.log('-Desafio 1')
const nota1 = 5, nota2 = 3, nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log('Media: ' + media.toFixed(1))
if (media < 5) {
    console.log('Reprovacao!');
} else if (media <= 7) {
    console.log('Recuperacao!');
} else {
    console.log('Passou de semestre!');
}
/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/
console.log('-Desafio 2')
const peso = 80, altura = 1.74;
const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('Abaixo do peso.');
} else if (imc < 25) {
    console.log('Peso normal.');
} else if (imc < 30) {
    console.log('Acima do peso.');
} else if (imc < 40) {
    console.log('Obeso.');
} else {
    console.log('Obesidade Grave.');
}

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
console.log('-Desafio 3')
const preco = 100, metodoDePagamento = 'PIX';
let precoFinal = 0;

if (metodoDePagamento === 'Debito') {
    precoFinal += preco * 0.9;
} else if (metodoDePagamento === 'Dinheiro' || metodoDePagamento === 'PIX') {
    precoFinal += preco * 0.85;
} else if (metodoDePagamento === 'Duas vezes') {
    precoFinal = preco;
} else {
    precoFinal += preco * 1.1;
}
console.log('O preco final do produto: R$ ' + precoFinal.toFixed(2));