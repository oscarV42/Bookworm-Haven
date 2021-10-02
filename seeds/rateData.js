const { Rate } = require('../models');

const rateData = [
    {
        rate: 4,
        reason: "Very much enjoyed this novel and it's message!",
        user_id: 1,
        book_id: 1
    },
    {
        rate: 4,
        reason: "I had to read this book for class, and I will say I actually enjoyed it a lot. ",
        user_id: 2,
        book_id: 2
    },
    {
        rate: 5,
        reason: 'This book has everything!',
        user_id: 2,
        book_id: 3
    },
    {
        rate: 5,
        reason: "I couldn't get enough of this book. King's writing is superb. It was simple, yet complex.",
        user_id: 3,
        book_id: 4
    },
    {
        rate: 4,
        reason: 'A Tale of Two Cities is a definite favorite of mine. Despite being published in 1859, it still has the ability to draw the readier into the story and engage the mind.',
        user_id: 5,
        book_id: 6
    },
];

const seedRate = () => Rate.bulkCreate(rateData);

module.exports = seedRate;