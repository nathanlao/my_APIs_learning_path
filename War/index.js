const newDeck = document.getElementById("new-deck")
const newCard = document.getElementById("new-card")

// Saving deck_id from the returned data
let deckId

function getNewDeck() {
    fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            deckId = data.deck_id
        })
}

function getNewCard() {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            // Access the cards element and get its own children HTML collection
            const cardsContainer = document.getElementById("cards")
            const firstCardSlot = cardsContainer.children[0]
            const secondCardSlot = cardsContainer.children[1]
            
            //  Render the first card and second card to their own div tag
            let firstCardhtml = ""
            firstCardhtml += `
                <img src="${data.cards[0].image}" alt="card image" class="card"/>
            `
            firstCardSlot.innerHTML = firstCardhtml

            let secondCardhtml = ""
            secondCardhtml += `
                <img src="${data.cards[1].image}" alt="card image" class="card"/>
            `
            secondCardSlot.innerHTML = secondCardhtml
        })
}
    
newDeck.addEventListener("click", getNewDeck)

newCard.addEventListener("click", getNewCard)