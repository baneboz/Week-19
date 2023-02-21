"use strict";

// 1. Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ['hello', 'there', 'ES', 6]
// Output: ['Hello', 'There', 'ES']
const capitalizeString = function (arr) {
  const result = [];

  arr.forEach(el => {
    if (typeof el === "string") {
      result.push(el[0].toUpperCase() + el.slice(1));
    }
  });

  return result;
};
console.log(capitalizeString(["hello", "there", "ES", 6]));

// 2. Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input: [{ name: 'Banana', price: 120 }, {name: 'Orange', price: 100}]
// Output: [{ name: 'Banana', price: 144 }, { name: 'Orange', price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only
const calcTax = function (products) {
  const TAXRATE = 20;
  const taxesOnly = [];

  products.forEach(product => {
    let taxValue = (product.price * TAXRATE) / 100;
    taxesOnly.push(taxValue);
    product.price = product.price + taxValue;
  });

  return [products, taxesOnly];
};
console.log(
  calcTax([
    { name: "Banana", price: 120 },
    { name: "Orange", price: 100 },
  ])
);

// 3. Write a function that increases each element of the given array by the given value. If the value is
// omitted, increase each element of the array by 1.
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]
const increaseByValue = function (arr, value = 1) {
  const output = arr.map(el => el + value);
  return output;
};
console.log(increaseByValue([4, 6, 11, -9, 2.1], 2));
console.log(increaseByValue([4, 6, 11, -9, 2.1]));

// 4. Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]
const filterEven = function (arr) {
  const output = arr.filter(el => el % 2 === 0);
  return output;
};
console.log(filterEven([6, 11, 9, 0, 3]));

// 5. Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// Output: ['babel.js, 'JS standard']
const filterJS = function (arr) {
  const output = arr.filter(el => el.toUpperCase().includes("JS"));
  return output;
};
console.log(
  filterJS(["compiler", "transpiler", "babel.js", "JS standard", "linter"])
);

// 6. Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// Output: [7, 8]
const filterInteger = function (arr) {
  const output = arr.filter(el => Number.isInteger(el));
  return output;
};
console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));

// 7. Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553
// Output: [45, 553]
const filterInteger5 = function (arr) {
  const integers = filterInteger(arr);
  const output = integers.filter(int => /5/.test(int));
  return output;
};
console.log(filterInteger5([23, 11.5, 9, "abc", 45, 28, 553]));

// 8. Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: [1, 2, 5]
const gT10 = function (arr) {
  const output = [];
  arr.forEach((el, index) => {
    if (el > 10) output.push(index);
  });
  return output;
};
console.log(gT10([1.6, 11.34, 29.23, 7, 3.11, 18]));

// 9.
// a. Create an array of persons. A person should be an object with name and age properties.
// Experiment with enhanced object literals.
// b. Write a function that prints out the names of persons older than 25.
// c. Write a function that check if there is a person older than 40.
// d. Write a function that checks if all persons are older than 20.
const persons = [
  { name: "Bane", age: 33 },
  { name: "Bozovic", age: 36 },
  { name: "Pera", age: 22 },
];
// 10. Write a function that checks if the given array is an array of positive integer values.
// Input: [3, 11, 9, 5, 6]
// Output: yes
// Input: [3, -12, 4, 11]
// Output: no
const isPositive = function (arr) {
  const isPositiveBoolean = arr.every(el => el >= 0);
  const output = isPositiveBoolean ? "yes" : "no";
  return output;
};
console.log(isPositive([3, 11, 9, 5, 6]));

// 11. Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output: 48
const calcProduct = function (arr) {
  const output = arr.reduce((acc, curr) => acc * curr);
  return output;
};
console.log(calcProduct([2, 8, 3]));

// 12. Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// Output: 8
const findMax = function (arr) {
  const max = Math.max(...arr);
  return max;
};
console.log(findMax([2, 7, 3, 8, 5.4]));
