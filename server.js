const { json } = require('express')
const express = require('express')
const app = express()
const port = 3000


// Array for Magic 8 Ball
    const array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


// Port 3000 page
// http://localhost:3000/
//==============================================================================
app.get('/', (request, response) => {
    response.send("<h1>Welcome to Express Lab 2</h1><br><h2> <ul>Name Request</ul> <ul>Tip Percentage</ul><ul>Magic 8 Ball</ul><ul>99 Bottles on of Kombucha on the wall</ul></h2>")
})
//==============================================================================


// Greeting
// http://localhost:3000/greeting/Ricky
//==============================================================================
app.get('/greeting/:name', (request, response) => {
    console.log(request.params)
    response.send(`Hello ${request.params.name} how are you doing?`)
})
//==============================================================================


// Tip Percentage
// http://localhost:3000/tip/100/20
//==============================================================================
app.get('/tip/:total/:tipPercentage', (request, response) => {
    console.log(request.params)
    response.send(`${request.params.total * (request.params.tipPercentage * .01)}`)
    // response.send(`Your total is $${request.params.total} and you tipped ${request.params.tipPercentage}%`)
})
//==============================================================================


// Magic 8 Ball
// http://localhost:3000/magic/will%20i%20be%20a%20millionaire
//==============================================================================
app.get('/magic/Will%20I%20Be%20A%20Millionaire', (request, response) => {
    // Code to look through array and grab a whole number w/ Math.floor
    const number = Math.floor(Math.random() * array.length)
    console.log(number) // Has 20 answers to look through
    response.send(`
    Will I be a millionaire?: ${array[number]}
    `)
})
//==============================================================================


// Take one Down and Pass it Around
// http://localhost:3000/kombucha
//==============================================================================
app.get('/kombucha', (request, response) => {
    let num = request.params.num
    response.send(`99 bottles of kombucha on the wall
    <br>
    <a href="http://localhost:3000/kombucha/98">Take 1 down and pass it around</a>
    `)
  })  
  
  app.get('/kombucha/:num', (request, response) => {
    let num = request.params.num
    response.send(
      `${num} bottles of kombucha on the wall! 
        <br>
        <a href="http://localhost:${port}/kombucha/${num-1}">
        Take 1 Down and pass it around!
        </a>
        `
    )
  })
  //============================================================================


// Listen Function
//==============================================================================
app.listen(port, () => {
    console.log('Express is listening in port: ', port)
})
//==============================================================================