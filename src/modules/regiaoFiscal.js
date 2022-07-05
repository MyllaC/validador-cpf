function regiaoFiscal(input) {
  cpf = input.replace(/\.|-/g, '').split('')

  let digitoVerificador = parseInt(cpf[8])
  if (digitoVerificador == 1) {
    return 'DF, GO, MS, MT, TO'
  } else if (digitoVerificador == 2) {
    return 'AC, AM, AP, PA, RO, RR'
  } else if (digitoVerificador == 3) {
    return 'CE, MA, PI'
  } else if (digitoVerificador == 4) {
    return 'AL, PB, PE, RN'
  } else if (digitoVerificador == 5) {
    return 'BA e SE'
  } else if (digitoVerificador == 6) {
    return 'MG'
  } else if (digitoVerificador == 7) {
    return 'ES e RJ'
  } else if (digitoVerificador == 8) {
    return 'SP'
  } else if (digitoVerificador == 9) {
    return 'PR e SC'
  } else if (digitoVerificador == 0) {
    return 'RS'
  }
}

module.exports = regiaoFiscal
