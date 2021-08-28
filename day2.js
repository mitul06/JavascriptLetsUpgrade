// create a array of objects with food data
// with properties (name,price,quantity)

// and display it using a for loop in the console

var foods = [
  {
    name: "Pav Bhaji",
    price: 60,
    quantity: "one",
  },
  {
    name: "Chinese",
    price: 100,
    quantity: "one",
  },
  {
    name: "Paneer Tikka",
    price: 150,
    quantity: "one",
  },
  {
    name: "Gujarati",
    price: 120,
    quantity: "one",
  }
];

for (let index = 0; index < foods.length; index++) {
  console.log(foods[index]);
}