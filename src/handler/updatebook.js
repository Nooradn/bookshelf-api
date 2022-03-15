const books = require("../books.js");

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
    if (index !== -1) {
        
        console.log('Data yang dikirim sudah lengkap');

        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt,
        };

        const response = han.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        });
        response.code(200);
        return response;
    };

    
    // [Mandatory] Update Book with Invalid Id
    const response = han.response({
        status: 'fail',
        message: "Gagal memperbarui buku. Id tidak ditemukan",
    });
    response.code(404);
    return response;

};

module.exports = updateBook;

