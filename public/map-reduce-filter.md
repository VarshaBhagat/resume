### Map
Map transforms an array by applying a provided function to each element. It creates and returns a new array without modifying the original array.
```js
array.map(callback(element, index, array), thisArg);
```
#### Parameters:
1. callback: A function that is called for every element in the array.
- element: The current element being processed.
- index (optional): The index of the current element.
- array (optional): The array map was called on.
2. thisArg (optional): Value to use as this when executing the callback
#### Poly fill
```js
Array.prototype.myMap = function(cb){
  let result=[];
  for(let i=0;i<this.length;i++){
    result.push(cb(this[i], i, this))
  }
  return result
}
```
---

### Reduce
Single value is returned by applying a callback function repeatedly to its elements.
```js
array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```
#### Parameters:
1. callback: A function executed on each element of the array.
- accumulator: The running total or result of the reduction.
- currentValue: The current element being processed in the array.
- index (optional): The index of the current element.
- array (optional): The array reduce was called on.
2. initialValue (optional): The initial value to use for the accumulator. If not provided, the first element of the array is used as the initial value, and the iteration starts from the second element.

#### Poly fill
```js
Array.prototype.myreduce=function(cb, initalValue){
  let acc= initalValue || 0;
  for(let i=0;i<this.length;i++){
    acc=cb(acc, this[i], i,this)
  }
  return acc
}
```
---

### Filter
It is used to create a new array containing all elements of the original array that pass a specific test implemented by the provided callback function.
```js
array.filter(callback(element, index, array), thisArg);
```
#### Parameters:
1. callback: A function that determines whether each element should be included in the new array.
- element: The current element being processed.
- index (optional): The index of the current element.
- array (optional): The array filter was called on.
2. thisArg (optional): Value to use as this when executing the callback.

#### Poly fill
```js
Array.prototype.myFilter = function(cb){
  let result=[];
  for(let i=0;i<this.length;i++){
    if(cb(this[i], i, this)){
      result.push(this[i])
    }
  }
  return result
}
```