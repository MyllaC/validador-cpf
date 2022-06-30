function segundoDigitoVerificador(cpf) {
  let sum = 0
  for (let i = 1; i < cpf.length - 1; i++) {
    sum += cpf[i] * (cpf.length - i)
  }

  let restoDivisao = sum % 11
  let segundoDigito =
    restoDivisao == 0 || restoDivisao == 1 ? 0 : 11 - restoDivisao

  return segundoDigito
}

module.exports = segundoDigitoVerificador
