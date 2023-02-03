// Explicitly set the request method to GET (default) by passing in a 2nd param
fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })