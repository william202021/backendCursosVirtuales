var nodemailer = require('nodemailer');

transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'notificaciones-noreply@crediflores.com.co',
    pass: 'ASDWQREEQWF10*'
  }
});

const sendEmail= async(email, password)=>{
  try{

    
   await transporter.sendMail({
  from: 'notificaciones-noreply@crediflores.com.co', 
  to: email, 
  subject: "Gracias por su inscripción", 
  text: "Queremos darte la bienvenida a nuestra plataforma, a continuación \n relacionamos los datos de tu inscripción:\n\nCorreo: \n\n"+email+"\n\npassword: "+password, // plain text body
  html:"<!DOCTYPE html><html> <head> <base target='_top'> <style> .logo{background-color: #173C8D; } .logo{height: 40px; } .subtitulo{color: blue; font-family: 'Myriad Pro', Myriad, 'Liberation Sans', 'Nimbus Sans L', 'Helvetica Neue', Helvetica, Arial, sans-serif; color:#173C8D; text-align:center; } p{font-size: 20px; font-family: 'Myriad Pro', Myriad, 'Liberation Sans', 'Nimbus Sans L', 'Helvetica Neue', Helvetica, Arial, sans-serif; text-align: justify; color:#173C8D; } *, *::before, *::after {box-sizing: border-box; } html {background-color: #ecf9ff; } body {color: #272727; font-family: 'Quicksand', serif; font-style: normal; font-weight: 400; letter-spacing: 0; padding: 1rem; } h1 {font-size: 24px; font-weight: 400; text-align: center; font-family: 'Myriad Pro', Myriad, 'Liberation Sans', 'Nimbus Sans L', 'Helvetica Neue', Helvetica, Arial, sans-serif; } .box {border: 5px solid darkblue; margin: 10%; padding: 10%; } </style> </head> <div class='box'> <img src='https://cursosvirtuales-1eaca.web.app/assets/imagenes/01LOGO.png' class='logo'/> <h1 class='subtitulo'>Gracias por su suscripción</h1> <div class='main'> <ul class='cards'> <div class='card' > <p>Queremos darte la bienvenida a nuestra plataforma, a continuación relacionamos los datos de tu inscripción:<br><br>Email: "+email+" </p> </div> </ul> </div> </div> </body> </html>"
});

  }catch(error){
      console.log("Algo esta mal",error);
  }

}
sendEmail()

module.exports=sendEmail


