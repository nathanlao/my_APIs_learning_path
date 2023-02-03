fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const image = document.getElementById("image-container")
        image.innerHTML = `
            <img src="${data.message}" />
        `
    })

