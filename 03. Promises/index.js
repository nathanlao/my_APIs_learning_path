// Method chaining
document.getElementById("new-deck").addEventListener("click", () => {
    console.log("Clicked")
})

// Chain the `.filter` and `.map` array methods together
const voters = [
    {name: "Joe", email: "joe@joe.com", voted: true},
    {name: "Jane", email: "jane@jane.com", voted: true},
    {name: "Bo", email: "bo@bo.com", voted: false},
    {name: "Bane", email: "bane@bane.com", voted: false}
]

const voterArray = voters.filter(function(voter) {
    return voter.voted
}).map((voterObj) => {
    return voterObj.email
})

console.log(voterArray)

// .then() chaining (promise chaining)
const promise = fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle")
const promise2 = promise.then(res => res.json())
console.log(promise2)

//
fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle")
    .then(function(res) {
        return "Hello"
    })
    .then(function(res) {
        console.log(res)
        return "World"
    })
    .then(function(sth) {
        console.log(sth)
    })