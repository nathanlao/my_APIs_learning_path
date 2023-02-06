const colorPicker = document.getElementById("color-form-picker")
const colorSelector = document.getElementById("color-form-selector")
const colorScheme = document.getElementById("color-scheme")

const getColorSubmit = document.getElementById("color-scheme-form")

// Set a default value for color picker
colorPicker.value = "#cdb4db"

function getColorsFromAPI(hex, mode) {
    const url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}`

    fetch(url, {method: "GET"})
        .then(response => response.json())
        .then(data => {
            renderColor(data.colors)
        })
}


// Functon to render colors array
function renderColor(colorsArray) {
    let html = ""
    colorsArray.forEach(color => {
        html += `
            <div>
                <div class="color" 
                    style="background-color: ${color.hex.value}">
                </div>
                <p class="hex">${color.hex.value}</p>
            </div>
        `
    })
    colorScheme.innerHTML = html
}

getColorSubmit.addEventListener("submit", (e) => {
    e.preventDefault()

    const hex = colorPicker.value.slice(1)
    const mode = colorSelector.value.toLowerCase()
    getColorsFromAPI(hex, mode)
})

getColorsFromAPI("cdb4db", "monochrome")