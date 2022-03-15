const books = require('../books')


// [Mandatory] Delete Book with Correct Id
// [Mandatory] Delete Book with Invalid Id
const deleteBook = (req, han) => {
    console.log('Masuk ke API deleteBook');
    const { id } = req.params;
    const book = books.filter((b) => b.id == id)[0];

    if (book.id == id) {
        console.log('sudah sama');

    }

    console.log(book);

    const response = han.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan'
    })


    return null

};


module.exports = deleteBook;