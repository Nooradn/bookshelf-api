const books = require('../books')

// [Mandatory] Get Detail Books With Correct Id
// [Mandatory] Get Detail Books With Invalid Id
const getDetailedBook = (req, han) => {
    console.log('Masuk ke API getDetailedBook')
    const { id } = req.params;
    const book = books.filter((b) => b.id == id)[0];

    if (book !== undefined) {
        return {
            status: 'success',
            data: {
                book: books[0]
            }
        };
    }

    const response = han.response({
        status: 'fail',
        message: 'Buku tidak ditemukan'
    });
    response.code(404);
    return response


    // {
    //     return {
    //         status: 'fail',
    //         message: 'Buku tidak ditemukan'
    //     }
    // }
};

module.exports = getDetailedBook;