let obj = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}

console.log(obj);
console.log(obj.name); // Accessing property
console.log(obj["age"]); // Accessing property using bracket notation
obj.greet(); // Calling method

//destructuring objects;
let {name, age} = obj; // Destructuring assignment
console.log(name,age); // Output: John 30

// Array destructuring
let arr = [1, 2, 3, 4, 5];
let [first,second,...rest] = arr; // Destructuring assignment
console.log(first, second,rest); // Output: 1 2 3 4 5
