const paraffo = document.querySelector('#mensaje')
const btnVerificar = document.querySelector('#btn-verificar')
const txtArea = document.querySelector('#txt-area')
btnVerificar.addEventListener('click', verificador)

function verificador() {
  fetch(`https://api.eva.pingutil.com/email?email=${txtArea.value}`)
  .then(response => response.json())
  .then(data => {
    let spamMensaje = ''
    let deliverableMensaje = ''
    // if (data.data.spam) {
    //   spamMensaje = 'MENSAJE SUPER'
    // } else {
    //   spamMensaje = 'MIERDA MENSAJE'
    // }
    data.data.spam ? spamMensaje = 'MENSAJE SUPER' : spamMensaje = 'MIERDA MENSAJE'
    data.data.deliverable ? deliverableMensaje = 'TRUE' : deliverableMensaje = 'FALSE'

    paraffo.innerHTML = `
    <p>El correo electronico: ${data.data.email_address}, proviene de dominio: ${data.data.domain}.</br>
    El correo es entregable: ${data.data.deliverable}, y esta ${spamMensaje} marcado ${deliverableMensaje} como el spam: ${data.data.spam} </p>
    `
    // .catch(error => console.log('error', error));
    }
  )
}