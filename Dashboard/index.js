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


// Fetch cryptocurrency data for dogecoin from CoinGecko API
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        // console.log(res.ok)
        // console.log(res.status) 

        // Trigger the catch block
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        console.log(data)

        const cryptoTop = document.getElementById("crypto-top")
        cryptoTop.innerHTML = `
            <img alt="coin image" src="${data.image.small}"/>
            <span>${data.name}</span>
        `

        document.getElementById("crypto").innerHTML += `
            <p>Current price: $${data.market_data.current_price.cad}</p>
            <p>24h high price: $${data.market_data.high_24h.cad}</p>
            <p>24h low price: $${data.market_data.low_24h.cad}</p>
        ` 
    })
    .catch(err => {
        console.error(err)
    })