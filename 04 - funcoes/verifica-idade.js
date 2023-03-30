function verificaIdade(anoNascimento, anoAtual) {
    let idade = anoAtual - anoNascimento;
    if (idade < 18) {
        console.log('Menor de Idade.\nVocê tem ' + idade + " anos.");
    } else {
        console.log('Maior de idade.\nVocê tem ' + idade + " anos.")
    }
}


verificaIdade(2009, 2023);