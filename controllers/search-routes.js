const router = require('express').Router();
// This is for the third party Api fetch call
const fetch = require('node-fetch')

router.get('/', async (req, res) => {
      try {
        res.render('search', {
          loggedIn: req.session.loggedIn,
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
    //const api_key = process.env.API_KEY;
    const api_url = `https://www.googleapis.com/books/v1/volumes?q=*+intitle:${title}&key=AIzaSyA7CGbTzigYmYn5KD6mT_WGZwuHFSHE2p4`;
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
    //const api_key = process.env.API_KEY;
    const api_url = `https://www.googleapis.com/books/v1/volumes?q=*+subject:${genre}&key=AIzaSyA7CGbTzigYmYn5KD6mT_WGZwuHFSHE2p4`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;