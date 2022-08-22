// let name = 'king';
// const myName = ' Al Jabir';
// var ownName = 'Abdullah';

// const fullName = ownName.concat(myName);
// console.log(name);
// console.log(myName);
// console.log(ownName);
// console.log(fullName);

// length

// console.log(fullName.length);

//increement and decreements

// let num = 5;
// num += 6;
// console.log(num++);
// console.log(++num);

//padStart methods

// let text = '5';
// let padded = text.padStart(4, 'x');
// console.log(padded);

// let s = 'jabir';
// let padd = s.padStart(11, 'x');
// console.log(padd);

//Array

// const car = ['Toyota', 'Audi', 'BMW', 'Suzuki'];

// const carResult = car.map(cars => cars);
// console.log(carResult[1]);

// const fruit = ['apple', 'mango', 'ansa', 'bal'];

// console.log(fruit.join(' - '));

// const latter = new Set(['a', 'b', 'c', 'd', 'f']);
// console.log(latter);

// const obj = { name: 'John', age: 30, city: 'New York' };

// console.log(JSON.stringify(obj));
// console.log(obj);

// function displayOutput(out) {
//   console.log(out);
// }

// function getSumOfNum(a, b) {
//   let sum = a + b;
//   return sum;
// }

// let results = getSumOfNum(5, 9);
// displayOutput(results);

// function displayOutput(out) {
//   console.log(out);
// }

// function getSumOfNum(a, b) {
//   let sum = a * b;
//   displayOutput(sum);
// }

// getSumOfNum(5, 76);
// getSumOfNum(5, 6);
// getSumOfNum(5, 5);
// getSumOfNum(5, 16);

// function showOutput(out) {
//   console.log(out);
// }

// function fill(MyCallBack) {
//   let req = new XMLHttpRequest();
//   req.open('GET', './app.js');

//   req.onload = function () {
//     if (req.status === 2000) {
//       MyCallBack(this.responseText);
//     } else {
//       MyCallBack('err ' + req.status);
//     }
//   };
//   req.send();
// }

// fill(showOutput);

// function showOutput(print) {
//   console.log(print);
// }

// const myPromise = new Promise((resolve, reject) => {
//   let req = new XMLHttpRequest();
//   req.open('GET', 'https://jsonplaceholder.typicode.com/photos/1');

//   req.onload = () => {
//     if (req.status === 200) {
//       resolve(req.response);
//     } else {
//       reject('Error this link');
//     }
//   };
//   req.send();
// });

// myPromise.then(data => showOutput(data)).catch(err => showOutput(err));

// function showConsole(print) {
//   console.log(print);
// }

// const myPromise2 = new Promise((res, rej) => {
//   let req = new XMLHttpRequest();
//   req.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);

//   req.onload = function () {
//     if (req.status == 200) {
//       res(JSON.parse(req.response));
//     } else {
//       rej('This is error of the code');
//     }
//   };
//   req.send();
// });

// myPromise2.then(data => showConsole(data)).catch(err => showConsole(err));

// let x = 5;

// function my() {
//   let y = 9;
//   return function () {
//     let z = 10;
//     return function () {
//       let a = 98;
//       return function () {
//         console.log(a + x + y + z);
//       };
//     };
//   };
// }
// console.dir(my()()());

// let x = 9;

// const func = () => {
//   let y = 8;
//   const func2 = () => {
//     let z = 19;
//     const func3 = () => {
//       console.log(x + y + z);
//     };
//     func3();
//   };
//   func2();
// };
// func();

// console.dir(func);

// (function () {
//   let a = {
//     name: 'king',
//     age: 22,
//   };
//   console.log(a);
// })();

// // console.log(myFunc);

// const hTag = document.querySelector('h1');

// console.dir(hTag.parentElement);
// console.log(hTag.parentNode);

// console.log(hTag.childNodes);

// const details = {
//   name: 'king',
//   address: 'sylhet',
//   job: 'frontend developer',
//   check: {
//     per: 18,
//     jobType: 'agency',
//     buject: '3000k',
//   },
//   location: 'remote',
// };

// const {
//   name,
//   address,
//   job,
//   check: { per, jobType, buject },
//   location,
// } = details;
// console.log(jobType);
