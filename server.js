const express = require('express')
const app = express()
const port = 3000

app.get('/greeting/:name', (request, response) => {
    console.log(request.params)
    response.send(`Hello ${request.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (request, response) => {
    console.log(request.params)
    response.send(`Your total is $${request.params.total} and you tipped ${request.params.tipPercentage}%`)
})

app.listen(port, () => {
    console.log('Express is listening in port: ', port)
})