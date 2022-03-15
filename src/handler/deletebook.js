const books = require('../books')

const deleteBook = (req, han) => {
    console.log('Masuk ke API deleteBook');
    const { id } = req.params;
    const book = books.filter((b) => b.id == id)[0];


    // [Mandatory] Delete Book with Correct Id
    if (book.id == id) {
        console.log('sudah sama');
        
        books.pop()
        
        const response = han.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        });

        response.code(200);
        return response;

    } else {

        const response = han.response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        return response;

    }
};


module.exports = deleteBook;