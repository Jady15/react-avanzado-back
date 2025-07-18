const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.getAllPosts);    // ENDPOINT = http://localhost:3000/post/

router.get('/:id', postController.getPostById); // ENDPOINT = http://localgost:3000/post/:id

router.post('/', postController.createPost);

router.put('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router;