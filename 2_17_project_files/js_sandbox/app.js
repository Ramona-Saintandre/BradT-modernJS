// // Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// // function test() {
// //   var a = 4;
// //   let b = 5;
// //   const c = 6;
// //   console.log('Function Scope: ', a, b, c);
// // }

// // test();

// // if(true) {
// //   // Block Scope
// //   var a = 4;
// //   let b = 5;
// //   const c = 6;
// //   console.log('If Scope: ', a, b, c);
// // }

// // for(var a = 0; a < 10; a++) {
// //   console.log(`Loop: ${a}`);
// // }

// console.log('Global Scope: ', a, b, c);

// function greet(firstName, lastName){
//     // console.log('Hello ');//all we have done is delcared the function you usually don't log a function unless you want to see if it works 
//     return 'Hello' + firstName; //you usually return it 
// }
// console.log (greet());//calling the function without arguments, you will get undefined because firstName and lastName is not defined 

//adding default parameters so that it does not return undefined 

// function greet(firstName = 'Ramona', lastName = 'Saintandre'){
//     return 'Hello ' + firstName;
// }console.log (greet());
 

//function expressions is setting a function as a variable assignment

// const square = function(x = 3){//you can set a default for the function, for when you call it 
// return x*x;
// };
// console.log(square(4));//not sure why this is not working right I keep getting 16 instead of 12 

// see image attached to this lesson 

//IIFE - immidiately invokable function expression
//function that you declare and run at the same time 
//need it to be an expression, you do this by putting it inside of ()

// (function(){
//     console.log('IIFE Ran..');
// })();

// // They can take in parmeters 
// (function(name){
//     console.log('Hello ' + name); //Need to make sure to add a space so that way the words don't run together 
// })('Ramona');





