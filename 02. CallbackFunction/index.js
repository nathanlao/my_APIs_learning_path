const newDeck = document.getElementById("new-deck")

function getNewDeck() {
    fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle")
        .then(res => res.json())
        .then(data => console.log(data))
}

newDeck.addEventListener("click", getNewDeck)

/**
 * 
// SetTimeout
function callBack() {
    console.log("log something...")
}
setTimeout(callBack, 2000)

 */

// array.filter
const people = [
    { name: "Jack", hasPet: true, age: 12 },
    { name: "Jill", hasPet: false, age: 18 },
    { name: "Alice", hasPet: true, age: 22 },
    { name: "Bob", hasPet: false, age: 32 },
]

// Own filter function with a callback function as an argument
function filterArray(array, callback) {
    const resultingArray = []
    for (let i = 0; i < array.length; i++) {
        const resultItem = callback(array[i])
        if (resultItem) {
            resultingArray.push(array[i])
        }
    }
    return resultingArray
}

function hasPet(people) {
    return people.hasPet
}

const peopleHasPets = filterArray(people, hasPet)
console.log(peopleHasPets)

/**
 * 
function hasPet(person) {
    return person.hasPet
}
const peopleHasPet = people.filter(hasPet)
console.log(peopleHasPet)

// 
const getOlderPerson = (person) => {
    return person.age >= 18
}
const olderPerson = people.filter(getOlderPerson)
console.log(olderPerson)
 * 
 */


/**
 * 
Functions are a first-class object in JS

let myNum = 42
let myNum2 = myNum

// Function expression
let myFunction = function() {
    console.log("OK")
}

let myFunction2 = myFunction
myFunction2()
 */