function regiaoFiscal(input) {
  cpf = input.replace(/\.|-/g, '').split('')

  let digitoVerificador = parseInt(cpf[8])
  if (digitoVerificador == 1) {
    return 'O documento foi emitido na Regiaão Fiscal DF, GO, MS, MT, TO'
  } else if (digitoVerificador == 2) {
    return 'O documento foi emitido na Regiaão Fiscal AC, AM, AP, PA, RO, RR'
  } else if (digitoVerificador == 3) {
    return 'O documento foi emitido na Regiaão Fiscal CE, MA, PI'
  } else if (digitoVerificador == 4) {
    return 'O documento foi emitido na Regiaão Fiscal AL, PB, PE, RN'
  } else if (digitoVerificador == 5) {
    return 'O documento foi emitido na Regiaão Fiscal BA e SE'
  } else if (digitoVerificador == 6) {
    return 'O documento foi emitido na Regiaão Fiscal MG'
  } else if (digitoVerificador == 7) {
    return 'O documento foi emitido na Regiaão Fiscal ES e RJ'
  } else if (digitoVerificador == 8) {
    return 'O documento foi emitido na Regiaão Fiscal SP'
  } else if (digitoVerificador == 9) {
    return 'O documento foi emitido na Regiaão Fiscal PR e SC'
  } else if (digitoVerificador == 0) {
    return 'O documento foi emitido na Regiaão Fiscal RS'
  }
}

module.exports = regiaoFiscal
