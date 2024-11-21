const stack = [];

export const addItemToStack = (item) => {
  return stack.push(item);
};

export const removeItemFromStack = () => {
  return stack.pop();
};

const peekTopOfStack = () => {
  return stack[stack.length - 1];
};

const isEmpty = () => {
  return stack.length < 1 ? true : false;
};

const size = () => {
  return stack.length;
};

addItemToStack(1);
addItemToStack(2);
addItemToStack(3);
addItemToStack(3);
removeItemFromStack();
removeItemFromStack();

console.log(isEmpty());
console.log(peekTopOfStack());

console.log("stack", stack);
