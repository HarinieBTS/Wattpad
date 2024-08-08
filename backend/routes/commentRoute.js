const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth=require('../middleware/auth')
router.post('/createcomment',auth, commentController.createComment);
router.get('/getcomment', auth,commentController.getAllComments);
router.get('/:id',auth, commentController.getCommentById);
router.put('/:id',auth, commentController.updateComment);
router.delete('/delete/:id',auth, commentController.deleteComment);

module.exports = router;