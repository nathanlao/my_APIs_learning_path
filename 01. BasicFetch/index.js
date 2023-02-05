fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const image = document.getElementById("image-container")
        image.innerHTML = `
            <img src="${data.message}" />
        `
    })


// GET the current weather for your city with the Open Weather API
fetch("https://api.openweathermap.org/data/2.5/weather?lat=49.278325&lon=-122.963704&units=metric")
    .then(res => res.json())
    .then(data => console.log(data))
