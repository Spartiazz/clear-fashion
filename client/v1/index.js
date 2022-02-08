// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}];

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);



/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
const cheapest_t_shirt=[{name:'CHEAPEST_T_SHIRT',url:'https://adresse.paris/t-shirts-et-polos/4238-t-shirt-ranelagh-1300000262026.html'}]
// I can find on these e-shops
// 2. Log the variable
console.log(cheapest_t_shirt);





/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
var nbOfProduct = marketplace.length;
// 2. Log the variable
console.log(nbOfProduct);

// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have
const brandList =[];

for (let step =0; step < nbOfProduct;step++)
{
    if(!brandList.includes(marketplace[step].brand)){

brandList[step]=marketplace[step].brand;

    }

}

console.log(brandList);


// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable
marketplace.sort((a, b) => (a.price > b.price) ? 1 : -1)


// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable
marketplace.sort((a, b) => (a.date < b.date) ? 1 : -1)

// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list
function filterByPrice(obj) {
  if (obj.price<=100 && obj.price>=50) 
  {
    return true
  } 
  return false;
}
  
let arrayByPrice = marketplace.filter(filterByPrice);
console.log(arrayByPrice);


// 🎯 TODO: Average price
// 1. Determine the average price of the marketplace
// 2. Log the average
const average = marketplace.reduce((total, next) => total + next.price, 0) / marketplace.length;
console.log(average);




/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
// 2. Log the variable
function filterDedicated(obj) {
  if (obj.brand==='dedicated') 
  {
    return true
  } 
  return false;
}
  
let dedicated = marketplace.filter(filterDedicated);
console.log(dedicated);

function filterLoom(obj) {
  if (obj.brand==='loom') 
  {
    return true
  } 
  return false;
}
  
let loom = marketplace.filter(filterLoom);
console.log(loom);

function filter1083(obj) {
  if (obj.brand==='1083') 
  {
    return true
  } 
  return false;
}
  
let ten83 = marketplace.filter(filter1083);
console.log(ten83);

function filterAdresse(obj) {
  if (obj.brand==='adresse') 
  {
    return true
  } 
  return false;
}
  
let adresse = marketplace.filter(filterAdresse);
console.log(adresse);

function filterAatise(obj) {
  if (obj.brand==='aatise') 
  {
    return true
  } 
  return false;
}
  
let aatise = marketplace.filter(filterAatise);
console.log(aatise);

const brands = {
'aatise':[aatise],
'adresse':[adresse],
'ten83':[ten83],
'loom':[loom],
'dedicated':[dedicated]
}
console.log(brands);


// 3. Log the number of products by brands
console.log(brands.loom[0].length);
console.log(brands.adresse[0].length);
console.log(brands.aatise[0].length);
console.log(brands.ten83[0].length);
console.log(brands.dedicated[0].length);

// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort
console.log(brands.aatise[0].sort((a, b) => (a.price < b.price) ? 1 : -1));
console.log(brands.adresse[0].sort((a, b) => (a.price < b.price) ? 1 : -1));
console.log(brands.ten83[0].sort((a, b) => (a.price < b.price) ? 1 : -1));
console.log(brands.dedicated[0].sort((a, b) => (a.price < b.price) ? 1 : -1));
console.log(brands.loom[0].sort((a, b) => (a.price < b.price) ? 1 : -1));

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort
console.log(brands.aatise[0].sort((a, b) => (a.date > b.date) ? 1 : -1));
console.log(brands.adresse[0].sort((a, b) => (a.date > b.date) ? 1 : -1));
console.log(brands.ten83[0].sort((a, b) => (a.date > b.date) ? 1 : -1));
console.log(brands.loom[0].sort((a, b) => (a.date > b.date) ? 1 : -1));
console.log(brands.dedicated[0].sort((a, b) => (a.date > b.date) ? 1 : -1));




/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products
let stdAatise = Math.sqrt(brands.aatise[0].map(x => Math.pow(x - averageAatise, 2)).reduce((a, b) => a.price + b.price) / brands.aatise[0].length);
console.log(stdAatise);




/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.
let todaysDate = new Date();
let y = new Boolean("True")
let diffTime = 0;
let diffDays = 0;
for (let i = 0; i < COTELE_PARIS.length; i++) {
     diffTime = Math.abs(todaysDate - Date.parse(COTELE_PARIS[i].released));
     diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.table(diffDays,diffTime);
     if(diffDays>=14){
        y = ("False");

}
}
console.log(y);


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€
let z = new Boolean("True")
for (let i = 0; i < COTELE_PARIS.length; i++) {
    console.table(COTELE_PARIS[i].price);
     if(COTELE_PARIS[i].price>=100){
        z = ("False");

}
}
console.log(z);

// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product
for (let i = 0; i < COTELE_PARIS.length; i++) {
     if(COTELE_PARIS[i].uuid==='b56c6d88-749a-5b4c-b571-e5b5c6483131'){
        console.log("this is the product",COTELE_PARIS[i]);

}
}

// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product
for (let i = 0; i < COTELE_PARIS.length; i++) {
     if(COTELE_PARIS[i].uuid==='b56c6d88-749a-5b4c-b571-e5b5c6483131'){
           COTELE_PARIS.splice(i,1);

}
}
console.log(COTELE_PARIS);

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties





/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
