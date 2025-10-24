// existing products = Google CSS
const googleCSSProducts = [
    { id: 1, name: "Shoe", price: 59 },
    { id: 2, name: "Shirt", price: 39 },
  ];
  
// updated products = channable feed products - changes daily
const channableProducts = [
    { id: 1, name: "Shoe", price: 55 }, // price changed
    { id: 3, name: "Hat", price: 25 },  // new
]


 // channable Products have been updated. Sync it with the google products

 // 1. You need two objects for both arrays to serve as comparison lookup for products
 // 2. create 3 arrays to hold - deleted, updated, added - these are filter operations where you compare array IDs with the new Object ID's
 // 3. Then you run DELETE< UPDATE, ADD operations on each, step by step

const newChannableProductsMap = {};
const googleCSSProductsMap = {};

// delete means - remove ID item from googleCSSProducts that do not appear in updatedProducts

// create MAP for existingProducts
googleCSSProducts.forEach((product) => {
    if (!googleCSSProductsMap[product.id]) {
        googleCSSProductsMap[product.id] = { name: product.name , price: product.price }
    }
})

// createMAP for updatedProducts
channableProducts.forEach((product) => {
    if (!newChannableProductsMap[product.id]) {
        newChannableProductsMap[product.id] = { name: product.name , price: product.price }
    }
})

console.log('googleCSSProductsMap', googleCSSProductsMap)

// if ID in channableProducts (NEW) does NOT exist in channableProductsMap, filter out
const deletedProducts = googleCSSProducts.filter((product) => !Object.hasOwn(newChannableProductsMap, product.id))
console.log('deletedProducts', deletedProducts)

 // product with id = 2 does not exist in the new updated channable products, thereforewe filter it out

 const addedProducts = channableProducts.filter((product) => !Object.hasOwn(googleCSSProductsMap, product.id))
 console.log('addedProducts', addedProducts) // [{id: 3, name: "Hat", price: 25}] - returns what NEW item was added in channableProducts

 // updated products = channableProducts and googleCSSProducts ID match, return the newer contents of matching ID if name or Price changed
 const updatedProducts = channableProducts.filter((product) => {
     if (!Object.hasOwn(googleCSSProductsMap, product.id)){
        return false
     }

     const existingProduct = googleCSSProductsMap[product.id];

     if (existingProduct.name !== product.name || existingProduct.price !== product.price) return true
 })

 console.log('updatedProducts', updatedProducts)

 // RUN DELETE, UPDATE, ADD - each operation is run on existing (googleCSSProducts) to match it with NEW (ChannableProducts)
 
 deletedProducts.forEach((p) => delete googleCSSProductsMap[p.id]) // delete product with ID that doesn't exist in new (channable) product list
 console.log('googleCSSProductsMap', googleCSSProductsMap)

 // UPDATE
 updatedProducts.forEach((p) => {
    googleCSSProductsMap[p.id] = {name: p.name, price: p.price}
 })

 console.log('googleCSSProductsMap UPDATE', googleCSSProductsMap)

 // ADD
addedProducts.forEach((p) => {
    googleCSSProductsMap[p.id] = { name: p.name, price: p.price}
})

console.log('googleCSSProductsMap after ADD - FINAL ', googleCSSProductsMap) // these two MAPS now match after doing DELETE, UPDATE, ADD
console.log('newChannableProductsMap', newChannableProductsMap) // matching

