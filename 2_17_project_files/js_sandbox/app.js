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


//global scope 

var a = 'variglo';
let b  = 'lettyglo';
const c = 'constglo';

// function funScope () {
//     var a = 'varifun';
//     let b = 'lettyfun';
//     const c = 'constfun';
//     console.log('function Scope: ','varifun','lettyfun','constfun');
// }
// funScope();

//block level scope 
// if (true){
//     var a = 'variblck';
//     let b = 'lettyblck';
//     const c = 'constblck';
//     console.log('IF Block Scope: ','variblck','lettyblck','constblck')
// }

for(var a = 0; a <10; a++){
    console.log(`Loop: ${a}`);
}
console.log('Global:','Variglo','lettyglo','constglo')

