
const precoEtiqueta = 100, metodoDePagamento = 'akgadjslgdjsf';
let precoFinal = 0;

function aplicaDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}
function aplicarJuros(valor, juros){
    return valor +(valor *(juros/100));
}

(function () {
    if (metodoDePagamento === 'Debito') {
        precoFinal = aplicaDesconto(precoEtiqueta, 10);
    } else if (metodoDePagamento === 'Dinheiro' || metodoDePagamento === 'PIX') {
        precoFinal = aplicaDesconto(precoEtiqueta, 15);
    } else if (metodoDePagamento === 'Duas vezes') {
        precoFinal = precoEtiqueta;
    } else {
        precoFinal = aplicarJuros(precoEtiqueta, 10);
    }
    console.log('O preco final do produto: R$ ' + precoFinal.toFixed(2));
})();