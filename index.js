import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//conectar a la base de datos
db.authenticate()
    .then(()=> console.log('Conectado a la db'))
    .catch(error => console.log(error));

let port = process.env.PORT || 3000;
const portArg = process.argv[2];
 
if (portArg !== undefined && !Number.isNaN(parseInt(portArg, 10))) {
    port = parseInt(portArg, 10);
}

//habilitar PUG
app.set('view engine', 'pug');
 

//Obtener el año actual
app.use( (req, res, next)=> {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes"
    next();
});


//definir carpeta public
app.use(express.static('public'));

//Body parser
app.use(express.urlencoded({extended: true}));


//definimos las rutas en el index de /routes y las importamos
app.use('/', router);
 
app.listen(port,()=>{
    console.log(`El servidor esta corriendo en ${port}`);
});