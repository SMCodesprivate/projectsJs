const express = require("express");
const routes = require('./routes');
const mongoose = require("mongoose");
const app = express();
const fs = require("fs");

mongoose.connect('mongodb+srv://SMCodes:samuelpvp@omnistack9-kbth1.mongodb.net/ddlacademy?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(express.json());

app.use(routes);

app.listen(2222);
function listagem() {
    var controllers = 0;
    var models = 0;
    var arquivos = 0;
    fs.readdir('./src/controllers', function(err,file) {
        file.map(f => {
            ++arquivos;
            ++controllers;
        });
    });
    fs.readdir('./src/models', function(err,file) {
        file.map(f => {
            ++arquivos;
            ++models;
        });
    });
    fs.readdir('./src', function(err,file) {
        file.map(f => {
            ++arquivos;
        });
    });
    setTimeout(() => {
        console.log(`O sistema foi iniciado com sucesso contendo ${controllers} controllers, ${models} modelos de tabelas e ${arquivos} arquivos e pastas no total.`);
    }, 2000);
}
listagem();