// // FOR LOOP

// // for(let i = 0; i < 10; i++){
// //   if(i === 2){
// //     console.log('2 is my favorite number');
// //     continue;
// //   }

// //   if(i === 5){
// //     console.log('Stop the loop');
// //     break;
// //   }

// //   console.log('Number '+ i);
// // }

// // WHILE LOOP

// // let i = 0;

// // while(i < 10){
// //   console.log('Number ' + i);
// //   i++;
// // }

// // DO WHILE

// // let i = 100;

// // do {
// //   console.log('Number ' + i);
// //   i++;
// // }

// // while(i < 10);

// // LOOP THROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// // for(let i = 0; i < cars.length; i++){
// //   console.log(cars[i]);
// // }

// // FOREACH
// // cars.forEach(function(car, index, array){
// //   console.log(`${index} : ${car}`);
// //   console.log(array);
// // });

// // MAP
// // const users  = [
// //   {id: 1, name:'John'},
// //   {id: 2, name: 'Sara'},
// //   {id: 3, name: 'Karen'},
// //   {id: 4, name: 'Steve'}
// // ];

// // const ids = users.map(function(user){
// //   return user.id;
// // });

// // console.log(ids);


// // FOR IN LOOP
// const user = {
//   firstName: 'John', 
//   lastName: 'Doe',
//   age: 40
// }

// for(let x in user){
//   console.log(`${x} : ${user[x]}`);
// }

// For LOOPS
// You alway want to use var or let inside of a loop, you can not use const, because it is always changing 
//
// for (let i = 0; i <= 10; i++ ){
// // console.log('Number '+ i);
// if (i ===2){
//   console.log('2 is my fav number');
//   continue;
// }
// if(i = 5){
//   console.log('Stop!!')
// break;
// }

// console.log('number '+ i);
// }

//While Loop - should be used when the number of iterations is unclear , if you know how many iterations then use a forLoop 

// let i = 0; //  With whileLoops you set the variable outside the loop 
// while (i < 10){ //only the condition goes in here unlike the for loop
// console.log('Number' + i);
// i++;
// }

//doWhileLoop - this will always run at least once no matter what . So if we were to change the value of the variable to more than the condition it would still run 

// let i = 0;
// do {
//   console.log('Number'+ i);
//   i++;
// }

// while (i < 10);


//Looping through Arrays 

//  const cars = ['ford', 'chevy', 'Honda','Toyota'];
// // for (let i = 0; i < cars.length; i++){
// //   console.log(cars[i]);
// // }

// //forEach Array loop 
// //takes in a callback function , this is how you should loop through an array 
//  cars.forEach(function(car, index, array){
//  console.log(`${index}: ${car}`);
//  console.log(array);
//  });

//MAP is used to create a different array 

// const users =[
//   {id:1, name:'Ramona'},
//   {id:2, name:'David'},
//   {id:3, name:'Shae'},
//   {id:4, name:'John'}

// ];
// const ids = users.map(function(users){
// return users.name
// });
// console.log(name);

//forIn loop 

const user = {
  firstName: 'John',//firsName = Key , and 'John' = Value making up the keyValue pair 
  lastName: 'Doe',
  age:40
}
for (let x in user){//x gives us the key . inside of an there is a key and a value, also know as key value pairs. 
  console.log(`${x}: ${user[x]}`);//this is how to get both the key and the value 
}




