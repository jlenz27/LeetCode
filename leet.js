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

var argumentsLength = function(...args) { //return without loop to use less memory
    return args.length;
  };

//  You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.

var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
  
    for (let i = 0; i < items.length; i++) {
      const [type, color, name] = items[i];
  
      if (
        (ruleKey === "type" && type === ruleValue) ||
        (ruleKey === "color" && color === ruleValue) ||
        (ruleKey === "name" && name === ruleValue)
      ) {
        count++;
      }
    }
  
    return count;
  
  };

//   The code then checks if the item matches the given rule based on the ruleKey and ruleValue parameters. If ruleKey is "type" and the type of the current item is equal to ruleValue, or if ruleKey is "color" and the color of the current item is equal to ruleValue, or if ruleKey is "name" and the name of the current item is equal to ruleValue, then the count is incremented by 1.


//--------------------------------------------------------------------------------------------------------------------



// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

var getConcatenation = function(nums) {
    let ans = [];
    for(let i = 0; i < nums.length; i++){
        ans.push(nums[i])
 
        
    }
     for(let i = 0; i < nums.length; i++){
        ans.push(nums[i])
        
    }
    return ans
};

//best
var getConcatenation = function(nums) {
    return nums.concat(nums);
};

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

var shuffle = function (nums, n) {
    let arr = []
    for (let i = 0; i < nums.length/2; i++) {
        arr.push(nums[i], nums[i + n])

    }

    return arr
};
//better time and memory 
var shuffle = function(nums, n) {
    const arr1 = nums.slice(0, n).reverse();
    const arr2 = nums.slice(n).reverse();

    for( let i=0; i< nums.length; i++ ) {
        if( i%2 === 0 ) {
            nums[i] = arr1.pop()
        } else {
            nums[i] = arr2.pop()
        }
    }

    return nums;
};

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.
// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

var sortSentence = function (s) {
    const words = s.split(' ');
    const result = new Array(words.length);
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const originalWord = word.slice(0, -1); // Remove the last character (word position)
      const position = parseInt(word[word.length - 1]); // Extract the word position as an integer
      result[position - 1] = originalWord; // Place the original word at the correct index in the result array
    }
  
    return result.join(' '); // Join the words in the result array into a string
  };

  var sortSentence = function(s) {
    s = s.split(" ").sort((a,b) => {
        return a[a.length-1] - b[b.length-1]
    })

    return s.join(" ").replaceAll(/[0-9]/g, "")
};


// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

var arrayStringsAreEqual = function(word1, word2) {
    let temp = word1.join('')
    let temp1 = word2.join('')
      if(temp === temp1){
          return true
      }else{
          return false
      }   
};

var arrayStringsAreEqual = function(word1, word2) { //A one line solution to the above one
    return word1.join('')===word2.join('')  

};

// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.
// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].
// Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// Input: celsius = 36.50
// Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.

var convertTemperature = function(celsius) {
    let an =[celsius + 273.15, celsius * 1.80 + 32.00]
    return an
};

// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

var numIdenticalPairs = function(nums) {
    let counter = 0
    for(let i = 0; i < nums.length;i++){
        for(let j = 0; j < nums.length;j++){
        if(nums[i] == nums[j] && (i < j)){
            counter++
        }
        }
    }
    return counter
};

// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
// Input: n = 5
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.

var smallestEvenMultiple = function(n) {
    if(n % 2 != 0){
        return n * 2
    }else{
     return (n * 2)/2
    }
};

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

var subtractProductAndSum = function (n) {
    const ne = n.toString();
    let sum = 0;
    let prod = 1;
    for (let i = 0; i < ne.length; i++) {
        sum += parseInt(ne.charAt(i));
        prod *= parseInt(ne.charAt(i));

    }
    return prod - sum
};

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

var smallerNumbersThanCurrent = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count++

            }

        }
        arr.push(count)
    }
    return arr
};

// Given a function fn and a time in milliseconds t, return a debounced version of that function.
// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also recieve the passed parameters.
// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

// Input: 
// t = 50
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 75, inputs: [2]}
// ]
// Output: [{"t": 125, inputs: [2]}]
// Explanation:
// let start = Date.now();
// function log(...inputs) { 
//   console.log([Date.now() - start, inputs ])
// }
// const dlog = debounce(log, 50);
// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);

// The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
// The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).

var debounce = function(fn, t) {
    let id;
    return function(...args) {
       clearTimeout(id);//clears the call before the timeout with the id of call
       id = setTimeout(()=> fn(...args), t)// set timeout empty fuction of teo arguments
    }
};


// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).
// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".

var truncateSentence = function(s, k) {
    let an = s.split(' ')
    let ne = [];
    for(let i = 0; i < k; i++){
        ne.push(an[i])
       
    }
    return ne.join(" ")
 };

//  A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

var checkIfPangram = function(sentence) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
   for (let i = 0; i < alphabet.length; i++) {
     if (sentence.indexOf(alphabet[i]) === -1) {
       return false;
     }
   }
   return true;
 };