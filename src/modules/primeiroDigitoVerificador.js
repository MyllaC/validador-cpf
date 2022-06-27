function primeiroDigitoVerificador(cpf) {
  let sum = 0
  for (let i = 0; i < cpf.length - 2; i++) {
    sum += cpf[i] * (cpf.length - 1 - i)
  }

  let restoDivisao = sum % 11
  if (restoDivisao == 0 || restoDivisao == 1) {
    return (primeitoDV = 0)
  } else {
    return (primeitoDV = 11 - (sum % 11))
  }
}

module.exports = primeiroDigitoVerificador
