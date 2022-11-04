const express = require('express')
const app = express()
const port = 3000

// Array for Magic 8 Ball
    const array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

// Port 3000 page
//==============================================================================
app.get('/', (request, response) => {
    response.send("<h1>Welcome to Express Lab 2</h1><br><h2> <ul>Name Request</ul> <ul>Tip Percentage</ul><ul>Magic 8 Ball</ul></h2>")
})
//==============================================================================


// Greeting
//==============================================================================
app.get('/greeting/:name', (request, response) => {
    console.log(request.params)
    response.send(`Hello ${request.params.name}`)
})
//==============================================================================


// Tip Percentage
//==============================================================================
app.get('/tip/:total/:tipPercentage', (request, response) => {
    console.log(request.params)
    response.send(`Your total is $${request.params.total} and you tipped ${request.params.tipPercentage}%`)
})
//==============================================================================

// Magic 8 Ball
//==============================================================================
app.get('/magic/:question', (request, response) => {
    // Code to look through array and grab a whole number w/ Math.floor
    const number = Math.floor(Math.random() * array.length)
    console.log(number) // Has 20 answers to look through
    response.send(`
    Will I be a millionaire?: ${array[number]}
    `)
})
//==============================================================================


// Listen Function
app.listen(port, () => {
    console.log('Express is listening in port: ', port)
})