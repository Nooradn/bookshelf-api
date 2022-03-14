const { nanoid } = require("nanoid");
const books = require("../books");


// [Mandatory] Add Book With Complete Data
// [Mandatory] Add Book Without Name
// [Mandatory] Add Book with Page Read More Than Page Count
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
    const insertedAt = new Date().toISOString;
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

    // Logic handling case from detector
    if (isNoName) {
        const response = han.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    };

    if (isPageConflict) {
        const response = han.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        });
        response.code(400);
        return response;
    };

    if (isSuccess) {
        const response = han.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: { 
                bookId: id 
            }
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

console.log(books)
module.exports = addBooks;

