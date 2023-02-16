fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        document.body.style.backgroundImage = `url(${data.urls.full})`

        const author = document.getElementById("author")
        author.textContent = `By: ${data.user.name}`
    })
