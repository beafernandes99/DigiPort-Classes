// Objects are a way to store data in key-value pairs.
// Example: bird = {
//   name: "Sparrow",
//   age: 1,
//   sings: true,
// };

// Exercises:

// 1. Simple object
// Make an object 'cat' with 'name', 'color', and 'age'.
// Show the values in the console.

let cat =  {
  name: "Luna",
  color: "black",
  age: 4,
  
}

console.log(cat.name, cat.color, cat.age);

// 2. Add and change
// Add 'toy' to the cat object.
// Change the 'age' to another number.

cat.toy = "ball of yarn";
cat.age = 5;

console.log(cat.name, cat.color, cat.toy, cat.age);

console.log("my cat is named", cat.name,",", "she is", cat.color, ",", "she likes to play with a", cat.toy, "and she is", cat.age);


// 3. Object with method
// Make an object 'dog' with 'name', 'breed',
// and a method 'bark()' that prints "Woof!".

let dog = {
  name: "Phoebe",
  breed: "shih tzu",
  bark: function() {
    console.log("Woof");
  }
};

console.log("Her name is", dog.name, "she is a", dog.breed,)
dog.bark();

// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.

let market = [
  { name: "apple", price: "1 BRL" },
  { name: "popcorn", price: "4 BRL" },
  { name: "soda", price: "2 BRL" }
];
  
for(let i = 0; i < market.length; i++) {
  console.log("Product: " + market[i].name + " " + "Price: $" + market[1].price);
}

// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.



// 6. For...in to sum values
// We have an object 'scores' with points from 3 players.
// Use a for...in loop to add all the points together
// and print the total.
