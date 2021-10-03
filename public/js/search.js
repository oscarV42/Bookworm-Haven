async function genreHandler(event, genre) {
    event.preventDefault();

    const api_url = `/search/genre/${genre}`;
    const response = await fetch(api_url);
    const json = await response.json();
    displayResult(json);
}

async function titleHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="search-title"]').value;
    const api_url = `/search/title/${title}`;
    const response = await fetch(api_url);
    const json = await response.json();
    displayResult(json);
}

var imageContainerEl = document.getElementById("imageContainer");

function displayResult(data) {
    imageContainerEl.innerHTML = "";

    for (var i = 0; i < data.items.length; i++) {
        var card = document.createElement('div');
        card.setAttribute("class", "card");
        card.dataset.book = JSON.stringify(data.items[i].volumeInfo);

        var cardName = document.createElement('div');
        cardName.setAttribute("class", "card header");
        cardName.textContent = data.items[i].volumeInfo.title;
        card.appendChild(cardName);

        var img = document.createElement('img');
        img.src = data.items[i].volumeInfo.imageLinks?.thumbnail;
        card.appendChild(img);

        var cardAuthor = document.createElement('div');
        cardAuthor.textContent = `Author: ${data.items[i].volumeInfo.authors[0]}` ;
        card.appendChild(cardAuthor);

        var cardGenre = document.createElement('div');
        cardGenre.textContent = `Genre: ${data.items[i].volumeInfo.categories[0]}` ;
        card.appendChild(cardGenre);

        var cardAddFav = document.createElement('button');
        cardName.setAttribute("class", "card button");
        cardAddFav.textContent = 'Add to Favorites' ;
        cardAddFav.tagName = data.items[i].volumeInfo.title;
        cardAddFav.addEventListener("click", addToFavorite);   
        card.appendChild(cardAddFav);

        imageContainerEl.appendChild(card);
    }
}

const addToFavorite = (e) => {
    // Prevents the click listener for the list from being called when the button inside of it is clicked
    e.stopPropagation();
    const bookDetails = JSON.parse(e.target.parentElement.getAttribute('data-book'));

    const newFavorite = {
        title: bookDetails.title,
        author: bookDetails.authors[0],
        publisher: bookDetails.publisher,
        publishedDate: bookDetails.publishedDate,
        genre: bookDetails.categories[0],
        img: bookDetails.imageLinks?.thumbnail
      };
    
      console.log(newFavorite);
      saveFavorite(newFavorite);
};

const saveFavorite = (newFavorite) =>
  fetch('/book/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newFavorite),
  });

