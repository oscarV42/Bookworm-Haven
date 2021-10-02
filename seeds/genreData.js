const { Genre } = require('../models');

const genreData = [
    {
        id: 1,
        username: "Action and Adventure",
    },
    {
        id: 2,
        username: "Classic",
    },
    {
        id: 3,
        username: "Comic",
    },
    {
        id: 4,
        username: "Mystery",
    },
    {
        id: 5,
        username: "Fantasy",
    },
    {
        id: 6,
        username: "Historical Fiction",
    },
    {
        id: 7,
        username: "Horror",
    },
    {
        id: 8,
        username: "Romance",
    },
    {
        id: 9,
        username: "Science Fiction",
    },
    {
        id: 10,
        username: "Thriller",
    },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;