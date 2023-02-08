## Promise in JavaScript
- A Promise in JS is an `object` representing the `eventual completion` or `failure` of an asynchronous opertion. It has `.then()` method to specify what should happen when the operation is resolved/rejected
- 3 Stages:
    - `Pending`: The promise has not yet completed (e.g. fetch() return a promise back)
    - `Fullfilled`: The promise was completed as promised (e.g. .then() when the promise has been resolved)
    - `Rejected`: The promise was not completed as promised