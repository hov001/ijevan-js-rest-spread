function fakeMap(array, cb = () => {}) {
  const newArray = [];

  for (let idx = 0; idx < array.length; idx++) {
    const currentItem = cb(array[idx], idx, array);
    newArray.push(currentItem);
  }

  return newArray;
}

const array = [1, 2, 3];

const newArray = array.map((item) => item * 2);
const newArray2 = fakeMap(array, (item) => item * 2);
const newArray3 = fakeMap(array, (item, _, arr) => item);

console.log(newArray);
console.log(newArray2);
console.log(newArray3);
