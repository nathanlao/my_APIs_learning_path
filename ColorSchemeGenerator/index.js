const colorPicker = document.getElementById("color-form-picker")
const colorSelector = document.getElementById("color-form-selector")
const colorScheme = document.getElementById("color-scheme")

const getColorSubmit = document.getElementById("color-scheme-form")


function renderColor(data) {
    let html = ""
    data.colors.forEach(color => {
        console.log(color.hex.value)

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
    const url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}`

    fetch(url, {method: "GET"})
        .then(response => response.json())
        .then(data => {
            console.log(data)

            renderColor(data)
        })
})