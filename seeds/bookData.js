const { Book } = require('../models');

const bookData = [
    {
        title: 'The Adventures of Huckleberry Finn',
        author: 'Mark Twain',
        copyright: 'Chatto & Windus / Charles L. Webster And Company.'
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
    {
        
    },
];

const seedBook = () => Genre.bulkCreate(bookData);

module.exports = seedBook;