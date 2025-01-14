function greeter(person: string): string {
  return "Hello, "+ person + "!";
}

let user = ["Jane", "Doe"];

// Solution 1:  Join the array elements into a single string
let userName = user.join(" ");
console.log(greeter(userName)); // Output: Hello, Jane Doe!

// Solution 2: Modify the function to accept an array of strings
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ") + "!";
}
console.log(greeterArray(user)); // Output: Hello, Jane Doe!