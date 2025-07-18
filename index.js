const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Dato simulado
const posts = [
    { id: 1, title: "primer post"},
    { id: 2, title: "segundo post"},
    { id: 3, title: "El principito está muy bueno 5 de 5"},
    { id: 4, title: "El finalito está muy malo 0 de 5"}
];

// Endpoint para traer posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// Endpoint para guardar un nuevo post
app.post('/posts', (req, res) => {
    const nuevoPost = req.body;
    console.log('Nuevo post recibido: ', nuevoPost);
    posts.push(nuevoPost);
    res.json({ message: 'Post agregado correctamente', data: nuevoPost});
});

// Endpoint para eliminar el último post publicado
app.delete('/lastPost', (req, res) => {
    const ultimoPost = posts.pop();
    console.log('Información del último post eliminado: ', ultimoPost);
    res.json({ message: 'Post eliminado correctamente', data: ultimoPost});
});

// Endpoint para eliminar todos los post publicados
app.delete('/posts', (req, res) => {
    posts.splice(0, posts.length);
    res.json({ message: 'Changos, has borrado todos los posts.'});
});

app.listen(PORT, () => {
    console.log(`Está vivo!! Nuestro servidor está vivo y corriendo en http://localhost:${PORT}`);
});