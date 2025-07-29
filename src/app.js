const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/auth.routes');


const app = express();
connectDB();

// Middleware
app.use(cors());// Permite que otros desarrollos se comuniquen con este servidor

app.use(express.json());    // Uso de JSONs

// Registrar rutas
app.use('/post', postRoutes);   // Rutas para publicaciones = http://localhost:3000/post

app.use('/user', userRoutes);

module.exports = app;