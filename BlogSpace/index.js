let postsArray = []
const title = document.getElementById("post-title")
const body = document.getElementById("post-body")
const submitForm = document.getElementById("submit-post")

function renderPosts() {
    const postsEl = document.getElementById("posts-list")

    let html = ""
    postsArray.forEach(post => {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    })
    postsEl.innerHTML = html
}

// Explicitly set the request method to GET (default) by passing in a 2nd param
fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
    .then(response => response.json())
    .then(data => {
        // Slice the first five posts
        postsArray = data.slice(0, 5)
        // console.log(postsArray)

        renderPosts()
    })

// Listen for submit event
submitForm.addEventListener("submit", (event) => {
    event.preventDefault()

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
        .then(data => {
            // console.log(data)

            // Update the DOM with the new blog entry
            postsArray.unshift(data)
            renderPosts()

            // Clear out the form
            submitForm.reset()
        })
})