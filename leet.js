// A function that contains 3 fuctions to increment, decrement, or reset a number based on input

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

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

//Uses map to complete the same calculation
var map = function(arr, fn) {
    return arr.map(fn);
};


// Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

var filter = function(arr, fn) {
    const newArr = [];
    for(let i =0; i < arr.length; i++){
        if(fn(arr[i], i)){
        newArr.push(arr[i])
    }
    }
    return newArr
};

var filter = function(arr, fn) {
    return arr.filter((x,i)=>fn(x,i));
    
};

// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.

var reduce = function(nums, fn, init) {
    let val = init;
    for(let i =0; i < nums.length; i++){
        val = (fn(val, nums[i]))

    }
    return val
};


var reduce = function (nums, fn, init) {
    return nums.reduce(fn,init);  //The reduce method was not allowed but this is the best way to solve this problem
  };


  var reduce = function(nums, fn, init) {//ForEach way
    let ans = init;

    nums.forEach((n) => {
        ans = fn(ans,n);
    });

    return ans;
};

// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: argsArr = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

var argumentsLength = function(...args) {
    let counter = 0;
    for(let i =0; i <args.length; i++){
        counter++
    }
    return counter
};