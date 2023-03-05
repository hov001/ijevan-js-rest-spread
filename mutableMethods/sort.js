// ASCII => Unicode

// const array = [1, 3, 12, 24, 14, 123, 2, 7, 4, 6, 5];

const array = ["a", "c", "ab", "bf", "ac", "b", "g", "d", "f", "e"];

const newArray = array.sort((curItem, nextItem) => {
  if (curItem.length === nextItem.length) {
    return curItem > nextItem ? 1 : -1;
  } else if (curItem.length > nextItem.length) {
    return 1;
  } else {
    return -1;
  }
});

array.push("hello");

console.log(array, newArray);
