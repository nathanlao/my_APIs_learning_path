fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        // console.log(data.urls.full)
        // console.log(data.user.name)
        document.body.style.backgroundImage = `url(${data.urls.full})`

        const author = document.getElementById("author")
        author.textContent = `By: ${data.user.name}`
    })
    .catch(err =>{
        console.log("Oops")
        // This is where we can handle the error thrown from .then()
        // Set a default image and user name
        document.body.style.backgroundImage = 
            `url(https://images.unsplash.com/photo-1490730141103-6cac27aaab94?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzY1ODA4NzU&ixlib=rb-4.0.3&q=80)`
        
        document.getElementById("author").textContent = `By: Mohamed Nohassi`
    })
