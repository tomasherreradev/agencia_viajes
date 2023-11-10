import {Testimonial} from '../models/Testimoniales.js';


export const guardarTestimoniales = async (req, res) => {
    //validar los inputs
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre es necesario'});
    }

    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo es necesario'});
    }

    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje es necesario'});
    }

    if(errores.length > 0) {
        //evitar errores cargando de nuevo los testimoniales
        const testimoniales = await Testimonial.findAll();

        //enviar los errores a la vista
            res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });

    } else {
        //almacenar un nuevo registro
        try {
            await Testimonial.create({
                nombre, 
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
}