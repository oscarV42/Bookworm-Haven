const router = require('express').Router();
const { User, Book, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Book.findAll({
      // where: {
      //   id: 5
      // },
      // raw: true,
      // nest:true,
      attributes: [
        'id',
        'title',
        'author',
        'publisher',
        'published_date',
        'genre',
        'img',
        'user_id',
      ],
      include: [
        {
          model: Post,
          attributes: ['postDescription', 'book_id'],
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const books = dbBlogData.map((blog) =>{
      const blogItems = blog.get({ plain: true})
      if(blog.posts.length) {
        const blogPosts = blog.posts.map((post)=>post.get({plain: true})) 
        //console.log("From Blog",blogPosts);
        blogItems.posts = blogPosts;
        //console.log(blogItems)
      }
     //console.log(blogItems.posts)
    return blogItems;
  });
    //const books = dbBlogData.get({ plain: true });
    //console.log("Book List", books);
books.forEach((book)=> {
  console.log(book);
})
    //console.log("from Blog",dbBlogData );
    res.render('blog', {
      books,loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;