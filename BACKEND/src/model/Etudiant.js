const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const {Schema} = mongoose;


const EtudiantSchema = new Schema({

    matricule : {
        type: String,
        unique:true
    },

    nom:String,
    prenom:String,
    date_naissance:Date,

    contact_parent:{
        type:String,
    },

    departement:{
      type:mongoose.Types.ObjectId,
      ref:'Departement'
    }

},{timestamps:true});

const Etudiant = mongoose.model('Etudiant',EtudiantSchema);
module.exports = Etudiant;