// existing products = Google CSS
const existingProducts = [
    { id: 1, name: "Shoe", price: 59 },
    { id: 2, name: "Shirt", price: 39 },
  ];
  
// updated products = channable feed products - changes daily
const updatedProducts = [
    { id: 1, name: "Shoe", price: 55 }, // price changed
    { id: 3, name: "Hat", price: 25 },  // new
];

// removing items if updatedProducts has an ID that doesn't exist in existing

// Object solution

const existingProductCollection = {};
const updatedCollectionById = {};

// step 1: Create an object collection for the existingProducts
existingProducts.forEach((product) => {
    if (!existingProductCollection[product.id]) {
        existingProductCollection[product.id] = { name: product.name , price: product.price }
    }
})

console.log('exisingProductCollection', existingProductCollection)

// items added - compare updated Items with existing items

let toAdd = []; // { id: 3, name: "Hat", price: 25 }, NEW in updatedProducts

const addNewItems = () => {
     updatedProducts.forEach((p) => {
        if (!Object.hasOwn(existingProductCollection, p.id)){
            toAdd.push(p)
        }
     })
}


addNewItems()
console.log('toAdd', toAdd)

// items to update
updatedProducts.forEach((product) => {
    if (!updatedCollectionById[product.id]) {
        updatedCollectionById[product.id] = { name: product.name , price: product.price }
    }
})

// items removed
const toRemove =  existingProducts.filter((p) => !Object.hasOwn(updatedCollectionById, p.id))
console.log('toRemove', toRemove)

// items changed
// if id && name is the same in both collections, then update with NEW price from updatedProducts
const toUpdate = updatedProducts.filter((product) => {
    // if IDs in both lists don't match return false
    if (!Object.hasOwn(existingProductCollection, product.id)) {
        return false
    }
    const existingProduct = existingProductCollection[product.id];

    return product.name !== existingProduct.name || product.price !== existingProduct.price
})

console.log('toUpdate', toUpdate)

// step 3: Remove items, then update, then add new items

// step 4: apply removeals - if toRemove ids match the object, delete that entry
toRemove.forEach((p) => {
    delete existingProductCollection[p.id];
})

console.log('existingProductCollection', existingProductCollection)
// step 5: Add update to price
toUpdate.forEach((p) => {
    existingProductCollection[p.id] = { name: p.name , price: p.price }
})

console.log('after Updating:', existingProductCollection)

// Step 6: Add new items , iterate over toAdd array of products, add it to the Object collection

toAdd.forEach((p) => {
    existingProductCollection[p.id] = { name: p.name , price: p.price }
})

console.log('after Adding news items:', existingProductCollection)



