const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use (express.json());

//String de conexión con la base de datos
const uri = "";

async function connection() {
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conectado a la base de datos metodo: mongoodb - async-await");
    }
    catch(e){
        console.log(e);
    }
};

connection();

///////********************************/////////
///////********************************/////////
///////********************************/////////

//Esquema refugio
const refugioSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    whatsapp: Number,
    url_donar: String,
    direccion: String,
    ciudad: String,
    instagram: String
});

//Modelo refugio
const refugioModel = mongoose.model("refugios", refugioSchema);

//Esquema mascotas
const mascotaSchema = new mongoose.Schema({
    id: Number,
    refugio_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "refugios"
    },
    especie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "expecies"
    },
    nombre: String,
    sexo: String,
    direccion: String,
    status: String,
});

//Modelo mascota
const mascotaModel = mongoose.model("mascotas", mascotaSchema);

//Esquema especies
const especieSchema = new mongoose.Schema({
    id: Number,
    especie: String
});

//Modelo especies
const especieModel = mongoose.model("especies", especieSchema);