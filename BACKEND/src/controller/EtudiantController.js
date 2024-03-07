const Etudiant = require('../model/Etudiant');


const create = async (req,res)=>{
     try{
        const create = await Etudiant.create(req.body);
        res.send(create);
     }catch{
        res.send("Le matricule et le contact parent doit etre unique")
     };
};


const index = async (req,res)=>{
    const index = await Etudiant.find().populate('departement');
    res.send(index);
}

const edit = async(req,res)=>{
    const idd = req.params.id
    const editId = await Etudiant.findById(idd);
    res.send(editId)
}


module.exports = {
    create,
    index,
    edit
};