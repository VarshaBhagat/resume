## This Rule
### Rule 1: Object Method Invocation
When a method is invoked with an object (e.g., cap.sayHi()), this refers to the object that owns the method.

```js
const cap = {
    name: "Caption",
    sayHi(){
        console.log(`Hi, My name is ${this.name}`)
    }
}
cap.sayHi() // Hi, My name is Caption
```

### Rule 2: Global Execution Context
- In the global execution context (outside any function or object), this refers to the global object:
- In a browser: this is the window object.
- In Node.js: this is the global object (though it behaves differently in modules).

```js
console.log(this)// Window 
```

### Rule 3: Function Invocation
- When a regular function is called without being tied to an object, this defaults to the global object (window in a browser).
- In strict mode, this becomes undefined in such cases.

```js
function showThis() {
    console.log(this)// Window 
}
showThis() // window in non-strict, but undefined in strict
```

### Rule 4: Arrow Functions and this
- **Arrow functions do not have their own this**. Instead, they inherit this from their surrounding (lexical) scope.

```js
const obj = {
    name: "obj",
    regFunc(){
        console.log(this) // points to obj
    },
    arrowFunc = () =>{
        console.log(this) // points to outer scope, which is now global
    }
}
obj.regFunc() // obj
obj.arrowFunc() // Window
```

### Summary:
- Object methods: this refers to the object invoking the method.
- Global context: this refers to the global object (window in browsers).
- Functions: this depends on how they are invoked:
- Regular functions: this is the global object (or undefined in strict mode).
- Arrow functions: this is inherited from their lexical scope(the place where they were defined)

```js
let captain = {
  firstName: "Steve",
  sayHi: function () {
    console.log("1", this.firstName); // steve
    const iAmInner = () => {
      console.log("2", this.firstName);
      //this will be cap so output is "steve"
    };
    iAmInner();// this is inherited from their lexical scope
  },
}; 
captain.sayHi(); // this -> cap , calling with object
```
- For Execution context created with method call(calling with object), this will be that object.
- For Execution context created with a function call(calling without object), this will be that window.

```js
let captain = {
  firstName: "Steve",
  sayHi: function () {
    console.log("1", this.firstName); // steve
    const iAmInner = function () {
      console.log("2", this.firstName);
      //this will be window so output is "undefined"
    };
    iAmInner();// calling without object
  },
}; 
captain.sayHi(); // this -> cap , calling with object
```