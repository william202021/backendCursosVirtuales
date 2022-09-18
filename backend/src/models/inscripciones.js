const {Schema, model} =require('mongoose');


const inscripcionShema = new Schema({

    userId:String,
    cursoId:String
   
},{
    timestamps: true
});


module.exports=model('inscripciones', inscripcionShema);