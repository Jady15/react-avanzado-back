const { deleteModel } = require('mongoose');
const Post = require('../models/post.model');

// Obtener todos los posts (GET)
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({message: 'Error al obtener todos los posts: ', error: err.message});
    }
}

// Obtiene un post por su ID (GET)
exports.getPostById = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if (post) return res.json(post);
        return res.status(401).json({message: 'Post no encontrado'});
    } catch (err) {
        return res.status(500).json({message: 'Error al obtener el post', error: err.message});
    }

}

// Crear post
exports.createPost = async (req, res) => {
    //TODO: Evitar duplicados de posts
    const post = new Post(req.body);
    await post.save();
    return res.status(201).json(post);

    // const id = req.body.id;
    // const post = posts.find(p => p.id === id);
    // if (post) return res.status(500).json({error:'Post con id ya existente'});

    // // Creación de post
    // const newPost = {
    //     id,
    //     title: req.body.title,
    //     content: req.body.content
    // }
    // posts.push(newPost);
    

}

// Actualiza datos de un post por ID
exports.updatePost = async (req, res) => {
    //TODO: Enviar mensaje de respuesta cuando no se encuentre un post con el ID proporcionado
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(updated);


    // const id = parseInt(req.params.id);
    // const index = posts.findIndex(p => p.id === id);
    // if (index === -1) return res.status(404).json({error: 'Post no encontrado'});

    // // Modificación de post en el índice encontrado
    // posts[index] = {
    //     ...posts[index],
    //     title: req.body.title,
    //     content: req.body.content
    // };

    // return res.json(posts[index]);
}

exports.deletePost = async (req, res) => {
    //TODO: Enviar mensaje de respuesta cuando no se encuentre un post con el ID proporcionado
    await Post.findByIdAndDelete(req.params.id, req.body, {new: true});
    return res.status(204).end();

    // const id = parseInt(req.params.id);
    // const inicial = posts.length;
    // posts = posts.filter(p => p.id !== id);
    // if (posts.length === inicial) return res.status(404).json({error: 'Post no encontrado'});

    // // Actualizar el módulo donde está el arreglo de posts
    // require('../models/post.model').splice(0, require('../models/post.model').length, ...posts);

    // return res.status(204).json({message: 'Post eliminado'});

};