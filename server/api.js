const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const { Db } = require('mongodb');
const db = require('./db')

const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});

app.get('/product/:id', async(request, response) => {
  const products = await db.find({'_id':request.params.id});
  response.send(products);
});


app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);
