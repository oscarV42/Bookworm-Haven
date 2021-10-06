const router = require('express').Router();
// This is for the third party Api fetch call
const fetch = require('node-fetch')

router.get('/', async (req, res) => {
      try {
        res.render('search', {
          loggedIn: req.session.loggedIn,
          username: req.session.username
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

//Search book by title
router.get('/title/:title', async (request, response) => {
  try {
    const title = request.params.title;
    console.log("Book title", title)
    const api_key = process.env.API_KEY;
    const api_url = `https://www.googleapis.com/books/v1/volumes?q=*+intitle:${title}&key=${api_key}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Search book by Genre
router.get('/genre/:genre', async (request, response) => {
  try {
    const genre = request.params.genre;
    console.log("Book genre", genre)
    const api_key = process.env.API_KEY;
    const api_url = `https://www.googleapis.com/books/v1/volumes?q=*+subject:${genre}&key=${api_key}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;