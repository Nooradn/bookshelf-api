const books = require('../books');

const deleteBook = (req, han) => {
  console.log('Masuk ke API deleteBook');
  const {id} = req.params;
  const index = books.findIndex((b) => b.id === id);


  // [Mandatory] Delete Book with Correct Id
  if (index !== -1) {
    books.splice(index, 1);

    const response = han.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });

    response.code(200);
    return response;
  };


  // [Mandatory] Delete Book with Invalid Id
  const response = han.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};


module.exports = deleteBook;
