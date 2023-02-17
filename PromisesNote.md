## Promise in JavaScript
- A Promise in JS is an `object` representing the `eventual completion` or `failure` of an asynchronous opertion. It has `.then()` method to specify what should happen (and will `only run`) when the operation is `resolved/rejected`
- 3 Stages:
    - `Pending`: The promise has not yet completed (e.g. fetch() return a promise object back)
    - `Fullfilled`: The promise was completed as promised (e.g. .then() when the promise has been resolved)
    - `Rejected`: The promise was not completed as promised

## Why and When to use Promise
- Promises are used in JS to `handle asynchronous operations`, which are operations that run in the background and `do not block` the main execution of the program. 
- This is useful when working with `resource-intensive operations`, such as `network request` or `file I/O`. (e.g. `fetch` data from a server)


## Promise Resolved `.then()`
- It takes in a callback function and will `only` run it as soon as the promises is in `fulfilled` state, and immediately returns an `Promise object`
- Allows to chain multiple async operations by using `sequential` .then(), whatever its callback function returns, is what `the next .then()` will receive `as a parameter` to its callback function

## Promise Rejected `.catch()`
- A promise becomes `rejected` if an `error` is thrown inside any of the `.then()` blocks or if a programmer manually calls `Promise.reject()`

        .catch(error => console.error(error))

- Check for error response
    - Anything in 400 or 500 level range for HTTP status, `res.ok` will be **false**