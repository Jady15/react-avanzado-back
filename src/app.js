const express = require('express');
const postRoutes = require('./routes/post.routes');


const app = express();
app.use(express.json());

// Registrar rutas
app.use('/post', postRoutes);   // Rutas para publicaciones = http://localhost:3000/post

module.exports = app;