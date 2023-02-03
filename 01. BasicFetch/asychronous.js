/**
 *  1. Asychronous JS: happening out of order/time,  
 */
console.log("the first log")

fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    // 2. non-blocking code: it allows other code to run before the response 
    //    from a request came back from the server
    .then((data) => console.log(data))

console.log("the second log")