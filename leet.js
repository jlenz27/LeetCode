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

