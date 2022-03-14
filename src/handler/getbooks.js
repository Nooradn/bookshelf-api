// const { id, name, publisher } = require("../books");
const books = require("../books");


// [Mandatory] Get All Books
const getBooks = () => ({
    status: 'success',
    data: {
        books: books.map( ({id, name, publisher}) => ({id, name, publisher}))
    }
});

module.exports = getBooks

// console.log(booksGet);