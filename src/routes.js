const addBooks = require('./handler/addbook');
const deleteBook = require('./handler/deletebook');
const getBooks = require('./handler/getbooks');
const getDetailedBook = require('./handler/getdetailedbook');
const updateBook = require('./handler/updatebook');

const routes = [
  {
    // [Mandatory] Add Book With Complete Data
    // [Mandatory] Add Book Without Name
    // [Mandatory] Add Book with Page Read More Than Page Count
    method: 'POST',
    path: '/books',
    handler: addBooks,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    // [Mandatory] Get All Books
    method: 'GET',
    path: '/books',
    handler: getBooks,
  },
  {
    // [Mandatory] Get Detail Books With Correct Id
    // [Mandatory] Get Detail Books With Invalid Id
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailedBook,
  },
  {
    // [Mandatory] Update Book With Complete Data
    // [Mandatory] Update Book Without Name
    // [Mandatory] Update Book With Page Read More Than Page Count
    // [Mandatory] Update Book with Invalid Id
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBook,
  },
  {
    // [Mandatory] Delete Book with Correct Id
    // [Mandatory] Delete Book with Invalid Id
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook,
  },
];

module.exports = routes;
