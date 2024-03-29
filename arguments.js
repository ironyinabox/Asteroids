function sum() {
  var sum = 0;
  var args = Array.prototype.slice.apply(arguments);
  for (var i = 0; i < args.length; i++) {
    sum += parseInt(args[i]);
  }
  return sum;
};

Function.prototype.myBind = function (obj) {
  var fn = this;
  var args = Array.prototype.slice.call(arguments,1);
  return function() {
    return fn.apply(obj, args);
  };
};

var otherSum = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
};


function curriedSum(numArgs) {
  var numbers = [];
  var _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return otherSum(numbers);
    }
    else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
  var args = [];
  var fn = this;
  var _curried = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      debugger;
      return fn.apply(this, args);
    }
    else {
      return _curried;
    }
  }
  return _curried;
};

var add = function (a, b) {
  debugger;
  return a + b;
};

// ***for testing purposes****
//
// currySum = sum.curry(2);
// currySum(4)(5);
// var manySum = curriedSum(2);
// manySum(5)(30);
// function Cat(name) {
//   this.name = name;
// };
//
// Cat.prototype.sayHi = function() {
//   return "Hello, " + this.name;
// }
// Cat.prototype.count = function(start,end) {
//   for (var i = start; i <= end; i++) {
//     console.log("I "+ this.name + "say " + i);
//   }
// };
//
// // var rocky = new Cat("Rocky");
// // var sayHiFunction = rocky.sayHi.myBind(rocky);
// // var catCountToNine = rocky.count.myBind(rocky, 1, 9);
// //
// // catCountToNine();
