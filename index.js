const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

let database = ['Adam Mickiewicz', 'Henryk Sienkiewicz']

app.get('/author', (req, res) => {
    res.send(database)
})

app.get('/authors/:author', (req, res) => {
    for (let i = 0; i < database.length; i++) {
        if (database[i] == req.params.author) {
            return res.send({
                name: database[i]
            })
        }
    }
})

app.listen(3000, () => {
    console.log('Author service is working')
})