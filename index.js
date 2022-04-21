const paraffo = document.querySelector('#mensaje')
const btnVerificar = document.querySelector('#btn-verificar')
const txtArea = document.querySelector('#txt-area')
btnVerificar.addEventListener('click', verificador)
let spamMensaje = ''
let deliverableMensaje = ''

// function verificador() {
//   fetch(`https://api.eva.pingutil.com/email?email=${txtArea.value}`)
//   .then(res => {
//     if(res.ok) {
//       paraffo.innerHTML = `Ha ocurido un error, intentalo mas tarde`
//       throw new Error('Ha ocurido una KAKITA')
//     } return res.json()
//   })
//   .then(data => {
//     // Cabiar mensaje
//     data.data.spam ? spamMensaje = 'MENSAJE SUPER' : spamMensaje = 'MIERDA MENSAJE'
//     data.data.deliverable ? deliverableMensaje = 'TRUE' : deliverableMensaje = 'FALSE'

//     paraffo.innerHTML = `
//     <p>El correo electronico: ${data.data.email_address}, proviene de dominio: ${data.data.domain}.</br>
//     El correo es entregable: ${data.data.deliverable}, y esta ${spamMensaje} marcado ${deliverableMensaje} como el spam: ${data.data.spam} </p>
//     `
//   })
//   .catch(error => console.error(error));
// }

async function verificador() {
  try {
    const respuesta = await fetch(`https://api.eva.pingutil.com/email?email=${txtArea.value}`)
      if (!respuesta.ok) {
        paraffo.innerHTML = `Ha ocurido un error en el servidor, intentalo mas tarde`
        throw new Error('Ha ocurido una KAKITA')
      }
    const data = await respuesta.json()

    data.data.spam ? spamMensaje = 'ES SPAM' : spamMensaje = 'NO ES SPAM'
    data.data.deliverable ? deliverableMensaje = 'ES ENTREGABLE' : deliverableMensaje = 'NO ES ENTREGABLE'

    paraffo.innerHTML = `
      <p>Este correo electronico (${data.data.email_address}) proviene de dominio (${data.data.domain}).</br>
      El correo ${deliverableMensaje}, y ${spamMensaje}</p>    
    `
  } catch (fallo) {
    console.error(fallo)
  }
}