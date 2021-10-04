const sequelize = require('../config/connection');
const seedBook = require('./bookData');
const seedComment = require('./commentData');
const seedPost = require('./postData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBook();

  await seedPost();

  await seedComment();

  process.exit(0);
};

seedAll();
