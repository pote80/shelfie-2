require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const ctrl = require('./controller')

const { PORT, CONNECTION_STRING } = process.env;

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance);
        console.log(`"I'm in."`)
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/api/products', ctrl.getAll)
app.post('/api/products', ctrl.newProduct)
app.delete('/api/products/:id', ctrl.deleteProduct)

app.listen(PORT, () => {
    console.log(`MAN ${PORT}M, WEST`)
})