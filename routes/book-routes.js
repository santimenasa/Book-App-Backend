const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const booksController = require('../controllers/books-controller')

// route to provide the books
router.get('/', booksController.getAllBooks)
router.post('/', booksController.addBook)
router.get('/:id', booksController.getBookById)
router.put('/:id', booksController.updateBook)
router.delete('/:id', booksController.deleteBook)

module.exports = router