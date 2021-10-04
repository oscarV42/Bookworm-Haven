 async function commentHandler(event) {
    event.preventDefault();
    // capture the values of a form considered to be "add-post"
    const post_id =  window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const commentDescription = document.querySelector('textarea[name="content"]').value;
  
    // post stringified data to the post-routes folder of our routes
    const response = await fetch(`/comment`, {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        commentDescription
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    // once our route is received properly, re-direct user to dashboard
    if (response.ok) {
      alert('Comment added successfully');
       document.location.replace('/search');
    } else {
      alert(response.statusText);
    }
  };