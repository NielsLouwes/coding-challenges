const { groceryStore, addOrUpdateStore } = require("./code13March");

describe("addOrUpdateStore function", () => {
  beforeEach(() => {
    groceryStore.set("cheese", 4.0);
    groceryStore.set("ham", 2.0);
    groceryStore.set("milk", 1.0);
  });

  afterEach(() => {
    groceryStore.clear();
  });

  it("should add a new item to the store when it does not exist", () => {
    addOrUpdateStore("bread", 3.5);
    expect(groceryStore.has("bread")).toBe(true);
    expect(groceryStore.get("bread")).toBe(3.5);
    expect(groceryStore.size).toBe(4);
  });

  it("should update the price of an item when it already exists", () => {
    addOrUpdateStore("cheese", 3.5);
    expect(groceryStore.has("cheese")).toBe(true);
    expect(groceryStore.get("cheese")).toBe(3.5);
    expect(groceryStore.size).toBe(3);
  });

  it("should log a message when the item already exists", () => {
    const spy = jest.spyOn(console, "log");
    addOrUpdateStore("cheese", 3.5);
    expect(spy).toHaveBeenCalledWith("This item already exists!");
    spy.mockRestore();
    expect(groceryStore.size).toBe(3);
  });
});
