const salary = {
  Mark: 28376,
  Peter: 41012,
  Bee: 16079,
  Jack: 81584,
  Patrick: 46169,
  John: 66160,
  Tee: 15885,
  Pop: 38590,
  Lisa: 35786,
  Alex: 12714,
  Bank: 15315,
  Pee: 27477,
};

// Start coding here
let findValues = Object.values(salary);
console.log(findValues);
let findTotal = findValues.reduce((a, b) => a + b, 0);
console.log(`Total salary for all employees is ${findTotal}`);
