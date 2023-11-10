import express from "express";
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    detalleViaje,
    paginaTestimoniales

} from "../controllers/paginasController.js";


import { 
    guardarTestimoniales 
} from "../controllers/testimonialController.js";



const router = express.Router();


router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', detalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);
//se necesita instalar un body parser en el index para leer los datos de post


export default router;