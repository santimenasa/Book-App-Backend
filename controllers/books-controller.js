const Book = require('../models/book')



const getBookById = async (req,res) => {
    let books;
    try {
        books = await Book.findById(req.params.id)
    } catch (error) {
        console.log(error);
    }
   
    if (!books) {
       return res.status(404).json({message:"Book not found"})
    }
    return res.status(200).json({ books })
}



const getAllBooks = async (req,res) => {
    let books;
try {
    books = await Book.find()
} catch (error) {
    console.log(error);
}

if (!books) {
   return res.status(404).json({message:"Product not found"})
}
return res.status(200).json({ books })
}


const addBook = async (req,res) => {
    const {name, author, description, price, available, image} = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image

        });
        await book.save(); 
    } catch (error) {
        console.log(error);
    }
    if (!book) {
        return res.status(500).json({message:"Unable to add"})
    }
    return res.status(201).json({ book })
}


const updateBook = async (req,res) => {
const id = req.params.id;
const { name, author, description, price, available, image } = req.body;
let book;
try {
    book = await Book.findByIdAndUpdate(id, {
        name,
        author,
        description,
        price,
        available,
        image
    });
    book = await book.save()
} catch (error) {
    console.log(error);
}
if (!book) {
    return res.status(404).json({message:"Unable to update by the pasted ID"})
}
return res.status(200).json({ book })


}

const deleteBook = async (req,res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id)
    } catch (error) {
        console.log(error);
    }
    if (!book) {
        return res.status(404).json({message:"Unable to Delete by the pasted ID"})
    }
    return res.status(200).json({ book })
}

module.exports = { getAllBooks, addBook, getBookById, updateBook, deleteBook  }