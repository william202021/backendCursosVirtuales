const {Schema, model} =require('mongoose');


const foroShema = new Schema({
    autor: String,
    titulo:String,
    respuesta:String,
    curso:String,
    identificador:String,
    fecha:String

});



module.exports=model('Foro', foroShema);