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
});

  }catch(error){
      console.log("Algo esta mal",error);
  }

}
sendEmail()

module.exports=sendEmail


