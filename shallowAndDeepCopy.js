// SHALLOW COPY

// const obj = {
//   name: "Hovhannes",
//   age: 26,
//   stomach: [1, 2, 3],
// };

// const anotherObj = {
//   surname: "Kocharyan",
//   ...obj,
// };

// obj.hello = "Hello";

// obj.stomach.push(6);

// console.log(anotherObj);

// DEEP COPY

function deepCopy(data) {
  if (Array.isArray(data)) {
    const newArray = [];

    for (let value of data) {
      const currentItem = deepCopy(value);

      newArray.push(currentItem);
    }

    return newArray;
  }

  if (typeof data === "object" && data !== null) {
    const newObj = {};

    for (let key in data) {
      const currentItem = deepCopy(data[key]);

      newObj[key] = currentItem;
    }

    return newObj;
  }

  return data;
}

const obj = {
  name: "Hovhannes",
  age: 26,
  stomach: [1, 2, [5, 6]],
};

// const array = [1, 2, 3, [4, 5, [6, 7]]];

// const newArray = deepCopy(array);

// array[array.length - 1][2].push(10);

const newObj = deepCopy(obj);

obj.stomach[2].push(7);
obj.hello = "Hello";

console.log(obj);
console.log(newObj);
