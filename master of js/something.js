/*
let arr = [2, 4, 5, 99, 23];
let max = 0;
let sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  sum += arr[i];
  console.log(arr[i]);
}
console.log(`min is ${max} and total sum is : ${sum}`);

nams = "al jabir";
nams = "My name is Abdullah";
console.log(nams);

let day = new Date().getDay();
switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tueday");
    break;
  case 3:
    console.log("Today is Wedday");
    break;
  case 4:
    console.log("Today is Thrusday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Satday");
    break;
  default:
    console.log("There is no match of day");
}


//coding challenge #1

const mark = 78
const markHeight = 1.69
const jonh = 92
const jonhHeight = 1.95
const bmiMark = mark/markHeight ** 2
const bmiJonh = jonh/(jonhHeight * jonhHeight)
const markhigherBMi = bmiMark > bmiJonh
console.log(bmiMark,bmiJonh,markhigherBMi)
//end

const name = 'Jabir'
const job = 'Learner of JS'
const BirthYear = 1998
const year = 2022

const res =`I am ${name},
I am ${year - BirthYear}
years old ${job}!`
console.log(res.toUpperCase())

const age = 16

if(age >= 18) console.log("Your are vote of elections")
else console.log('You cant the vote of elections')

let ages = 16;
if(ages != 30) console.log('You can learn driving')

const me = true
const me2 = false
console.log(me === me2)
const showTrue = me && me2
if(showTrue){
    console.log("Sarah is able to drive")
}else{
    console.log('Some else should drive...')
}

let str = 'a'
switch(str){
    case 'a':
    case 'e':
case 'i':
    case 'o':
        case 'u':
   console.log('This is vowels')
   break
   default:
    console.log('consonats')
}

let sex = 15;
let sex2 = sex >= 18 ? 'I will be sex at night':'I will be coding'
console.log(sex2)
let sm = 15
sm >= 18 ? console.log('I will be dating with you oneday'):console.log('I am not sure what can i do?')

// functions

function calling(){
    console.log('I will call with my wife....')
}

calling()
calling()
calling()
calling()

function ase(){
    const a =9,b=5;
    console.log(a,b)
    const koitaAse = `ame kase ${a} ase. tar kase ${b} ase`
   console.log(koitaAse)
}
ase()
ase()
ase()
ase()
let coun= 0;
function namoto(n){
    for(i=1; i<=10; i++){
        console.log(`${n} * ${i} = ${n*i}`);
        coun++;
    }
    console.log('counts = '+coun)
}
namoto(5)
namoto(15)
namoto(25)
namoto(35)
namoto(45)

function calAge(birth){
    const realYear = 2022 - birth;
    return realYear;
}
const resOfAge = calAge(1998)
const resOfAge2 = calAge(2000)
const resOfAge3 = calAge(2002)
const resOfAge4 = calAge(2004)
console.log(resOfAge+' Years old')
console.log(resOfAge2+' Years old')
console.log(resOfAge3+' Years old')
console.log(resOfAge4+' Years old')

// Arrow functions

const res33 = (n) => 2022 - n;
console.log(res33(1998))

const resofage = births =>{
    const resi = 2022 - births
    return resi
}
console.log(resofage(2003))
const packAse = function(resofFruit){
    return resofFruit * 2
}

function pack(mango,kg){
    const resA = packAse(mango);
    const resB = packAse(kg);
    const resOfPack = `You have can ${resA} pack and ${resB} kg`
    return resOfPack
}

console.log(pack(5,3))


const calcAverage = (a,b,c) => (a+b+c)/3
let dolphinsScore = calcAverage(44,23,71)
let koalasScore = calcAverage(65,54,49)
console.log(dolphinsScore,koalasScore)

const checkWinner = function(avgDolphins,avgKoalos){
    if(avgDolphins >= 2 * avgKoalos){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalos})`)
    }else if(avgKoalos >=2 * avgDolphins){
        console.log(`Koalas win  (${avgKoalos} vs ${avgDolphins})`)
    }else{
        console.log(`No team wins`)
    }
}

 dolphinsScore = calcAverage(33,55,88)
 koalasScore = calcAverage(88,55,22)

checkWinner(dolphinsScore,koalasScore)
checkWinner(443,199)
console.log(dolphinsScore,koalasScore)


// add sum of function

function add(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}
add(5,5)
add(15,5)
add(5,15)
add(5,2)
add(115,51)

function add2(n1,n2){
    const resing = n1*n2
    console.log(`Res of value ${resing}`)
}
add2(4,5)
add2(5,5)
add2(9,9)

const add3 = function(a,b){
    const ress = a/b
    return ress
}
console.log(add3(50,10))
console.log(add3(30,10))
console.log(add3(50,15))
console.log(add3(50,20))

const details = function(name,age,job){
    const showOfYourDetails = `My name is ${name}. I am ${age} years old and I will be ${job} developer at remote jobs oneday insha'Allah`
    return showOfYourDetails
}
console.log(details('Jabir',19,'Frontend/Mern stack'))
//copy of site
function callMyName(name, callback) {
    var myAge = 20;
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr.' + name);
}

function hello(age) {
    console.log('I am passed through argument and my age is: ' + age);
}

callMyName('Zonayed Ahmed', hello);
//test of callback function
 function msg(name){
    console.log("Hello mr. "+name)
    return function check(job){
        console.log('Mr. '+name+' I will be attend your '+job)
    }
 }
 msg('Jabir')('RND Company')

 // try to callback function

 function callings(name,callback){
    let dak = 'Nagbari'
    callback(dak)
    console.log('my name is '+name)
 }

 function coming(kobe){
    console.log('Tumi ki '+kobe+' te aso nki')
 }
 callings('King',coming)


//Contructor functions


 const myResult = new Function ('a','b','return a*b')
 console.log(myResult(5,3))
 console.log(myResult(5,5))
 console.log(myResult(5,6))
 console.log(myResult(5,9))
 //something
 function myFunction(a, b) {
    return a * b;
  }
  
  let x = myFunction(4, 3) * 2;
  console.log(x)


  var foods = ['cake','cala','lichu','juice']
  var numbers = [2,5,9,98]

  foods.forEach(function(v,a){
    console.log(`index ${a+1} and valu ${v}`)
  })
*/
// Array
/*
const Year = [2003, 2005, 1998, 1996, 2001]
const age = []
var sum = 0
for (i = 0; i < Year.length; i++) {
  age.push(2022 - Year[i])
  sum += age[i]
}
console.log(age)
console.log('Total age of sum ' + sum)

console.log('i love you')

let person = {
  name: 'Jabir',
  age: 22,
  job: 'Frontend Developer',
  details: function () {
    console.log(this.name + this.job)
  },
}
console.log(person)
*/
// OOP
// class Person {
//   constructor(n, j) {
//     this.n = n
//     this.j = j
//   }
//   getting() {
//     return `Hello ${this.n} tumi ki ${this.j} koro nki`
//   }
// }
// let per = new Person('jaber', 'Frontend developer')
// console.log(per.getting())
// function ac(a, b) {
//   return a + b - 1
// }
// let a = ac(40, 10)
// console.log(a)
// console.log('king will be developer')
// console.log('I will fuck exam')
// console.log('Abu Rayhan', 'Abu Rayhan'.length)
// const names = [
//   'HM Nayeem',
//   'Aditya Chakraborty',
//   'Abu Rayhan',
//   'Shaker Hossain',
//   'Akib Ahmad',
//   'Alvi Chowdhury',
// ]
// let index = -1
// let person = names[++index]
// setInterval(() => {
//   person = names[index++]
//   console.log(person, person.length)
//   if (index === names.length) {
//     index = 0
//   }
// }, 1000)
/*


let count = 1
while (true) {
  let txt = Math.ceil(Math.random() * 100)
  console.log(txt, 'I will be developer')
  if (txt === 45 || txt == 9) break
  count++
}
console.log(count)

do {
  console.log('Ami ki korte chai nijeo jani na')
} while (false)

// Array of Stack learner

let person = [
  'jabir',
  'makia',
  'knight',
  'sadia',
  'riya',
  'bal',
  'japan',
  'singapure',
  'malaysia',
]
// for (i = 0; i < person.length; i++) {
//   console.log(person[i], person[i].toUpperCase())
// }
let i = 0
let cou = 0
while (i < person.length) {
  console.log(person[i].toLocaleUpperCase())
  cou++
  i++
}
console.log(cou)


*/
// function generateRandomNumber(max) {
//   const randomNumber = Math.floor(Math.random() * max)
//   return randomNumber
// }
// console.log(generateRandomNumber(10))
// console.log(generateRandomNumber(100))
// console.log(generateRandomNumber(1000))
// const randomNumber2 = Math.floor(Math.random() * 100)
// console.log(randomNumber2)
/*

let arr = [4, 5, 6, 3, 2, 5, 32, 11, 44, 55, 33, 24]

let updates = [],
  count = 0,
  sum = 0

for (i = 0; i < arr.length; i++) {
  console.log(arr[i])
  updates.push((arr[i] = arr[i] * 3))
  sum += arr[i]
  count++
}
console.log(`upadate value : ${updates}`)
console.log(`sum of value : ${sum} and total count of value : ${count}`)

// forEach Method

let na = 0
updates.forEach(function (v, i, a) {
  console.log(i, v * 2)
  na += v * 2
  if (v % 2 == 0) {
    console.log('even of value: ' + v)
  }
})
console.log('toal: ' + na)
*/
/*
const arr2 = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7]

let n = 0
for (i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] != 'number') {
    arr2[i] = undefined
  }
  // else {
  //   if (typeof arr2[i] == 'number') {
  //     n++
  //   }
  // }
  if (arr[i] == undefined) {
    n++
  }
}
arr2.length -= n
console.log(arr2)
console.log('songa = ' + n)
*/
// ai logic ta besi kore practice and try korte hbe that so very importants
//const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7]
// count = 0
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length - 1; j++) {
//     if (!arr[j] || typeof arr[j] !== 'number') {
//       arr[j] = arr[j + 1]
//       arr[j + 1] = undefined
//     }
//   }
//   if (arr[i] == undefined) {
//     count++
//   }
// }
// arr.length -= count
// console.log(arr) // [1, 2, 3, 4, 5, 6, 7];
// const fillArr = arr.filter((v) => typeof v == 'number')
// console.log(fillArr)
// const a = arr.filter((v) => typeof v == 'number')
// console.log(a)
/*

const numbers = [1, 2, 3, 4, false, 'a', NaN, 5, 6]
const filteredArr = numbers.filter((v) => v).map((v) => v.toString())
console.log(filteredArr)

const result = numbers.reduce((acc, cur, i) => {
  if (i === 0) {
    acc += '['
  }
  if (cur) {
    acc += cur.toString() + (i < numbers.length - 1 ? ', ' : ' ')
  }
  if (i == numbers.length - 1) {
    acc += ']'
  }
  return acc
}, ' ')
console.log(result)

let index = 0
function next() {
  console.log(numbers[index++])
}
next()
next()
next()
next()
next()
next()
next()
next()
next()


*/
// Array learn of junayed site
/*
let nam = [
  'jabir',
  'makia',
  'bal',
  'king',
  'fuck',
  'sexy',
  'fuck off',
  'korean',
  'mallu',
]

for (i = 0; i < nam.length; i++) {
  console.log('Name: ' + nam[i].toUpperCase())
}
console.log(nam)
nam[4] = 'fucking'
nam[9] = 'check your pet'
console.log(nam[4])
console.log(nam[9])
console.log(nam.length)
// console.log(nam.reverse())
console.log(nam.splice(0, 4))

let arr = [1, 4, 6, 9, 13]
let newArr = arr.splice(4)
console.log(arr)
console.log(newArr)

//Object

const ob = {
  name: 'King',
  age: 22,
  job: 'Frontend Developer',
  office: 'Remote',
  details: function (n) {
    console.log(n + ' Welcome to our coding practice now')
  },
}
ob.atHome = 'Home'
ob.atHome = 'HomeFuck'
ob.job = 'Mern Stack Developer'
console.log(ob)
console.log(ob.job)
console.log(ob.office)
console.log(ob.age)
console.log('king')

// ob.job('Mr. X')
// ob.job('Mr. Jonh')
// ob.job('Miss Sexy')
// ob.job('Miss fuck')
console.log(ob)
for (let rami in ob) {
  console.log(rami)
}

const re = [
  33,
  55,
  2,
  { name: 'Fuck', age: 24, status: 'single', job: 'Learner' },
  'mafia',
  ['king', 'fucking', 'bou'],
]
re[5][2] = 'I will be sex with you dare'
console.log(re)
console.log(re[3].name.toUpperCase())
console.log(re[5])
console.log(re[5][2])

function dak(name, ages) {
  var myAge = 24
  ages(myAge)
  console.log(`I am ${name}.`)
}
function hello(age) {
  console.log(
    `I am ${age} years old . and Can I be attend your office join...?`
  )
}

dak('Mafia', hello)
*/
/*

const person = {
  fname: 'Al',
  lname: 'Jabir',
  age: 19,
  job: 'Developer',
  fullName: function () {
    console.log(`I am ${this.fname} ${this.lname}`)
  },
}
person.fullName()
person.fullName()
person.fullName()
person.fullName()
person.fullName()

const res = Math.floor(Math.random() * 50)
if (res == 9 || res == 15 || res == 20) {
  console.log('This is random match yeahhh ' + res)
}
console.log(res)

let str = 'King Will be Mafia'
let str2 = ' King of Mafia'
let str4 = '  King of Mafia  '
let str3 = str.concat(str2)
console.log(str.slice(5, -2).toUpperCase())
console.log(str.substring(5, 9))
console.log(str.substr(7))
console.log(str.replace('Mafia', 'Fucking'))
console.log(str3)
console.log(str4.trim())
console.log(str4)
let str5 = '98'
console.log(str5.padStart(9, 0))
console.log(str5.padEnd(4, 0))

let str6 = 'jabir'
console.log(str6.charAt(3))
console.log(str6.charCodeAt(3))
let arr = 'Jabir  is so very hard developer'
console.log(arr.indexOf('hard'))
console.log(arr.lastIndexOf('developer'))
// console.log(arr.startWith())
// console.log(arr.endWith())

let arr3 = [9, 8, 7, 4, 3, 1, 'king', 'mafir']
arr3.splice(3, 1, 'Fucking')
arr3[arr3.length] = 'Gangstar'
console.log(arr3.sort())
console.log(arr3.join(' | '))
console.log(arr3.splice(5, 0, 'Fuck', 'sex'))

let arr5 = [9, 8, 7, 4, 3, 1, 'king', 'mafir']

for (i of arr5) {
  console.log(i)
}
for (i in arr5) {
  console.log(i)
}

console.log(arr5.sort())
console.log(arr5.reverse())
let c = 0
arr5.forEach(function (v, i, a) {
  if (typeof v !== 'string') {
    c += v
  }
})
console.log(c)

const d = new Date('1998-09-09').getMonth()

console.log(d)

const dd = new Date()
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thrusday',
  'Friday',
  'Saturday',
]
console.log(days[dd.getDay()].toUpperCase())

const m = new Date()

const mm = [
  'Jan',
  'Fab',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
  'Agu',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
console.log(mm[m.getMonth()].toUpperCase())
console.log(`years == ${new Date().getFullYear()}`)

// console.log(days[dd.getUTCHours()])

console.log(Math.floor(Math.random() * 9) + 1)

// console.log(arr5.delete('king'))


*****/
//How to data search of match
/**
const arr = [4, 9, 2, 10, 44, 29, 18]
const find = 20
let notFound = false
for (i = 0; i < arr.length; i++) {
  if (arr[i] == find) {
    console.log('Data is found')
    notFound = true
    break
  }
}
if (!notFound) {
  console.log('Data is not found')
}


******/
// Function invoked
// const person = {
//   fullName: function () {
//     return `${this.f} ${this.l}`
//   },
// }
// const person1 = {
//   f: 'Al',
//   l: 'Jabir',
// }
// const person2 = {
//   f: 'King',
//   l: 'Mafia',
// }
// console.log(person.fullName.call(person2))
// practice and practice
/*
let str = 'king'
console.log(str[str.length - 1])
console.log(str.charAt(2))
console.log(str.charCodeAt(2))
for (i of str) console.log(i)

var name = 'King'

function one() {
  var s = 'Hey '
  two()
  console.log(s + name)
}
function two() {
  var s2 = 'I am '
  three()
  console.log(s2 + name)
}
function three() {
  var s3 = 'Hello '
  console.log(s3 + name)
}
one()
*/
// String Mathod
// let str = 'My name is Al Jabir '
// str.startsWith('is')
// console.log(str)
// console.log(str.includes('is'))
// console.log(str.includes('Jabir'))
// console.log(str.includes('Al Jabir'))
// console.log(str.includes(' '))
// console.log(str.includes('name'))
// console.log(str.repeat(3))
// console.log(`${str} ${'Developer '.repeat(3)}`)
// learn stack learner
// string compare
// let str = 'K ak'
// let str2 = 'Laj kah'
// console.log(str < str2)
// let c = str.concat(' ', str2)
// console.log(c)
// let d = c.substr(5, 2)
// console.log(d)
// let str5 = 'My name is Khan'
// console.log(str5.slice(3, 7))
// let nam = 'Ami Mafia of king'
// let len = 0
// while (true) {
//   if (nam.charAt(len) == ' ') {
//     break
//   } else {
//     len++
//   }
// }
// let s = nam.length
// console.log(len)
// console.log(s)
//Array with stack learner
/**
let arr = [4, 9, 22, 'mai', 'bob', 'sex', 88, 2]
const a = (arr[3] = 'Fuck')
arr[8] = 'Mafia'
console.log(arr)
console.log(a)
console.log(arr.length)
console.log(arr)

const arr2 = [3, 5, 7, 9, 11, 13, 5, 33]
console.log(arr2)
let count = 0,
  sum = 0
for (i = 0; i < arr2.length; i++) {
  arr2[i] = arr2[i] * 2
  console.log(arr2[i])
  if (arr[i] % 2 == 0) {
    console.log('val ' + arr2[i])
  }
  sum += arr2[i]
  count++
}
console.log(sum)
console.log(count)

const arr3 = [3, 5, 7, 9, 11, 13, 5, 33]
// arr3.unshift(98)
// arr3.splice(0, 1, 98, 1998, 24)
// arr3[3] = null
// arr3.pop()
// arr3.unshift()
// arr3.shift()
console.log(arr3)
*/
// Multi Dimensional Array
/*
const arr = [
  [2, 5, 6, 7, 8, 2],
  [2, 52, 64, 76, 85, 23],
  [2, 22, 55, 88, 33, 54],
]
console.log(arr[1][3])
console.log(arr[2][5])
let sum = 0,
  count = 0
for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    console.log(`Array element ${i} : ${arr[i][j]}`)
    sum += arr[i][j]
    count++
  }
}

console.log(sum)
console.log(count)
*/
// reverse in Array
// const arr = [1, 5, 33, 21, 2, 36, 4, 45, 6, 7]
// for (i = 0; i < arr.length / 2; i++) {
//   var temp = arr[i]
//   arr[i] = arr[arr.length - 1 - i]
//   arr[arr.length - 1 - i] = temp
// }
// console.log(arr)
// const a = arr.sort()
// const b = arr.reverse()
// console.log(arr)
// console.log(a)
// console.log(b)
// console.log(arr.sort())
//Object with Stack learner
// let point = {
//   x: 40,
//   y: 50,
//   z: 98,
// }
// point.xx = 1998
// console.log(point.z)
// console.log(point['x'])
// let show = 'xx'
// console.log(point[show])
// console.log(point)
// point.x = 24
// point.s
// console.log(point)
// console.log(point.s)
// console.log(point)

let obj = {
  a: 24,
  b: 98,
  c: 18,
};
let obj2 = {
  a: '24',
  b: 98,
  c: 18,
};
obj.c = 'sex';
console.log(obj);
// delete obj.b
console.log(obj);
console.log(obj.a == obj2.a);
console.log(typeof obj);

//Object Mathod

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Inner Function
function something(greet, name) {
  function sayHi() {
    console.log(greet, name);
  }
  sayHi();
}
something('2nd', 'Deves');
