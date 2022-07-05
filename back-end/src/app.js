const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const primeiroDigitoVerificador = require('./modules/primeiroDigitoVerificador')
const segundoDigitoVerificador = require('./modules/segundoDigitoVerificador')
const regiaoFiscal = require('./modules/regiaoFiscal')

app.listen(port, () => {
  console.info('Aplicação rodando em http://localhost:3000')
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
  res.setHeader('Access-Control-Allow-Origin', '*')
  const cpf = req.params.cpf

  if (verifyCpf(cpf)) {
    res.json({
      cpf: cpf,
      unidadeFederativa: regiaoFiscal(cpf),
      status: 'válido'
    })
  } else {
    res.json({ cpf: cpf, status: 'inválido' })
  }
})
