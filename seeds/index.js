const sequelize = require('../config/connection');
const seedBook = require('./bookData');
const seedComment = require('./commentData');
const seedGenre = require('./genreData');
const seedPost = require('./postData');
const seedUser = require('./userData');
const seedRate = require('./rateData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGenre();

  await seedUser();

  await seedBook();

  await seedRate();

  await seedPost();

  await seedComment();

  process.exit(0);
};

seedAll();
