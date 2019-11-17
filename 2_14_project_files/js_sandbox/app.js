// // FUNCTION DECLARATIONS

// function greet(firstName = 'John', lastName = 'Doe'){
//   // if(typeof firstName === 'undefined'){firstName = 'John'}
//   // if(typeof lastName === 'undefined'){lastName = 'Doe'}
//   //console.log('Hello');
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// // console.log(greet());

// // FUNCTION EXPRESIONS

// const square = function(x = 3){
//   return x*x;
// };

// // console.log(square());

// // IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// // (function(){
// //   console.log('IIFE Ran..');
// // })();

// // (function(name){
// //   console.log('Hello '+ name);
// // })('Brad');

// // PROPERTY METHODS

// const todo = {
//   add: function(){
//     console.log('Add todo..');
//   },
//   edit: function(id){
//     console.log(`Edit todo ${id}`);
//   }
// }

// todo.delete = function(){
//   console.log('Delete todo...');
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// did work on the wrong lesson , copying code over from lesson 17 to correct lesson 

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

//Property methods is when a function is put inside of an object 

const todo = {
  add: function(){
      console.log('add todo ..');
  },
  edit: function(id) {
      console.log(`edit todo ${id}`);
  }
}
todo.delete = function(){
console.log('Delete todo..')

}

todo.add();
todo.edit(22);
todo.delete();


