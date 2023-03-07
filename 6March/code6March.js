const groceryStore = new Map();

groceryStore.set("cheese", 4.0);
groceryStore.set("ham", 2.0);
groceryStore.set("milk", 1.0);

const addOrUpdateStore = (item, itemPrice) => {
  const specificKey = item;

  if (groceryStore.has(specificKey)) {
    console.log("This item already exists!");
  }
  groceryStore.set(item, itemPrice);
};

module.exports = { addOrUpdateStore, groceryStore };
