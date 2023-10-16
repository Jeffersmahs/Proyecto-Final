/* Inicializa y configura el servidor de express */

/* Importar modulos en Node */
const express = require("express");
//politicas CORS de cross origin (permite comunicación desde la misma IP)
const cors = require("cors");

const morgan = require("morgan");

const cookieParser = require('cookie-parser')

/* Inicialización */
const app = express();


const { DIRECTION_VITE } = process.env;

// Middlewares
app.use(cors({
    origin: `${DIRECTION_VITE}`,
    credentials: true
  }))
app.use(express.json());
app.use(morgan('dev'))
app.use(cookieParser())

/* Configuración inicial */
app.set("port", process.env.PORT || 3002);

/* Middleware */
app.use(express.urlencoded({ extended: true }));
//Permite el uso de request en formato json



/* Rutas */
app.use(require("./routes/user.routes"));
app.use(require("./routes/notes.routes"));


module.exports = app;
