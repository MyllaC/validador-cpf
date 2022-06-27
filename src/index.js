const express = require('express')
const app = express()
const port = 80

const primeiroDigitoVerificador = require('./modules/primeiroDigitoVerificador')
const segundoDigitoVerificador = require('./modules/segundoDigitoVerificador')
const regiaoFiscal = require('./modules/regiaoFiscal')

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`)
})

function verifyCpf(input) {
  cpf = input.replace(/\.|-/g, '').split('')
  let primeiroDigito = parseInt(cpf[9])
  let segundoDigito = parseInt(cpf[10])

  if (
    primeiroDigitoVerificador(cpf) !== primeiroDigito ||
    segundoDigitoVerificador(cpf) !== segundoDigito
  ) {
    return false
  } else {
    return true
  }
}

app.get('/validar-cpf/:cpf', (req, res) => {
  const cpf = req.params.cpf

  if (verifyCpf(cpf)) {
    res.send(`CPF válido! ${regiaoFiscal(cpf)}`)
  } else {
    res.send('CPF invalido!')
  }
})
