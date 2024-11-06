let valor = 21;

let sequenciaFibonacci = [0, 1];

let isValorEmSequencia = false;

for (let i = 2; sequenciaFibonacci[i - 1] <= valor; i++) { // Gerando os próximos 8 números
    let proximoValor = sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2];
    sequenciaFibonacci.push(proximoValor);

    if (sequenciaFibonacci[i] == valor) {
        isValorEmSequencia = true;
    }
}

let resposta = isValorEmSequencia ? 'O valor está na sequência de Fibonacci' :
    'O valor não está na sequência de Fibonacci';

console.log(resposta)
