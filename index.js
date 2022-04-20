fetch("https://api.eva.pingutil.com/email?email=support@hexlox.com")
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));