const bcrypt = require("bcryptjs");

const palabrasecreta="S4n74f3"

const rondas=10;

bcrypt.hash(palabrasecreta, rondas,(err, palabraEncriptada)=> {
    if(err){
        console.log("Error", err);
    }else{
        console.log("y hasheada es:" + palabraEncriptada)
    }
})



