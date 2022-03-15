const books = require("../books");

const updateBook = (req, han) => {
    console.log('Masuk ke API updateBook');

    // Import from payload & params
    const { id } = req.params;
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

    const updatedAt = new Date().toISOString();
    const index = books.findIndex((b) => b.id == id)


    // just for testing
    console.log('KETERANGAN: ' + 'index ke: ' + index);
    console.log('KETERANGAN: ' + 'bookId: ' + id);
    console.log({
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    })


    // [Mandatory] Update Book Without Name
    if (name === undefined) {
        const response = han.response({
            status: 'fail',
            message: "Gagal memperbarui buku. Mohon isi nama buku",
        });
        response.code(400);
        return response;
    };


    // [Mandatory] Update Book With Page Read More Than Page Count
    if (readPage > pageCount) {
        const response = han.response({
            status: 'fail',
            message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
        });
        response.code(400);
        return response;
    }

    // [Mandatory] Update Book With Complete Data

    // [Mandatory] Update Book with Invalid Id
    if (index !== -1) {
        books[index] = {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
        };
        const response = han.response({
            status: 'success',
            message: 'Buku tidak ditemukan',
        });
        response.code(200);
        return response;
    };
};

module.exports = updateBook;

