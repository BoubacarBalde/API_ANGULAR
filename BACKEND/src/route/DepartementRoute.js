// const DepartementController = require('../controller/DepartementController');
const express = require('express');
const Departement = require('../model/Departement');
const route = express.Router();

route.post('/departement/create', async (req,res)=>{
    try{
       const create = await Departement.create(req.body);
       res.send(create);
    }catch{
       res.send("Le departement doit etre unique")
    };
});


route.get('/departement/index', async (req,res)=>{
   const index = await Departement.find();
   res.send(index);
});

route.get('/departement/show/:id', async (req,res)=>{
    try{
      const idd = req.params.id 
      const editId = await Departement.findById(idd);
      res.send(editId);
    }catch{
      res.status(400).send("Erreur d'acces");
    }
});

route.patch('/departement/edit/:id', async (req,res)=>{
  try{
    const idd = req.params.id 
    const editId = await Departement.findByIdAndUpdate(idd,req.body);
    res.send(editId);
  }catch{
    res.status(400).send("Erreur de modification");
  }
  
 });

 route.delete('/departement/delete/:id', async (req,res)=>{
    try{
      const idd = req.params.id 
      const editId = await Departement.findByIdAndDelete(idd);
      res.send(editId);
    }catch{
      res.status(400).send("Erreur de suppression");
    }
    
   });


module.exports = route;