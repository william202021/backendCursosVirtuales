const express=require('express');
const router=express.Router();
const sendEmail=require('../email/envioEmail');
const Curso=require('../models/cursos');
const Foro=require('../models/foro');
const Inscripcion=require('../models/inscripcion')

//codigo agregado
const bcrypt = require("bcryptjs");

const User=require('../models/User');
//const envio=require('../email/envioEmail');

const jwt=require('jsonwebtoken');

router.get('/', function (req, res) {
    res.send('hello world');
});



router.post('/signup', async(req, res) => {
    var {name, email, password}=req.body;

 

    const palabraSecretaTextoPlano = password
   
    const rondasDeSal = 10;
     password = await bcrypt.hash(palabraSecretaTextoPlano, rondasDeSal);

 
    const newUser=new User({name, email, password});
    await newUser.save();
    await sendEmail(email, password)
  

    const token=jwt.sign({_id: newUser._id}, 'secretKey')
    res.status(200).json({token})

    console.log(newUser)
 
})

router.post('/signin', async(req, res) => {
 
    const{email, password}=req.body; 
    const user= await User.findOne({email})

    console.log(user)

    if(!user) return res.status(401).send("El correo no existe");

const palabraSecretaTextoPlano = password;

const palabraSecretaEncriptada = user.password

const palabraSecretaValida = await bcrypt.compare(palabraSecretaTextoPlano, palabraSecretaEncriptada);


    if(!palabraSecretaValida) return res.status(401).send("Contraseña equivocada");

    const token=jwt.sign({_id: user._id}, 'secretKey');
    var nombre = { name: user.name, email:user.email };
    return res.status(200).json({token, nombre});
})




router.post('/curso-detalle', async(req, res) => {
 
    const{nombre}=req.body; 
    const cursos= await Curso.find({nombre})
    res.send(cursos)
    console.log(cursos)

    if(!cursos) return res.status(401).send("El curso no existe");

    
})


router.get('/foro', async(req, res) => {
    //const{autor}=req.body; 
    const foros= await Foro.find({})
    res.send(foros)
    console.log(foros)

    if(!foros) return res.status(401).send("El foro no existe");
 

})


/*router.get('/cantidad-estudiantes', async(req, res) => {

    const consulta= await Curso.aggregate([
        { "$addFields": { "_id": { "$toString": "$_id" }}},
           { $lookup:
              {
                from: 'inscripcions',
                localField: '_id',
                foreignField: 'curso',
                as: 'orderdetails'
              }
            }, { $addFields: {cantidadUsuarios: {$size: "$orderdetails"}}
       }
           ])
           console.log(consulta)
    res.send(consulta)

})*/

router.post('/cantidad-estudiantes', async(req, res) => {


    var nombre=req.body
    var consulta= await Inscripcion.find({nombre})

    //res.json({documents: consulta});

           console.log(consulta)
    res.send(consulta)

    if(!consulta) return res.status(401).send("No hay usuarios registrados");

})





router.post('/guardarforo', async(req, res) => {
    const {autor, titulo, respuesta, curso, identificador, fecha}=req.body;
    
    
    console.log(autor, titulo, respuesta, curso, fecha);
    
    const newPreguntaForo=new Foro({autor, titulo, respuesta, curso, identificador, fecha});
    await newPreguntaForo.save();

    

    //envio.envioEmail('wforero@crediflores.com.co', '123456')
    console.log(newPreguntaForo)
    res.send('Registro de pregunta en el foro');
 

})


router.post('/guardarinscripcion', verifyToken, async(req, res) => {
    //const {userId, curso}=req.body;
    const user=await User.findById(req.userId)
    const infoCurso=await Inscripcion.find(req.curso)
   console.log(infoCurso)
    if(!user) return res.status(400).send("No existe el usuario")
    //if(user && infoCurso) return res.status(400).send("No se puede inscribir al mismo curso")

  
    const newInscripcion=new Inscripcion({
        userId: user._id,
       curso:req.body.curso,
       nombreCurso:req.body.nombreCurso
    

    });
   
    await newInscripcion.save();

})













router.get('/private-courses', verifyToken,(req, res)=>{
    res.json([{

        _id: 1,
        name:'Task One',
        description: 'LALALALA',
        date: "2019-11-17"


}])

})




module.exports=router;


function verifyToken(req, res, next){

    console.log(req.headers.authorization)
if(!req.headers.authorization){

    return res.status(401).send('No esta autorizado para visualizar esta información')
}

const token=req.headers.authorization.split(" ")[1]

if(token=="null"){

    return res.status(401).send('No esta autorizado para visualizar esta información')

}


const payload=jwt.verify(token, 'secretKey')
req.userId=payload._id;
next();


}