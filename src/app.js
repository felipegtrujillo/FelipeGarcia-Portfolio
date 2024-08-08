const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.routes"); //<=todas las rutas

const app = express();

// Middleware para procesar formularios
app.use(express.urlencoded({ extended: true }));

/* ------MIDDLEWARES---------------------------------------------------------- */
/* middleware para aceptar jsons */
app.use(express.json());
/* ----------------------CORS----------------------------------------- */
/* ----------------------CORS----------------------------------------- */
app.use(cors({
    origin: '*', // Puedes especificar orígenes permitidos si lo prefieres
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Cabeceras permitidas
  }));
/* -----------------------RUTAS------------- */
/* Para los endpoints */
app.use("", routes); 

module.exports =  app;
