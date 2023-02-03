const boredBtn = document.getElementById("bored-btn")
boredBtn.addEventListener("click", () => {

    fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const title = document.getElementById("title")
            title.textContent = "Let's do it 🌋"

            const type = document.getElementById("activity-type")
            type.innerHTML = `
                <h2>Your suggestion today: ${data.type}</h2>
            `

            const activity = document.getElementById("activity-name")
            activity.textContent = data.activity

            document.body.classList.add("fun")
        })
})
