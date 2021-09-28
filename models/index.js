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