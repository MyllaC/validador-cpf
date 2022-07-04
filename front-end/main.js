const inputCPF = document.querySelector('#cpf')
const submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', e => {
  e.preventDefault()

  validateCpf()
})

function validateCpf() {
  const cpf = inputCPF.value

  const URL = `http://localhost:80/validar-cpf/${cpf}`

  if (cpf.length === 11) {
    fetch(URL)
      .then(res => res.json())
      .then(data => displayCpf(data))
      .catch(err => console.error(err))

    displayCpf(data)
  }
}

function displayCpf(data) {
  const responseBox = document.querySelector('#res-box')
  responseBox.classList.add('show-response')
  
  const cpf = document.querySelector('#input-cpf')
  const status = document.querySelector('#input-status')
  const region = document.querySelector('#input-region')

  cpf.innerHTML = data.cpf
  status.innerHTML = data.status
  region.innerHTML = data.unidadeFederativa

  if (data.status === 'válido') {
    const regionBox = document.querySelector('#region-box')
    regionBox.classList.add('show-region')
  }
}
