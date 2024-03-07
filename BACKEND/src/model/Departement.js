const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const {Schema} = mongoose;


const DepartementSchema = new Schema({
    nom : {
        type: String,
        unique:true
    }
},{timestamps:true});

const Departement = mongoose.model('Departement',DepartementSchema);
module.exports = Departement;