const colorPicker = document.getElementById("color-form-picker")
const colorSelector = document.getElementById("color-form-selector")
const colorScheme = document.getElementById("color-scheme")

const getColorSubmit = document.getElementById("color-scheme-form")

const copyText = document.getElementById("copy-text")

// Set a default value for color picker
colorPicker.value = "#cdb4db"

colorScheme.addEventListener("mouseover", () => {
    copyText.textContent = "Click text to copy"
    copyText.style.display = "block"
    copyText.style.opacity = 1
})

colorScheme.addEventListener("mouseout", () => {
    copyText.style.display = "none"
})

function copyColor(hexColor) {
    const tempInput = document.createElement("input")
    tempInput.value = hexColor
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand("copy")
    document.body.removeChild(tempInput)
}

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
                <p class="hex" onclick="copyColor('${color.hex.value}')">${color.hex.value}</p>
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