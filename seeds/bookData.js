const { Book } = require('../models');

const bookData = [
    {
        id: 1,
        title: 'The Adventures of Huckleberry Finn',
        author: 'Mark Twain',
        publisher: 'Chatto & Windus / Charles L. Webster And Company.',
        publishedDate: '1884-12-10',
        genre: 'Histroical Fiction',
        img: 'https://m.media-amazon.com/images/I/612kBOdDfIL.jpg',
        user_id: 1
    },
    {
        id: 2,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publisher: "Charles Scribner's Sons",
        publishedDate: '1925-04-10', 
        genre: 'Historical Fiction',
        img: 'https://m.media-amazon.com/images/P/1982146702.01._SCLZZZZZZZ_SX500_.jpg',
        user_id: 2
        
    },
    {
        id: 3,
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J. K. Rowling',
        publisher: "Bloomsbury (UK)",
        publishedDate: '2000-07-08',
        genre: 'Fantasy',
        img: 'https://m.media-amazon.com/images/P/0439139600.01._SCLZZZZZZZ_SX500_.jpg',
        user_id: 2
    },
    {
        id: 4,
        title: 'Mr. Mercedes',
        author: 'Stephen King',
        publisher: "Simon & Schuster",
        publishedDate: '2014-06-03',
        genre: 'Thriller',
        img: 'https://m.media-amazon.com/images/P/1476754454.01._SCLZZZZZZZ_SX500_.jpg',
        user_id: 3
    },
    {
        id: 5,
        title: 'Finders Keepers',
        author: 'Stephen King',
        publisher: "Simon & Schuster",
        publishedDate: '2015-06-02',
        genre: 'Thriller',
        img: 'https://m.media-amazon.com/images/P/1501100076.01._SCLZZZZZZZ_SX500_.jpg',
        user_id: 4 
    },
    {
        id: 6,
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        publisher: "London: Chapman & Hall",
        publishedDate: '1859',
        genre: 'Historical Fiction',
        img: 'https://m.media-amazon.com/images/P/0451530578.01._SCLZZZZZZZ_SX500_.jpg',
        user_id: 5,
    },
];

const seedBook = () => Book.bulkCreate(bookData);

module.exports = seedBook;