const express=require('express');
const router=express.Router();

const Curso=require('../models/cursos');

router.post('/curso-detalle', async(req, res) => {
 
    const{Curso}=req.body; 
    const cursos= await User.findOne({Curso})

    if(!cursos) return res.status(401).send("El correo no existe");

})