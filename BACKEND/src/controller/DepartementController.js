const Departement = require('../model/Departement');

const create = async (req,res)=>{
    try{
        const create = await Departement.create(req.body);
        res.send(create);
    }catch{
       res.send('Nom duplique');
    }
    
};

const index = async (req,res)=>{
    const index = await Departement.find();
    res.send(index);
}


module.exports = {
    create,
    index
}; 
    