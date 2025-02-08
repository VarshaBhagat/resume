
## var vs let vs const

### Hoisting Behaviour
- **var**: Hoisted to the top of its scope (either global or function scope) and initialised with undefined during the memory creation phase. It is accessible before the declaration.
- **let** and **const**: Also hoisted but placed in the Temporal Dead Zone (TDZ). They are not initialized during hoisting and are inaccessible until the execution reaches their declaration.

### Global Execution Context (GEC)
- **let** and **const**: When declared at the global level, they are stored in the Script environment and do not become properties of the global window object.
- **var**: When declared at the global level, it is stored in the Global environment and becomes a property of the global window object.

### Block Execution Context
- **let** and **const**: Are block-scoped. If declared within a block (e.g., {} or loops), they are stored in the block’s Lexical Environment and not accessible outside the block.
- **var**: Is function-scoped, not block-scoped. If declared inside a block, it leaks out to the enclosing function or global scope.

### Upward Reference for let
- If a let variable is not defined within a block, it looks for the variable in the nearest enclosing block, script, or global scope. This is part of JavaScript’s lexical scoping rules.

### var in Blocks
- Declaring var inside a block does not make it block-scoped. Instead:
- It will either belong to the function scope (if inside a function).
- Or it will belong to the global scope (if not inside a function).

#### Global Scope and Hoisting
```js
console.log(a); // undefined(hoisted)
var a = 10;

console.log(b); // ReferenceError (TDZ)
let b = 20;

console.log(c); // ReferenceError (TDZ)
const c = 30;
```

#### Block Scope
```js
{
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a) // 10
console.log(b) // ReferenceError (Block scoped)
console.log(c) // ReferenceError (Block scoped)
```
 
#### Upward Reference for let

```js
let outerVar = "outer"
{
    console.log(outerVar) //outer (from enclosing scope)
    let innerVar = "inner"
    console.log(innerVar) //inner
}
console.log(innerVar) // ReferenceError 
```

#### Var hoisting

```js
var fruits = "apple";
console.log(fruits); // 1 apple
{
  console.log(fruits); // 2 undefined // fruits is declared but not yet assigned a value at this point
  var fruits;
  console.log(fruits); // 3 undefined
  fruits = "orange";
  {
    console.log(fruits); // 4 orange
  }
  console.log(fruits); // 5 orange
}
console.log(fruits); // 6 apple =>  it is outside the block, 
//This happens because of JavaScript's function-scoping behavior for var. 
// The original fruits declared outside the block (fruits = "apple")
// persists outside of any inner blocks.
```

#### let Hoisting

```js
let a = 10
function fn() {
  let a = 20;
  console.log("line number 4", a); // Logs 20
  a++;
  console.log("line number 7", a); // Logs 21
  if (a) {
    a = 30;
    a++;
    console.log("line number 11", a); // Logs 31
  }
  console.log("line number 13", a); // Logs 31
  function fn1() {
    let a = 20; // Shadowing `a` from the outer scope
    console.log("line number 4", a); // Logs 20
    a++;
    console.log("line number 7", a); // Logs 21
    if (a) {
      a = 30;
      a++;
      console.log("line number 11", a); // Logs 31
    }
    console.log("line number 13", a); // Logs 31
  }
  fn1();
}
fn();
console.log("line number 16", a); // Logs 10
```
