// Rest

// function foo(first, second, third, ...fooItems) {
//   console.log("first:::", first);
//   console.log("args:::", fooItems);

//   return fooItems.map((fooItem) => fooItem.length);
// }

// const res = foo("hello", "world", "some", "another", "vuuuy");

// console.log(res);

// Spread

// const person = {
//   name: "Hovhannes",
//   age: 26,
// };

// console.log("person:::", person);

// const personData = {
//   samson: 1,
//   ...person,
//   stomach: [],
// };

// for (let key in person) {
//   personData[key] = person[key];
// }

// personData.stomach = [];

// console.log("personData:::", personData);

// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, [1, 2, 9]];

// const arr4 = [...arr, ...arr2, ...arr3];

// console.log(arr4);

// arr3[2].push(6);

// console.log(arr4);

// const str = "hello";

// const arr = { ...str };

// console.log(arr);

// Destructuring

// const [firstItem, secondItem, ...tail] = [1, 2, 3, 4];

// console.log("firstItem:::", firstItem);
// console.log("secondItem:::", secondItem);
// console.log("tail:::", tail);

// const { name, ...tail } = {
//   name: "Hovhannes",
//   age: 26,
//   stomach: [],
// };

// console.log(name, tail);

// function sayHi({ firstName, secondName, age, isMarried }) {
//   return `Hello, my name is ${firstName} ${secondName}, I am ${age} y/o and I am ${
//     isMarried ? "" : "not "
//   }married`;
// }

// const person = {
//   firstName: "Hovhannes",
//   secondName: "Kocharyan",
//   age: 26,
//   isMarried: false,
// };

// console.log(sayHi(person));

// function firstCharUpperCase([ first, ...tail ]) {
//   console.log("tail:::", tail);
//   return first.toUpperCase() + tail.join("");
// }

// console.log(firstCharUpperCase("hello"));

const [, , , { stomach }] = [
  1,
  2,
  [1, 2, { name: "Hovhannes" }],
  { age: 26, stomach: ["shawarma", "dolma"] },
];

console.log(stomach);

// const [second, first] = [1, 2];

// console.log(first);
