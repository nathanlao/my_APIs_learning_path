const newDeck = document.getElementById("new-deck")

// Saving deck_id from the returned data
let deckId

function getNewDeck() {
    fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}
    
newDeck.addEventListener("click", getNewDeck)