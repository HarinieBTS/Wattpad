const mongoose = require('mongoose');
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

exports.createComment = async (req, res) => {
    try {
        const { content, author, post } = req.body;

        if (!mongoose.Types.ObjectId.isValid(author) || !mongoose.Types.ObjectId.isValid(post)) {
            return res.status(400).json({ error: 'Invalid author or post ID' });
        }

        const newComment = new Comment({ content, author, post });
        await newComment.save();

        const postDoc = await Post.findById(post);
        if (postDoc) {
            postDoc.comments.push(newComment._id);
            await postDoc.save();
        }

        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find().populate('author').populate('post');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCommentById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: 'Invalid Comment ID' });
        }

        const comment = await Comment.findById(req.params.id).populate('author').populate('post');
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateComment = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: 'Invalid Comment ID' });
        }
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedComment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: 'Invalid Comment ID' });
        }
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        const postDoc = await Post.findById(deletedComment.post);
        if (postDoc) {
            postDoc.comments.pull(deletedComment._id);
            await postDoc.save();
        }
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
