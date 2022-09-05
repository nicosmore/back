const express = require('express');
const fs = require('fs');
const Contenedor = require('./desafio2.js');

const PORT = process.env.PORT || 8080;

//createServer
const app = express();
const newContenedor = new Contenedor('listado.json');

app.get ('/', (req, res) => {
    res.send('inicio');
    console.log('home')
});

app.get('/productos',  muestroProd = async (req, res) => {
    const allProducts = await newContenedor.getAll();
    res.send(allProducts);
});

app.get('/productorandom', prodRandom = async (req, res) => {
    const allProducts = await newContenedor.getAll();
    const numRandom = Math.floor(Math.random() * allProducts.length);
    const prodRandom = allProducts[numRandom];
    res.send(prodRandom);
});

app.get('*', (req, res) => {
    res.status(404).send('<h3>La pag. que busca no existe</h3>');
});

//listen
const connectedServer = app.listen(PORT, () =>{
    console.log('Servidor activo en puerto' + PORT);
});

connectedServer.on('error',(error)=>console.log(error.message));