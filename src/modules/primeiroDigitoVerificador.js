function primeiroDigitoVerificador(cpf) {
  let sum = 0
  for (let i = 0; i < cpf.length - 2; i++) {
    sum += cpf[i] * (cpf.length - 1 - i)
  }

  let restoDivisao = sum % 11
  let primeiroDigito =
    restoDivisao == 0 || restoDivisao == 1 ? 0 : 11 - restoDivisao

  return primeiroDigito
}

// let primeiroDigito = restoDivisao == 0 || restoDivisao == 1 ? 0 : 11 - restoDivisao

module.exports = primeiroDigitoVerificador
