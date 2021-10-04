 async function postHandler(event) {
    event.preventDefault();
    // capture the values of a form considered to be "add-post"
    const book_id =  window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const postDescription = document.querySelector('textarea[name="content"]').value;
  
    // post stringified data to the post-routes folder of our routes
    const response = await fetch(`/post`, {
      method: 'POST',
      body: JSON.stringify({
        book_id,
        postDescription
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    // once our route is received properly, re-direct user to dashboard
    if (response.ok) {
      alert('Post added successfully');
       document.location.replace('/search');
    } else {
      alert(response.statusText);
    }
  };