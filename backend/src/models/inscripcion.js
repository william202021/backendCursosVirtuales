const {Schema, model} =require('mongoose');


const inscripcionShema=new Schema({

    userId:String,
    curso:String
},{
    timestamps: true
});


module.exports=model("inscripcion", inscripcionShema)
