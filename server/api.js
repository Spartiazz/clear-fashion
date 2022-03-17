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

app.get('/products/search',async(request,response)=>{
  const {price,brand}=request.query;
  let product
  if(typeof price !== 'undefined'){
    let priceInt = parseInt(price);
    if(typeof brand === 'undefined'){
      product = await db.find({"price":{"$lte":priceInt}})
    }
    else{
      product = await db.find({"price":{"$lte":priceInt},"brand":brand})
    }
  }
  else if(typeof brand !== 'undefined'){
    product = await db.find({'brand':brand})
  }
  else{
    product = await db.find({})
  }
  response.send(product)
});

app.get('/products/:id', async(request, response) => {
  const products = await db.find({'_id':request.params.id});
  response.send(products);
});

app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);
