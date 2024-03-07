// const EtudiantController = require('../controller/EtudiantController');
const express = require('express');
const Etudiant = require('../model/Etudiant');
const route = express.Router();



route.post('/etudiant/create', async (req,res)=>{
    try{
       const create = await Etudiant.create(req.body);
       res.send(create);
    }catch{
       res.send("Le matricule et le contact parent doit etre unique")
    };
});


route.get('/etudiant/index', async (req,res)=>{
   const index = await Etudiant.find().populate('departement');
   res.send(index);
});

route.get('/etudiant/show/:id', async (req,res)=>{
    try{
      const idd = req.params.id 
      const editId = await Etudiant.findById(idd);
      res.send(editId);
    }catch{
      res.status(400).send("Erreur d'acces");
    }
});

route.patch('/etudiant/edit/:id', async (req,res)=>{
  try{
    const idd = req.params.id 
    const editId = await Etudiant.findByIdAndUpdate(idd,req.body);
    res.send(editId);
  }catch{
    res.status(400).send("Erreur de modification");
  }
  
 });

 route.delete('/etudiant/delete/:id', async (req,res)=>{
    try{
      const idd = req.params.id 
      const editId = await Etudiant.findByIdAndDelete(idd);
      res.send(editId);
    }catch{
      res.status(400).send("Erreur de suppression");
    }
    
   });
 


module.exports = route;