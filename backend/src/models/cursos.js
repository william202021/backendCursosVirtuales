const {Schema, model} =require('mongoose');


const cursoShema = new Schema({

    nombre: String,
    subtitulo:String,
    contenido:String
   
});


module.exports=model('cursos', cursoShema);