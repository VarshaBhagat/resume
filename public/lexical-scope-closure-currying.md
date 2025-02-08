## Lexical Scope, Closure and Currying
### Lexical Scope
Functions can access variables defined in their **own scope** and in the **scopes of their parent functions.**
```js
function outer() {
  const outerVar = "I am from outer";

  function inner() {
    console.log(outerVar); // Can access outerVar because of lexical scope
  }

  inner();
}

outer(); // Output: "I am from outer"
// It doesn't matter when or where inner() is called; 
// its scope depends on where it was defined
```
---

### Closure
A closure is created when a function “remembers” the variables from its **lexical scope**, even after the function has finished executing. Closures allow inner functions to access variables of their parent function even after the parent function has returned.
```js
function createCounter() {
  let count = 0; // Variable defined in the outer function

  return function () {
    count++; // Inner function accessing `count` from outer function
    console.log(count);
  };
}

const counter = createCounter(); // `createCounter` is invoked
counter(); // 1
counter(); // 2
counter(); // 3
```
---

### Currying
Currying is a functional programming technique where a function is transformed into a series of functions, each taking a single argument. Instead of calling a function with all its arguments at once, currying allows you to call it one argument at a time.
```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      // If enough arguments are provided, call the original function
      return fn(...args);
    } else {
      // Otherwise, return a function waiting for the remaining arguments
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}

-----------------------------------------------------------------------------

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      // If enough arguments are provided, call the original function
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

-----------------------------------------------------------------------------

// Example:
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2, 3, 4)); // 24

```

### Why Use Currying?
- **Reusability**: Partially apply a function and reuse it with different arguments.
- **Simplified Code**: Breaking a function into smaller steps makes the code easier to read and manage.
- **Functional Composition**: Currying enables the creation of more modular and composable code.

#### Example:
In this case, **var is functional scope**
```js
function outer() {
  let arrFn = [];
  // since var is functional scope, i = undefined , during memory creation
  // i = 3 beacuse of for loop
  for (var i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      // i remembered from lexical scope
      console.log(i);
    });
  }
  return arrFn;
}
let arrFn = outer();
arrFn[0](); // 3
arrFn[1](); // 3
arrFn[2](); // 3
```
In this case, **let is block scope.**
```js
function outer() {
  let arrFn = [];
  for (let i = 0; i < 3; i++) {
    // let is block scoped
    arrFn.push(function fn() {
      console.log(i);
    });
  }
  return arrFn;
}
let arrFn = outer();
arrFn[0](); // 0
arrFn[1](); // 1
arrFn[2](); // 2
```
