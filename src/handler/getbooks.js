// const { id, name, publisher } = require("../books");
const books = require("../books");


// [Mandatory] Get All Books
const getBooks = () => {
    console.log('Masuk ke API getBooks');

    return {
        status: 'success',
        data: {
            books: books.map(
                ({ id, name, publisher }) => ({ id, name, publisher })
            )
        }
    };
};

module.exports = getBooks
