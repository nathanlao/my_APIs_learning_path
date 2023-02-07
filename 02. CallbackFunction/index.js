const newDeck = document.getElementById("new-deck")

newDeck.addEventListener("click", () => {
    fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle")
        .then(res => res.json())
        .then(data => console.log(data))
}) 