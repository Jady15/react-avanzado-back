let posts = require('../models/post.model');

// Obtener todos los posts (GET)
exports.getAllPosts = (req, res) => {
    res.json(posts);
}

// Obtiene un post por su ID (GET)
exports.getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) return res.status(404).json({error: 'Post no encontrado'});
    res.json(post);
}

// Crear post
exports.createPost = (req, res) => {
    //TODO: En lugar de utilizar ID con fecha, usar un ID numérico, pero primero se debe buscar que no exista un ID con el mismo valor. Si ya existe uno, mostrar el error de 'Post con id ya existente'

    const id = req.body.id;
    const post = posts.find(p => p.id === id);
    if (post) return res.status(500).json({error:'Post con id ya existente'});

    // Creación de post
    const newPost = {
        id,
        title: req.body.title,
        content: req.body.content
    }
    posts.push(newPost);
    
    return res.status(201).json(newPost);
}

// Actualiza datos de un post por ID
exports.updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({error: 'Post no encontrado'});

    // Modificación de post en el índice encontrado
    posts[index] = {
        ...posts[index],
        title: req.body.title,
        content: req.body.content
    };

    return res.json(posts[index]);
}

exports.deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const inicial = posts.length;
    posts = posts.filter(p => p.id !== id);
    if (posts.length === inicial) return res.status(404).json({error: 'Post no encontrado'});

    // Actualizar el módulo donde está el arreglo de posts
    require('../models/post.model').splice(0, require('../models/post.model').length, ...posts);

    return res.status(204).json({message: 'Post eliminado'});

};