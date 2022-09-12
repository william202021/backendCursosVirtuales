const {Schema, model} =require('mongoose');


const userShema = new Schema({
    name: String,
    email:{ 
        type: String,
        required: true,
        unique: true

    },
    password: { 
        type: String,
        required: true

    }
},{
    timestamps: true
});


module.exports=model('User', userShema);