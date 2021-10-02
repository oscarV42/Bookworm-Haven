const { Genre } = require('../models');

const genreData = [
    {
        id: 1,
        name: "Action and Adventure",
    },
    {
        id: 2,
        name: "Classic",
    },
    {
        id: 3,
        name: "Comic",
    },
    {
        id: 4,
        name: "Mystery",
    },
    {
        id: 5,
        name: "Fantasy",
    },
    {
        id: 6,
        name: "Historical Fiction",
    },
    {
        id: 7,
        name: "Horror",
    },
    {
        id: 8,
        name: "Romance",
    },
    {
        id: 9,
        name: "Science Fiction",
    },
    {
        id: 10,
        name: "Thriller",
    },
    {
        id: 11,
        name: "Fiction",
    },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;