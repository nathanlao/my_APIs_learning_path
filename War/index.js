const newDeck = document.getElementById("new-deck")
const newCard = document.getElementById("new-card")
const winnerEl = document.getElementById("winner")

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
            console.log(data)

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

            // Determine the winner and render DOM element accordingly
            const winnerMsg = getWinner(data.cards[0], data.cards[1])
            winnerEl.textContent = winnerMsg
        })
}

function getWinner(cardObj1, cardObj2) {
    const valuesArray = ["2", "3", "4", "5", "6", "7", "8", 
        "9", "10", "JACK", "QUEEN", "KING", "ACE"]
    
    const card1ValueIndex = valuesArray.indexOf(cardObj1.value)
    const card2ValueIndex = valuesArray.indexOf(cardObj2.value)
    // console.log("card 1:", card1ValueIndex)
    // console.log("card 2:", card2ValueIndex)

    if (card1ValueIndex > card2ValueIndex) {
        return "Computer wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        return "You win!"
    } else {
        return "Tie game!"
    }
}
    
newDeck.addEventListener("click", getNewDeck)

newCard.addEventListener("click", getNewCard)