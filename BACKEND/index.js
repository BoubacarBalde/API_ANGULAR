require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/service/mongoose');
const DepartementRoute = require('./src/route/DepartementRoute');
const EtudiantRoute = require('./src/route/EtudiantRoute');

const port = process.env.PORT || 3000;
const app = express();


//Autorisation
app.use(cors({origin:"*"}))

//base de donnee
connectDB().then((reponse)=>console.log('Connexion effectuer avec succes'));

//bodyPaser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Route
app.use(DepartementRoute);
app.use(EtudiantRoute);


//Erreur route
app.use((req,res)=>{
    res.status(404).send('Chemin inaxecible');
});

app.listen(port,()=>{
  console.log(`Server lancer sur http://localhost:${port}`);
})