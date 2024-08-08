// controllers/authorController.js
const Author = require('../models/authorModel');

// Get all authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single author by ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new author
exports.createAuthor = async (req, res) => {
  const author = new Author({
    name: req.body.name,
    bio: req.body.bio,
    avatar: req.body.avatar,
  });

  try {
    const newAuthor = await author.save();
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an author
exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });

    if (req.body.name != null) {
      author.name = req.body.name;
    }
    if (req.body.bio != null) {
      author.bio = req.body.bio;
    }
    if (req.body.avatar != null) {
      author.avatar = req.body.avatar;
    }

    const updatedAuthor = await author.save();
    res.json(updatedAuthor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an author
exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });

    await author.remove();
    res.json({ message: 'Author deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
