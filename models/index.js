// import models
const User = require('./tables/User');
const Book = require('./tables/Book');
const Post = require('./tables/Post');
const Genre = require('./tables/Genre');
const Comment = require('./tables/Comment');
const Rate  = require('./tables/Rate');

Book.belongsTo(Genre, {
    foreignKey: 'genre_id'
})

Genre.hasMany(Book, {
    foreignKey: 'genre_id',
    onDelete: 'CASCADE'
})

Book.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Book, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Rate.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Rate, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = {
    User,
    Genre,
    Book, 
    Rate,
    Post, 
    Comment
};