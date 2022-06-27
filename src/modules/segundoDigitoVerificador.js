function segundoDigitoVerificador(cpf) {
  let sum = 0
  for (let i = 1; i < cpf.length - 1; i++) {
    sum += cpf[i] * (cpf.length - i)
  }

  let restoDivisao = sum % 11
  if (restoDivisao == 0 || restoDivisao == 1) {
    return (primeitoDV = 0)
  } else {
    return (primeitoDV = 11 - (sum % 11))
  }
}

module.exports = segundoDigitoVerificador
