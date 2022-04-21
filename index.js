const paraffo = document.querySelector('#mensaje')
const btnVerificar = document.querySelector('#btn-verificar')
const txtArea = document.querySelector('#txt-area')
btnVerificar.addEventListener('click', verificador)
let spamMensaje = ''
let deliverableMensaje = ''

async function verificador() {
  try {
    const respuesta = await fetch(`https://api.eva.pingutil.com/email?email=${txtArea.value}`)
      if (!respuesta.ok) {
        paraffo.innerHTML = `Ha ocurido un error en el servidor, inténtalo más tarde`
        throw new Error('Ha ocurido una KAKITA')
      }
    const data = await respuesta.json()

    data.data.spam ? spamMensaje = 'ES SPAM' : spamMensaje = 'NO ES SPAM'
    data.data.deliverable ? deliverableMensaje = 'ES ENTREGABLE' : deliverableMensaje = 'NO ES ENTREGABLE'

    paraffo.innerHTML = `
      <p>Este correo electrónico (${data.data.email_address}) proviene del dominio (${data.data.domain}).</br>
      El correo ${deliverableMensaje}, y ${spamMensaje}</p>    
    `
    txtArea.value = ''
    
  } catch (fallo) {
    console.error(fallo)
  }
}