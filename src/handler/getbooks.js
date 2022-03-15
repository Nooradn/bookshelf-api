// const { id, name, publisher } = require("../books");
const books = require('../books');

// [Mandatory] Get All Books
const getBooks = (req = null, han = null) => {
  const {reading} = req.query;
  console.log('Masuk ke API getBooks');

  if (reading == 1) { };

  if (reading == 0) { };

  return {
    status: 'success',
    data: {
      books: books.map(
          ({id, name, publisher}) => ({id, name, publisher}),
      ),
    },
  };
};

module.exports = getBooks;
