const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para permitir que Express analice el cuerpo de las solicitudes JSON
app.use(express.json());

// Ruta básica que devuelve un JSON simple
// app.get('/', (req, res) => {
//     res.json({
//         mensaje: 'Bienvenido a mi API sencilla',
//         autor: 'Tu Nombre',
//         fecha: new Date().toISOString(),
//         endpoints: [
//             '/api/datos',
//             '/api/usuarios',
//             '/api/productos'
//         ]
//     });
// });

// Ruta que devuelve datos de ejemplo
app.get('/api/aviableDates', (req, res) => {
    const datos = [{
        fecha: '2025-07-01',
    },{ fecha: '2025-07-02',}];
    res.json(datos);
});
app.post('/api/registrarDate', (req, res) => {
    const datos = {
        response: 'Se registro exitosamente',
    };
    res.json(datos);
});
const libros = [
    { id: 1, nombre: 'Harry Potter y la piedra filosofal',priceCaratulaDura:30, priceCaratulaBlanda:15},
    { id: 1, nombre: 'El señor de los anillos',priceCaratulaDura:30, priceCaratulaBlanda:15},
    { id: 1, nombre: 'Harry Potter y la piedra filosofal',priceCaratulaDura:30, priceCaratulaBlanda:15},

];
app.get('/api/libros',(req, res)=>
{
  return res.json(libros);

});
// Ruta con parámetros
app.get('/api/libro/:name', (req, res) => {


    const usuario = libros.find(u => u.nombre.toLowerCase().indexOf( req.params.name.toLowerCase())!==-1);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ error: 'Libro no encontrado' });
    }
});

// Ruta POST que recibe y devuelve JSON
// app.post('/api/reservar', (req, res) => {
//     const nuevoProducto = {
//         id: Math.floor(Math.random() * 1000),
//         nombre: req.body.nombre,
//         precio: req.body.precio,
//         fechaCreacion: new Date().toISOString()
//     };
//
//     res.status(201).json(nuevoProducto);
// });

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});