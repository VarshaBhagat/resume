## Ways to access object keys in JavaScript
### 1. Using the Dot Operator (.)
- Use the dot operator when you know the exact name of the property/key.
- The dot operator is simple and concise but requires that the key name is a valid JavaScript identifier (e.g., no spaces or special characters).

```js
const person = {
  name: "Alice",
  age: 25,
  job: "Developer"
};

console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 25
```

### 2. Using Square Bracket Notation ([])
- Use square brackets when:
- The key is stored in a variable.
- The key name is dynamic or determined at runtime.
- The key contains special characters, spaces, or is not a valid JavaScript identifier Example 1: Dynamic Key Access

```js
const person = {
  name: "Alice",
  age: 25,
  job: "Developer"
};
const key = "job";
console.log(person[key]); // Output: Developer
```

### Special Characters in Keys

```js
const person = {
  "first name": "Alice",
  age: 25
};
console.log(person["first name"]); // Output: Alice
```

### When to Use Square Brackets
- If you don’t know the exact key name at coding time.
- If the key is dynamic or needs to be constructed at runtime.
#### Iterating Through Object Keys
```js
const person = {
  name: "Alice",
  age: 25,
  job: "Developer"
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25
// job: Developer
```

### Summary
- Use . for **static** and **known keys**.
- Use [] for **dynamic keys** or **special cases**.
