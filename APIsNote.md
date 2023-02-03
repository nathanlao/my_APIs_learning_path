## Why APIs?
- Use asynchronous JS to help access data from outside the local machine
- Allows us to access real data
- Build more applications and services by using existing functionality and data

## What is an API? 
- **A**pplication **P**rogramming **I**nterface
- An Api is any tool that helps connect your program with someone else's program (Web APIs, 3rd-party package, etc...)

## API examples
1. Getting data from a server (server and database that live outside of my device)
- The server hosts `an API` - exposed `endpoints` we can access fro getting data from the server
- Note that the server does not give us access to everything, just the things they want us to have (security concern)

2. Pre-written code that does cool things
- DOM API (.getElementById)
- Array methods API (.filter, .map, localStorage, etc...)

## Clients vs. Servers
- `Client`: Any device that connects to the internet to get data from somewhere (makes a `request`)
- `server`: Basically just a computer. Actively listening for requests from clients, then `responds` to the client with that request (e.g. an HTML page, img, file or plain data)

## Request-Response Cycle
- `Request`: A device asks for a "resource", it requires a connection to the internet somehow
- `Response`: The reply to the request, could contain the `resource` (HTML, JSON data, etc...), could contain the a response saying the client is not authorized to receive the resource

## HTTP Requests
- **H**ypertext **T**ransfer **P**rotocal
- A `protocol` for determining how hypertext should be transferred over the internet

- Components of a request: 
    1. Path/URL
    2. Methods: GET, POST, PUT, DELETE
    3. Body
    4. Headers

### Path
- `Address` where the resouce lives
- Full URL = `Base URL` + `Endpoint`

### Methods
- Tell the server what kind of request we are making
- `GET`: getting data
- `POST`: adding new data
- `PUT`: updating existing data
- `DELETE`: removing data
