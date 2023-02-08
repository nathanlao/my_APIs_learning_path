const newDeck = document.getElementById("new-deck")
const newCard = document.getElementById("new-card")
const cardEl = document.getElementById("cards")

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

function getNewCard() {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let html = ""
            html += `
                <img src="${data.cards[0].image}" alt="card image">
                <img src="${data.cards[1].image}" alt="card image">
            `
            cardEl.innerHTML = html
        })
}
    
newDeck.addEventListener("click", getNewDeck)

newCard.addEventListener("click", getNewCard)