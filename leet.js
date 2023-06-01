// A function that contains 3 fuctions to increment, decrement, or reset a number based on input
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

var createCounter = function(init) {
    let cur = init;
    var counter = {
    increment : function(){
        return cur = cur + 1;
    },
    decrement : function(){
        return cur = cur -1;
    },
    reset: function(){
        cur = init;
        return cur;
    }
    }
    return counter
};

var createCounter = function(init) {
    let counter = init;

    let obj = {
        increment : () => ++counter,
        decrement : () => --counter,
        reset : () => counter = init
    }

    return obj;
};

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

var map = function(arr, fn) {
    let emptyArr = []
    for(let i= 0; i < arr.length;i++){
        emptyArr.push(fn(arr[i],i)) //Within each iteration, it calls the fn function and passes the current element of arr and the index i as arguments The result of the fn function call is then pushed into the emptyArr array.
    }
    return emptyArr
};

//use less memory however changes the input array
var map = function(arr, fn) {
    var n = arr.length;
    for(var i = 0; i < n; i++){
        arr[i] = fn(arr[i], i);
    }
    return arr;
};

//Uses map to complete the same calculations
var map = function(arr, fn) {
    return arr.map(fn);
};
