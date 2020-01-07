function getSum(num1, num2) {
    return num1 + num2;
}
// console.log('hello',4);
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num1 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum('3',15));
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + '' + lastName;
}
console.log(getName('Ramona'));
function myVoid() {
    return;
}
