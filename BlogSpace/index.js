// Explicitly set the request method to GET (default) by passing in a 2nd param
fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
    .then(response => response.json())
    .then(data => {
        // Slice the first five posts
        const postsArray = data.slice(0, 5)
        console.log(postsArray)

        const postsEl = document.getElementById("posts-list")

        postsArray.forEach(post => {
            postsEl.innerHTML += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        })
    })