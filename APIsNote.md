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

- `Components` of a request: 
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

### Body
- The data we want to send to server
- Only makes sense with `POST` and `PUT` requests
- Needs to be turnede into `JSON` first

### Headers
- Extra/meta information about the outgoing request
- Auth, body info, client info, etc...

## REST
- **RE**presentational **S**tate **T**ransfer
- REST is a `design pattern` to provide a standard way for clients and servers to communicate

### Principles of REST
1. Client & Server separation
    - Client request `JSON data` from the server and the server would respond with `JSON data`, in this setup, the server **doesn't care** how that JSON data gets used in client side (NOT using `server rendering`)

2. Statelessness
    - When a client makes a request to a server, the server doesn't maintain any memory of the request (forget the interaction after the response is sent)

3. Accessing "Resources"
    - The entire interaction between client and server using `standardized URL endpoints`: easier for a developer to understand an API and what should be coming back from that API
        - Using `nouns` for endpoints (e.g. baseURL + /phones, baseURL + /phones/:id)
        - `verbs` for request methods
    - Nested resources: (e.g. /phones/123/reviews - return an array of reviews of that specific phone)

### Query Strings/Parameters
- A way to filter results (produce an object)
- e.g. /phones?type=lastest
- e.g. /phones?type=lastest&brand=apple

