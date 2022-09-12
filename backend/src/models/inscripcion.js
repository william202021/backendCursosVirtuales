const {Schema, model} =require('mongoose');


const inscripcionShema=new Schema({

    userId:String,
    curso:{ 
        type: String,
        required: true,
        unique: true

    }
},{
    timestamps: true
});


module.exports=model("inscripcionUser", inscripcionShema)
