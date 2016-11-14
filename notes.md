Javascript: hasn't changed much since the 1990s and was hastily designed to boot, which is why many don't like it.
ES 6-->ES2015 so that javascript will be updated annually rather than when it's all ratified/approved/whatever which takes forever.
  -chrome is the only one that implements all of ES6/2015.  
    -A transpilier will take on code and translate it into another, so that you can use javascript to write the code but it will convert it so that it will run in mozilla, IE, etc
        **Babel will convert the new javascript syntax to the web browsers https://babeljs.io/**
          --babel will polyfill, so if there is some code that works natively they will use that, if not they will transform it into a backwards compatible code for the other browsers.

Ruby was designed to make the programmers happy.  Javascript wasn't designed that way, but the new javascript is closer to that feeling of being made for programmers.

**we will only work in ES2015 and beyond**


Order of operations and logic
You can use single or double quotes for a string
  example of using single quotes and \ for the contraction:
  'let\'s say i need a contraction in my string'
  "let's say i need a contraction in my string"

Array = a string of things (objects, numbers, letters)
  literal syntax for array is [array]

object literal syntax = {}
  cannot rely on order in an object.  Objects do not maintain the order and "might as well as be in alphabetical order"

Boolean = true or false or "truthy" and "falsey"

Undefeined = null = "falsey"
  --0 is undefined/null/false in javascript
      ex: if (0) {console.log('zero is truth') }
          undefined
          if (1) {console.log('zero is truth') }
          VM809:1 zero is truth
          undefined

IF:

  var a = 2
    var=variable so a is now going to give 7
    a*7=49 because a = 7
    a * 2 = 14
  In ES2015 you can still use var but you can also use:

   const (constant)
    const is used more often, but it can't be changed
  name = "whatever"  
  let like var except in one way which he will explain later this week
    let color = "green"
    undefined
    color
    "green"
    color = "red"
    "red"
    color
    "red"

  use const unless you need to use 'let' never write var.




more mathy stuff:
  multiplicaton or *
    a * 7
    49
    "a"
    "a"
    "a" * 7
    NaN
    7 * "5" =
    VM856:1 Uncaught ReferenceError: Invalid left-hand side in assignment
    7 * "5"
    35

    BUT if you put "5" + 5 you will get 55 because javascript was built in a week and someone was a damn dipshit, so if you add a 'string' with a number in it by the same number it will just put them next to each other.
        ex: "5" * 5
            25
            "5" + 5
            "55"

      [] + []
      ""
      [] + {}
      "[object Object]"
      {} + []
      0
      {} + {}
      "[object Object][object Object]"

  modular % will give you a remainder:
    4/3
    1.3333333333333333
    4 % 3
    1
    12 % 3
    0
      the output is the remainder so that is why you get 0 for 12 % 3

  = signs
    1 = names something
      name = "liz"
    2 == gives you true or false
      name == "liz"
      true
    **3 === is the preferred on**
      name === "liz"
      true


Assignment notes
/*function greetMe(yourName) {
  alert("Hello " + yourName);
}

greetMe("World");*/
Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

more javascript notes:
for (let i = 0; i < 7; i = i + 1) {
  console.log("the value of i is " + i)
}   
