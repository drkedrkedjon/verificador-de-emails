// fetch("https://api.eva.pingutil.com/email?email=support@hexlox.com")
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));

const btnVerificar = document.querySelector('#btn-verificar')
const txtArea = document.querySelector('#txt-area')
btnVerificar.addEventListener('click', verificador)

function verificador() {
  console.log(txtArea.value)
}






