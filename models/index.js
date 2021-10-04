// import models
const User = require('./tables/User');
const Book = require('./tables/Book');
const Post = require('./tables/Post');
const Comment = require('./tables/Comment');

User.hasMany(Book, {
    foreignKey: 'user_id'
})
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
Book.belongsTo(User, {
    foreignKey: 'user_id'
})


Book.hasMany(Post, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

Post.belongsTo(Book, {
    foreignKey: 'book_id'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

Rate.belongsTo(Book, {
    foreignKey: 'book_id'
});

Book.hasMany(Rate, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE'
})

module.exports = {
    User,
    Book, 
    Post, 
    Comment
};
