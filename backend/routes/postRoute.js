const express = require('express');
const router = express.Router();
const {
    createPost,
    getAllPosts,
    getPostById,
    updatePostById,
    deletePostById
} = require('../controllers/postController'); 
const auth=require('../middleware/auth')
router.post('/create',auth,createPost);
router.get('/getpost',auth, getAllPosts);
router.get('/:id',auth, getPostById);
router.put('/:id',auth, updatePostById);
router.delete('/:id',auth, deletePostById);

module.exports = router;
