const {Schema, model} =require('mongoose');


const inscripcionShema=new Schema({

    userId:String,
    curso:String,
    nombreCurso:String
},{
    timestamps: true
});


module.exports=model("inscripcions", inscripcionShema)
