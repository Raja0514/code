
// let cars = [
//   {
//     color: "purple",
//     type: "minivan",
//     registration: new Date("2017-01-03"),
//     capacity: 7,
//   },
//   {
//     color: "red",
//     type: "station wagon",
//     registration: new Date("2018-03-03"),
//     capacity: 5,
//   },
// ];

// let car = [
//   {
//     color: "red",
//     type: "cabrio",
//     registration: new Date("2016-05-02"),
//     capacity: 2,
//   },
// ];

// cars.unshift(car);//add first possiton of the array

// //syntax===>array.unshift(items to add)

// cars.push(car);//add last position of the array

// //syntax===>array.push(items to add)

// cars.splice(4, 0, car);//middle of the array add

// //syntax====>Array.splice(
//   //{index where to start},
//  // {how many items to remove},
//   //{items to add}
// //);
// console.log(cars);

console.log(new Date().getDate()); // returns value 1-31 for day of the month
console.log(new Date().getDay()); //returns value 0-6 for day of the week
console.log(new Date().getFullYear()); //returns a 4 digit value for the current year
console.log(new Date().getHours()); //returns value 0-23 for the current hour
console.log(new Date().getMinutes()); //returns value 0-59 for the current minute of the hour
console.log(new Date().getSeconds()); //returns value 0-59 for current second of the minute
console.log(new Date().getMilliseconds()); //returns value 0-999 for current ms of the second
console.log(new Date().getTime()); //returns date as ms since Jan 1, 1970
console.log(new Date().toDateString()); //returns a string (e.g. "Fri May 9 2020")

console.log('working')

var a=10;
var b=10;

if(a!==b){
    console.log(true)
}
else{
    console.log(false)
}

