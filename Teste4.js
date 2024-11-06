let faturamentoEstados = [
    {
        "nome": "SP",
        "faturamento": 67836.43
    },
    {
        "nome": "RJ",
        "faturamento": 36678.66
    },
    {
        "nome": "MG",
        "faturamento": 29229.88
    },
    {
        "nome": "ES",
        "faturamento": 27165.48
    },
    {
        "nome": "Outros",
        "faturamento": 19849.53
    },
]

let faturamentoTotal = faturamentoEstados.reduce((acumulado, estado) => acumulado + estado.faturamento, 0);

  const participacaoEstados = faturamentoEstados.map(estado => ({
    nome: estado.nome,
    participacao: ((estado.faturamento / faturamentoTotal) * 100).toFixed(2) + '%'

  }));
  
  console.log(participacaoEstados);
 