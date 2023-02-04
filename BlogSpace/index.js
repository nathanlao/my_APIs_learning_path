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

// Listen for submit event
const submitForm = document.getElementById("submit-post")

submitForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const title = document.getElementById("post-title")
    const body = document.getElementById("post-body")

    const postObj = {
        title: title.value,
        body: body.value
    }
    // console.log(postObj)

    // Send data to server
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(postObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
})