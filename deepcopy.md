## Default value and Polyfill of Deepcopy
### Default value
- Param without default value, it will print undefined.
```js
function func(param1, parm2, parm3) {
  console.log(param1, parm2, parm3)
}

func("Hi", "Hello") // 'Hi' 'Hello' undefined

function func(param1, parm2, parm3="default") {
  console.log(param1, parm2, parm3)
}
func("Hi", "Hello") // 'Hi' 'Hello' 'default'
```
### Problems with pass by reference or sharing
Array is an object and Object are passed by reference by default
```js
const arr = [1,2, 3,4,5];
const arr2=arr;
arr2.pop();
arr.push(100);
arr2[2] = 200;
console.log(arr, "arr1") // [ 1, 2, 200, 4, 100 ] 'arr1'
console.log(arr2, "arr2"); // [ 1, 2, 200, 4, 100 ] 'arr1'
```
###  How to overcome from it?
1. Using spread operator (shallow copy)
```js
const arr = [1,2, [3,6],4,5];
const arr2=[…arr];
arr2.pop();
arr2.push(100);
arr2[2][0] = 200;
console.log(arr, "arr1"); // [ 1, 2, [200,6], 4, 5 ] 'arr1'
console.log(arr2, "arr2"); // [ 1, 2, [200,6], 4, 100 ] 'arr2'
```
In case of object, shallow copy options

- 1. **Spread operator** — const obj2 = { …obj };
- 2. **Object.assign** — const obj3 = Object.assign({}, obj); // target , source -> target is returned
2. Using JSON operator (Deep copy)
```js
const arr = [1,2, [3,6],4,5];
const arr2=JSON.parse(JSON.stringify(arr))
arr2.pop();
arr2.push(100);
arr2[2][0] = 200;
console.log(arr, "arr1"); // [ 1, 2, [3,6], 4, 5 ] 'arr1'
console.log(arr2, "arr2"); // [ 1, 2, [200,6], 4, 100 ] 'arr2'
```
### But it fails, it doesn’t convert function into string
// deep clone — recursive function
```js
const obj = {
func: () => {
console.log("hello");
},
currentDay: new Date(),
};
const obj1 = JSON.parse(JSON.stringify(obj));
console.log(obj1, "obj1"); // { currentDay: '2025–01–28T07:53:21.061Z' } 'obj1'
obj1.func = () => {
console.log("hello1");
};
console.log(obj1.func());
```
### How to Solve ? — Polyfill of Deepcopy
```js
Object.prototype.clone = function(obj) {
    if(!obj){ throw new Error(obj, " is null or undefined");}
    if(obj instanceof Date){return new Date(obj);}
    if(typeof obj !== "object"){return obj}
    const cloning = Array.isArray(obj)?[]: {}
    for (let prop in obj) {
        if(obj.hasOwnProperty(prop)){
            // Simply do superClone to every element, Base conditions will do their work
            cloning[prop]=this.superclone(obj[prop])
        }
    }
    return cloning
}
```

Example:

```js
const obj = {
  func: () => {
  console.log("hello");
  },
  currentDay: new Date(),
};
const obj1 = Object.superClone(obj);
console.log(obj1, "obj2"); // { func: [Function: func], currentDay: 2025-01-28T08:50:12.494Z} 'obj2'
console.log(obj1.func(), "obj2"); 
//hello //undefined 'obj2' (since func is not returning)
```