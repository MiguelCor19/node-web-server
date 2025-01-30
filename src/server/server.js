//const express = require('express');
import express  from 'express';

//const path = require('path');
import  path from 'path';

export const StartServer = (options) => {
    const { port, public_path = 'public' } = options
   
    const app = express();
    //Para usar middleware se usa la palabra use(express)
    app.use(express.static(public_path));//contenido estatico que usaremos displonible

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../${public_path}/index.html`);
        res.sendFile(indexPath);
    })
    app.listen(port, () => {
        console.log(`Servidor activo en: http://localhost:${port}`)
    })
}

/* module.exports = {
    StartServer
} */