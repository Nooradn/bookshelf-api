const {nanoid} = require('nanoid');
const books = require('../books');


const addBooks = (req, han) => {
  console.log('Masuk ke API addBook');

  // Import from API body
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.payload;

  // Generate value
  const id = nanoid(16);
  const finished = false;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  // Pack the values
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  // Add/send the packed value to books
  books.push(newBook);

  // Detector
  const isNoName = name === undefined;
  const isPageConflict = readPage >= pageCount;
  const isSuccess = books.filter((book) => book.id === id).length > 0;


  // [Mandatory] Add Book Without Name
  if (isNoName) {
    const response = han.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    books.pop();
    response.code(400);
    return response;
  };


  // [Mandatory] Add Book with Page Read More Than Page Count
  if (isPageConflict) {
    const response = han.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    books.pop();
    response.code(400);
    return response;
  };


  // [Mandatory] Add Book With Complete Data
  if (isSuccess) {
    const response = han.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  };


  // Another case from logic (generic error)
  const response = han.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });
  response.code(400);
  return response;
};

module.exports = addBooks;

