const { Comment } = require('../models');

const commentData = [
    {
        commentDescription: "There are many themes portrayed in this novel, some of which include sacrifice, social classes, and the ever-present possibility of resurrection",
        user_id: 2,
        post_id: 1
    },
    {
        commentDescription: "I see your point but to be frank the Mercedes killer doesn't seem to be a person to contain the hatred and coldness inside for long. So the careless following crimes of Brady Hartsfield fit the character of a serial killer.",
        user_id: 4,
        post_id: 2
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;