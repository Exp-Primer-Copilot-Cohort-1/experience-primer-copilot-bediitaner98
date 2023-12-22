//Create web server using express
const express = require('express');
const router = express.Router();

//Import the Comment model
const Comment = require('../models/Comment');

// @route GET /comments
// @desc Get all comments
// @access Public
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

// @route GET /comments/:id
// @desc Get specific comment
// @access Public
router.get('/:id', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.json(comment);
    } catch (err) {
        res.json({ message: err });
    }
});

// @route POST /comments
// @desc Create new comment
// @access Public
router.post('/', async (req, res) => {
    const comment = new Comment({