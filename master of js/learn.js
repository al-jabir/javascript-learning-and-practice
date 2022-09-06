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
/*
let obj = {
  a: 24,
  b: 98,
  c: 18,
}
let obj2 = {
  a: '24',
  b: 98,
  c: 18,
}
obj.c = 'sex'
console.log(obj)
// delete obj.b
console.log(obj)
console.log(obj.a == obj2.a)
console.log(typeof obj)

//Object Mathod

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


*/

// Inner Function

// function something(greet, name) {
//   function getFirstName() {
//     if (name) {
//       return name.split(' ')[0]
//     }
//   }
//   var msg = greet + ' ' + getFirstName()
//   console.log(msg)
// }
// something('Hi', 'Jack Ma')

// Nested Object

// const obj = {
//   name: 'king',
//   age: 50,
//   job: 'developer',
//   person: {
//     name: 'King',
//     age: 23,
//     job: 'Kill',
//     village: 'Known never',
//     person2: {
//       name: 'Maffia',
//       age: 19,
//       job: 'sex',
//     },
//   },
// }
// obj.person.person2.job = 'Fucking with you'

// console.log(obj.person.person2.job)
// console.log(obj.person.person2)
// console.log(obj)

// console.log('I love you')

// Local Scope

/*
function myCall() {
  let n = 'I will be developer'
  console.log(n)
}

myCall()
myCall()
myCall()
// console.log(n)

let aj = 'I will be Developer'
function globalScope() {
  console.log(`Inside of the value: ${aj}`)
}
globalScope()
console.log(aj)

// nested scope

function myC() {
  console.log('I will be global developer')
  function darLing() {
    console.log('I will be local developer')
  }
  darLing()
}
myC()

function localObj() {
  let obj = {
    name: 'Mafia',
    age: 19,
    job: 'Sex',
  }
  console.log(obj.job)
}
localObj()
// console.log(obj.job)
gobal()
function gobal() {
  let s = {
    name: 'Jarin',
    age: 20,
    job: 'Student',
  }
  function pesa() {
    console.log(s.name)
  }
  console.log(s.job)
  pesa()
}
// console.log(s)
// gobal()
*/

// function parent() {
//   let x = 19
//   return function () {
//     let y = 1000
//     console.log(x + y)
//   }
// }
// parent()()

// function ma(a) {
//   return function (b) {
//     let s = a * b
//     console.log(s)
//   }
// }
// ma(9)(9)

//IIFE

// (function myDate() {
//   console.log('I will be Web Developer');
// })(); // iife called function

// let sum = (function call() {
//   let s = 80 + 18;
//   console.log(s);
// })();

// const fast = (function dear() {
//   const as = {
//     name: 'king',
//     age: 19,
//     job: 'Developer',
//   };
//   return as;
// })();
// console.log(fast);
// const fasting = (function kal() {
//   return fast.job;
// })();
// console.log(fasting);

// JS error

// try {
//   let x = 'How to become web developer';
//   console.log(x);
// } catch (e) {
//   err.x;
// }

// // hoisted

// x = 'I am Jabir';
// // console.log(x);
// var x;
// console.log(x);

//Classes

// class Trust {
//   constructor(f, l) {
//     (this.f = f), (this.l = l);
//   }
// }

// let res = new Trust('Al ', 'Jabir');
// console.log(res.f + res.l);
// console.log(typeof Trust);

// const add = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// function heyCall() {
//   this.name = 'Jabir';
// }
// heyCall();
// console.log(name);

// const si = {
//   name: 'king',
//   age: 19,
//   person: {
//     name: 'mafia',
//     age: 24,
//     check: function () {
//       console.log(this.age);
//     },
//   },
// };
// si.age = 20;
// si.person.check.call(si);
// console.log(Object.values(si.person));

// const myCostumObj = {
//   name: 'Mafia',
//   age: 22,
//   job: 'Learning of code',
//   localObj: {
//     name: 'King',
//     age: 19,
//     job: 'Hackers',
//     localHost: {
//       name: 'Queen',
//       age: 20,
//       job: 'Backend Developer',
//       checks: function () {
//         console.log(
//           `My name is ${this.name}. I am ${this.age} years old. I am ${this.job} of career for money earn`
//         );
//       },
//     },
//   },
// };
// myCostumObj.localObj.localHost.checks.call(myCostumObj.localObj);

// const karimg = {
//   name: 'Abdur Rahman',
//   dob: 1998,
//   check: function (year) {
//     console.log(`My name is ${this.name}. I am ${year - this.dob} years old`);
//   },
// };

// const mafia = {
//   name: 'Mafia Khan',
//   dob: 2003,
// };
// const mafia3 = {
//   name: 'Emma Knight',
//   dob: 2004,
// };
// const darLing = {
//   name: 'Jarin Abdullah',
//   dob: 2002,
// };

// karimg.check(2022);

// karimg.check.call(mafia, 2022);
// karimg.check.call(mafia3, 2022);
// karimg.check.call(darLing, 2022);

// myCostumObj.localObj.localHost.checks.apply(myCostumObj);

// const sadia = {
//   name: 'Priyanka',
//   age: 23,
//   job: 'Gym',
//   person: {
//     name: 'Moniya',
//     age: 19,
//     job: 'Tiktoker',
//     show: function () {
//       console.log(`I am ${this.name}. I am ${this.job}`);
//     },
//   },
// };
// sadia.person.show.apply(sadia);

// const tiktok = {
//   name: 'Balsal',
//   dob: 1998,
//   ageShow: function (year, text) {
//     console.log(
//       `${text} ${this.name} and Are you ${year - this.dob} years old`
//     );
//   },
// };
// tiktok.ageShow(2022, 'Hello dear,');

// const karim = {
//   name: 'Karmi',
//   dob: 2003,
// };

// tiktok.ageShow.apply(karim, [2021, 'Mr.']);
// tiktok.ageShow.apply(karim, [2018, 'Hello World!']);

// var karims = {
//   name: 'Karim Rahman',
//   dob: 1996,
//   age: function (currentYear, msg) {
//     console.log(
//       msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old!'
//     );
//   },
// };
// var rahim = {
//   name: 'Rahim Abdu',
//   dob: 2004,
// };
// karims.age(2018, 'Hello World!');

// const my = myCostumObj.localObj.localHost.checks.bind(
//   myCostumObj.localObj.localHost
// );
// my();
// console.log(my);
// var myCustomObj = {
//   name: 'Zonayed Ahmed',
//   age: 21,
//   job: 'Student',
//   anotherObj: {
//     name: 'Ahmed Zonayed',
//     value: function () {
//       console.log('My name is ' + this.name);
//     },
//   },
// };

// myCustomObj.anotherObj.value.bind(myCustomObj);

// call of bind mathod

// const person = {
//   name: 'Emaily',
//   dob: 2000,
//   person2: {
//     name: 'king',
//     dob: 2003,
//   },
//   checkOfAge: function (year, say) {
//     console.log(`${say} ${this.name} ${year - this.dob} Years old`);
//   },
// };

// const checkOf = person.checkOfAge.bind(person.person2);
// checkOf(2022, 'Hi');
// checkOf(2019, 'Good Morning');
// checkOf(2021, 'Good Evening');
// checkOf(2018, 'Darling');

// const rahim = {
//   name: 'Rahim Rahman',
//   dob: 2005,
// };
// const rahimAge = person.checkOfAge.bind(rahim, 2022);
// rahimAge('Mr. X');

// const person = {
//   name: 'Al Jabir',
//   age: 19,
//   timer: function () {
//     setTimeout(
//       function () {
//         console.log(`My name is ${this.name}`);
//       }.bind(person),
//       1000
//     );
//   },
// };
// // const v = person.timer.bind();
// // v(person);
// person.timer();

// const person1 = {
//   name: 'Mafia khan',
//   age: 23,
//   timer2: function () {
//     setTimeout(
//       function () {
//         console.log(`I am ${this.name}`);
//       }.call(person1),
//       3000
//     );
//   },
// };

// const person2 = {
//   name: 'King of Mafia',
//   age: 'unknown',
//   timer3: function () {
//     setTimeout(
//       function () {
//         console.log(`I am ${this.name}.`);
//       }.apply(person2),
//       2000
//     );
//   },
// };
// person1.timer2();
// person2.timer3();

// const myOb = {
//   name: 'King',
//   check: {
//     name: 'mafia',
//     c: {
//       name: 'Knight',
//       show: function (say) {
//         console.log(`${say} My name is ${this.name}`);
//       },
//     },
//   },
// };
// const a = myOb.check.c.show.bind(myOb.check.c);
// a('Dare');
// a('Darling');
// a('Food Mornig');
// a('Sexy');
// a('Fuck off');

//OOP

// var as = {
//   a: 50,
//   b: 40,
// };
// console.log(`a value of : ${as.a} and b value of: ${as.b}`);
// function calls(x) {
//   console.log(`inside a value of ${x.a} and b value of : ${x.b}`);
//   var test = x.a; // 50
//   x.a += x.b;
//   x.b = test; //90
//   console.log(`inside test ${x.a} and ${x.b}`);
// }
// calls(as);
// console.log(`a value of : ${as.a} and b value of: ${as.b}`);

// const arr = [4, 3, 2, 6, 7, 1];
// // arr.sort();
// console.log(arr);
// arr.push(98);
// console.log(arr);
// // arr.reverse();
// console.log(arr);
// console.dir(arr);
// // arr.slice(3);
// // arr.split(' ,');
// console.log(arr);
// console.log(arr);
// arr.splice(3, 0, 1998, 2002, 2004);
// console.log(arr);
// console.dir({});
// console.dir(arr);
// // arr.join('|');
// console.log(arr);

// let str = 'My name is Al Jabir';
// console.dir(str);

// let st = new String('King will be Mafia');
// st.bold();
// console.log(st);
// console.dir(st);

// function f(far) {
//   console.log((5 / 9) * (f - 32));
// }
// f(30);
// function temp(f) {
//   let cel = f * (5 / 9) + 32;
//   console.log(cel);
// }
// temp(22);
// temp(75);
// for (i = 1; i <= 50; i++) {
//   if (i % 2 != 0) {
//     continue;
//   }
//   console.log(i);
// }

// var arr = [3, 13, 155, 7, 9, 11];
// arr.shift(); // lfirst element remove
// console.log(arr);
// arr.unshift(1998); // first element add of array data
// arr.pop(); // last element remove
// console.log(arr);
// arr.push(99); // last element add of value
// console.log(arr);
// arr.length;
// console.log(arr);

// arr.splice(4, 0, 200, 2003, 19);
// console.log(arr);
// arr.splice(6, 2);
// console.log(arr);
// var s = arr.slice(2, 5);
// console.log(s);
// var sa = arr.sort();
// console.log(sa);
// console.log(arr.sort());

// const arr = ['king', 'mafia', 'jaring', 'bonna', 'cat', 'ab'];
// // console.log(arr.sort());
// arr.sort();
// console.log(arr);

// var arr = [3, 13, 155, 7, 9, 11];
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);
// console.log(arr(Math.max()));
// var s = Math.max(arr);
// console.log(s);
// function Person(name, age, cgpa, lang) {
//   this.name = name;
//   this.age = age;
// }
// const res = new Person('King', 34);
// const res2 = new Person('Maria', 34);
// const res3 = new Person('Sarah', 34);
// const res4 = new Person('Knight', 34);
// const res5 = new Person('Mafia', 34);
// console.log(res.name);
// console.log(res2.name);
// console.log(res3.name);
// console.log(res4.name);
// console.log(res5.name);

// const mx = Math.max(3, 6, 7, 3, 2);
// console.log(mx);

// let won = 0;
// let loss = 0;
// for (i = 1; i <= 5; i++) {
//   let geussNum = parseInt(prompt('Enter your type number: '));
//   let randomNum = Math.floor(Math.random() * 10) + 1;
//   if (geussNum == randomNum) {
//     console.log('You are won of the match game!!!!!!!!!!');
//     won++;
//   } else {
//     console.log('Sorry!...You have loss. Random number was ' + randomNum);
//     loss++;
//   }
// }
// console.log(`You have won ${won}`);
// console.log(`You have lost... ${loss}`);

///Error Handling

// try {
//   console.log('I will be developer');
//   console.log(fuck);
// } catch (e) {
//   console.log(e);
// } finally {
//   console.log('When I will sex with you?');
// }

// const num = parseInt(prompt('Enter type number here: '));

// try {
//   if (num <= 5) {
//     throw 'This is number low';
//   } else if (num >= 5) {
//     throw 'This is number high';
//   }
// } catch (err) {
//   console.log(err);
// }

// try {
//   addlert('i will fuck you');
// } catch (err) {
//   console.log(err.message);
//   // console.log(err.name);
//   // console.log(err)
// } finally {
//   console.log('I will fuck you');
// }

// const Person = function (name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// console.log(name);
//};
// new Person('king');
// console.log(typeof Person);

// const res = new Person('Mafia', 19, 'Backend Developer');
// const res2 = new Person('Queen', 18, 'Hackers');
// const res3 = new Person('Darling', 20, 'Self Learner');
// const res4 = new Person('Knight', 30, 'Cricketer');
// const res5 = new Person('Emma', 24, 'Frontend Developer');
// const res6 = new Person('Jackson', 26, 'Software Engineer');
// console.log(res);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
// console.log(res6);

// console.log(res.name, res.age);
// console.log(res2.name, res2.age);
// console.log(res3.name, res3.age);
// console.log(res4.name, res4.age);
// console.log(res5.name, res5.age);
// console.log(res6.name, res6.age);

// const Personwitmethod = function (name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.dateOfBirth = function () {
//     console.log(
//       this.name +
//         ' was born in ' +
//         (2022 - this.age) +
//         '. I am still ' +
//         this.job
//     );
//   };
// };

// const result = new Personwitmethod('Jabir', 24, 'Learning');
// result.dateOfBirth();

// function stringReverese(str) {
//   return str.split(' ').reverse().join(' ');
// }

// console.log(stringReverese('Al Jabir'));

// const PersonChild = function (name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// };
// const CheckPerson = function (name, age, job, village) {
//   PersonChild.call(this, name, age, job);
//   this.village = village;
// };

// const showing = new CheckPerson('Knight', 30, 'Cricketer', 'Nagbari, Madhupur');

// console.log(showing.name);
// console.log(showing.age);
// console.log(showing.job);
// console.log(showing.village);
// // console.log(showing.name)

// PersonChild.prototype.dOb = function () {
//   console.log(
//     `${this.name} was birth in ${2022 - this.age} He/she is ${this.job}`
//   );
// };

// const check = new PersonChild('Mafia', 18, 'Student');
// check.dOb();

// PersonChild.prototype.address = 'Nagbari';
// console.log(check.address);
// // console.log(check.dOb());

// // var PersonOnly = function (name, age, job) {
// //   this.name = name;
// //   this.age = age;
// //   this.job = job;
// // };

// // PersonOnly.prototype.dateOfBirth = function () {
// //   console.log(
// //     this.name + ' born in ' + (2018 - this.age) + ' he will be ' + this.job
// //   );
// // };
// // var res = new PersonOnly('Mafia', 19, 'Fighting');
// // res.dateOfBirth();

// var PersonChilds = function (n, a, j) {
//   this.n;
// };

// const GeneralPeople = function (name, job, country) {
//   this.name = name;
//   this.job = job;
//   this.country = country;
// };

// const PlayerPeople = function (name, job, country, single) {
//   GeneralPeople.call(this, name, job, country);
//   this.single = 'Never';
// };

// const showResult = new PlayerPeople('Ozil', 'Footballer', 'Turkey');
// // showResult();
// console.log(showResult.country);

// const BirthCheck = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.check = function (year) {
//     console.log(`${this.name} and birth year ${year - this.age}`);
//   };
// };
// const res = new BirthCheck('King', 20);
// res.check(2022);

// res.full = function () {
//   return `${this.name} and ${this.age} years old`;
// };
// console.log(res.full());

// const arr = [4, 5, 63, 22, 55];
// const r = Array.isArray(arr);
// console.log(r);
// const s = arr.keys();
// console.log(s);

/***** Learn ES6 *****/

// const check(){
//   if(true){
//     const a = 33
//     console.log(a)
//   }

// }
// check()

// const amer = (function (n) {
//   console.log('I will be Mafia of Hacker' + this.n);
// })();
// {
//   var ss = function () {
//     console.log('How to become developer');
//   };
// }
// ss();

//Arrow function

// const func = () => {
//   console.log('I will be kill you');
// };
// func();
// const test = () => console.log('I want to be developer'.toUpperCase());
// test();

//Normal function

// const arr = [1998, 2000, 2005, 2003];
// const army = arr.map(function (dob) {
//   console.log(2022 - dob);
// });

//Arrow function

// const cc = arr.map((dob, i) => `index : ${i} and value of : ${2022 - dob}`);
// console.log(cc);

// const as = arr.map((dob) => {
//   const si = 2022 - dob;
//   return si;
// });
// console.log(as[2]);

// myCall();

// function myCall() {
//   console.log('When I will be developer');
// }

// myC();

// const myc = () => {
//   console.log('I will be Mafia');
// };

// const s = {
//   mycheck: function () {
//     console.log(this);
//     return function () {
//       console.log(this);
//     };
//   },
// };

// s.mycheck()();

// const s = {
//   myCheck: function () {
//     console.log(this);
//     return () => {
//       console.log(this);
//     };
//   },
// };
// s.myCheck()();

// const check = ((n) => {
//   console.log(n + ' will be good Men insha-Allah');
// })('Jabir');

// Destructuring

// es6

// const check = [
//   'Jabir',
//   33,
//   'student',
//   'Frontend',
//   'Nodejs',
//   'mafia',
//   1998,
//   2004,
//   2002,
// ];
// const [name, age, job, dob] = check;
// console.log([name]);

// const myO = {
//   cost: {
//     c: {
//       my: 'I will be Frontend Developer',
//       cse: {
//         name: 'Jabir',
//         title: 'JavaScript',
//       },
//     },
//   },
// };

// const {
//   cost: {
//     c: {
//       my,
//       cse: { name, title },
//     },
//   },
// } = myO;
// console.log(my, title);

// const myS = {
//   name: 'king',
//   age: 24,
//   job: 'Mern Stack Developer',
//   s: 'Remote',
//   salary: '20K',
// };

// const { name, age, job, s, salary } = myS;
// console.log(name, job, s, salary);
// console.log(age);

// const zonayed = ['Zonayed Ahmed', 21, 'Student'];

// const [name6, age6, profession6] = zonayed;
// console.log(name6);
// console.log(age6);
// console.log(profession6);

// const arr = [
//   'Mafia',
//   19,
//   'Developer',
//   'Remote',
//   'Japan',
//   'Germany',
//   'UK',
//   true,
// ];
// const [name, age, job, locations, country1, country2, country3, sotto] = arr;
// console.log(country2);
// console.log(sotto);

/****     Spred Operations   ****/

// const arr = [2, 5, 6];

// function cal(a, b, c, d, e, f) {
//   console.log('sum ' + (a + b + c));
// }

// // cal.apply(null, arr);
// cal(...arr);

// var arrOne6 = [10, 1, 2, 3, 4];
// var arrTwo6 = [5, 6, 7, 8, 9];
// arrOne6 = [...arrOne6, ...arrTwo6];
// console.log(arrOne6);

// let arr4 = [30, 29, 18, 44];
// let arr5 = [44, 33, 22, 11];
// arr4 = [...arr4, ...arr5];
// console.log(arr4);
// let sum = 0;
// let s = 0;
// arr4.forEach(function (val, i) {
//   sum += arr4[i];
// });
// console.log(sum);
// arr5.forEach((i) => {
//   sum += i;
// });
// console.log(sum);
// arr4.forEach((i) => {
//   s += i;
// });
// console.log(s);

// let arr = [2, 3, 4, 5, 6, 2, 7, 8];
// let arr2 = [49, 30, 28, 19, 37];
// let arr3 = [11, 55, 33, 22, 89, 43];
// let arr4 = [44, 68, 37, 20, 28, 87];
// arr = [...arr, ...arr2, ...arr3, ...arr4];
// console.log(arr);
// console.log(arr, arr2, arr3, arr4);

//rest operations

// function myRest() {
//   const ses = Array.prototype.slice.call(arguments);
//   ses.map(function (si) {
//     console.log('Passed ' + si);
//   });
// }

// myRest('king', 'mafia', 'fucking', 'balsal', 'choding');

// const res = (name, age, job, ...any) => {
//   console.log(
//     `My name is ${name} and I am ${age} years old. I will be ${job} developer at remote`
//   );
//   any.map((any) => console.log(`There passed away : ${any}.`));
// };
// res(
//   'Al Jabir',
//   19,
//   'Frontend',
//   'Japan',
//   'I need money',
//   'How can I get earn money?'
// );
// res('Knight', 20, 'Software', 'British', 'Sexy', 'So funny');

// Default parameter

// const res = (name = 'Jabir', age = 19) => {
//   console.log(`I am ${name} and ${age} years old`);
// };

// res('Jarin', 18);
// res('Jarin', 18);
// res();
// res('Jarin', 18);

// let str = 'jabir';
// let str2 = 'Jabir';
// let check = str !== str2;
// console.log(check);

// Map

// const hack = new Map();
// hack.set('Name', 'Abdullah');
// hack.get('Name');
// console.log(hack.get('Name'));
// const fuck = new Map();
// fuck.set('Name', 'Jarin');
// fuck.set('Age', 20);
// fuck.set('Job', 'Frontend Developer');
// fuck.set('Country', 'UK');
// fuck.set('Sexy', 'Korean/Indian');
// fuck.delete('Sexy');
// fuck.get('Sexy');
// console.log(fuck.get('Job'));
// console.log(fuck);
// console.log(fuck.size);

// fuck.forEach((v, i) => {
//   console.log(`index of ${i} and value of ${v}`);
// });

// Normal Contructor

// const Hack = function (name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// };

// const check = new Hack('Jabir', 19, 'Frontend learning');
// console.log(check.name);
// console.log(check);

// Hack.prototype.personName = function () {
//   console.log(`${this.name} and ${this.job}`);
// };
// check.personName();

//Class

// class Person {
//   constructor(name, job, country) {
//     this.name = name;
//     this.job = job;
//     this.country = country;
//   }
//   check() {
//     console.log(
//       `I am ${this.name} and I am ${this.job} at  remote job in ${this.country}`
//     );
//   }
// }

// const text = new Person('Jabir', 'Junior Developer', 'Germany');
// text.check();

// console.log(text.job, text.country);

// const mafia = class {
//   constructor(name, job, location) {
//     this.name = name;
//     this.job = job;
//     this.location = location;
//   }
//   findMatch() {
//     console.log(
//       `Her name is ${this.name} and He is a ${this.job} men and He live in ${this.location} for career`
//     );
//   }
// };

// const checking = new mafia('Jonh', 'Fighter', 'Munich');
// const checking2 = new mafia('Knight', 'Hacker', 'Pakistan');
// const checking3 = new mafia('Sadia', 'Thif', 'Sylhet');
// const checking4 = new mafia('Jonh', 'Fighter', 'Munich');
// checking.findMatch();
// checking2.findMatch();
// checking3.findMatch();
// checking4.findMatch();

// Class and inheritancs

// class Person {
//   constructor(name, job, age, test) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.test = () => {
//       console.log(
//         `My name is ${this.name}. I am ${this.age} years old and I am a ${this.job}`
//       );
//     };
//   }
// }

// class NewSub extends Person {
//   constructor(name, age, job, sub, loaction) {
//     super(name, age, job);
//     this.sub = sub;
//     this.loaction = loaction;
//   }
// }

// const c = new Person('King', 'Teacher', 30, 'cecking');
// c.test();
// // console.log(c);

// const s = new NewSub('Emma', 20, 'Developer', 'CSE', 'Mombay');
// s.test();

// function

// function discount(food, tip) {
//   tipPer = tip / 100;
//   tipA = food * tipPer;
//   total = food + tipA;
//   console.log(total);
// }
// discount(100, 20);

// function disC(price, dis) {
//   const tipP = dis / 100;
//   const Am = price * tipP;
//   const totals = price + Am;
//   console.log(totals);
// }
// disC(300, 20);

// function capiLization(text) {
//   return text[0].toUpperCase() + text.substring(1).toLowerCase();
// }
// console.log(capiLization('kiNaf Khan'));
// console.log(capiLization('saRaH Khan'));
// console.log(capiLization('abduLLah Khan'));
// console.log(capiLization('jaKine'));

// function str(text) {
//   return text[0].toUpperCase() + text.substring(1).toLowerCase();
// }
// console.log(str('fack'));

// const test = 'king is back';
// console.log(test[0].toUpperCase() + test.substring(1).toLowerCase());
// let text = 'How are you doing today?';
// console.log(text.split('o'));
// let str = 'king will be mafia';
// console.log(str.replace('will', 'want to'));
// console.log(str.search(''));
// const s = str.substr(5);
// const s2 = str.split(' ');
// console.log(s);
// console.log(s2);

// function text(t) {
//   return t[0].toUpperCase() + t.substr(1).toLowerCase();
// }
// console.log(text('jabir Is a Mafia'));
// const s3 = str.substring(5, 9);
// console.log(s3);
// const s4 = str.slice(2, 9);
// console.log(s4);
// const str = prompt('Enter your name: ');
// const s = str.split(' ')[0];
// console.log('Mr. ' + s);

// console.log(Date.now());

// const d = new Date();
// console.log(d.getTime());

/*****
 *
 *Learn String Method
 *
 ******/

// let str = 'I will be Frontend Developer.';
// let s = str.indexOf('will');
// let s2 = str.indexOf('e', 16);
// s = str.lastIndexOf('r');

// console.log(s);

// console.log(s2);

// defining a string
// var str = 'Programming is good';

// var substr = 'd';

// find last occurrence of "g" in str
// var result = str.lastIndexOf('r');

// console.log(result);

// Output: 15

// defining a string

// let str = 'I love coding. code will be good output';

//some string match true or false

// let s = str.startsWith('Il');
// let s = str.endsWith('out');

// console.log(s);

// String padStart()

// let string1 = 'PROGRAMMING';

// let padString = string1.padStart(15, '#');

// console.log(padString);

// string definition
// let string = 'CODE';

// let paddedString = string.padStart(10, '@');

// console.log(paddedString);

// let str = 'KING';

// let padStr = str.padStart(9, '*');
// padStr = str.padEnd(8, '!');

// console.log(padStr);

/**
 * JavaScript String codePointAt()
 */

// let msg = 'I will be Frontend Developer.';

// let c = msg.codePointAt(0);

// console.log(c);

/**
 * Array splite
 */

// let arr = [
//   'king',
//   44,
//   'coding',
//   'Programing is best',
//   'still hard is coding',
//   24,
//   18,
// ];

// let s = arr.splice(3, 2);
// console.log(s);

/***********
 *
 * Mission Advanced with JS
 *
 *********/

/***********
 *
 * first class and higher order function
 *
 *********/

// function dakdeh(name) {
//   console.log(`Are you mr. ${name}`);

//   return function person(e) {
//     console.log(`Your have a ${e} and mr. ${name}`);
//   };
// }

// dakdeh('Jabir')('Skills');

// function callMyName(name, cb) {
//   var age = 24;

//   cb(age);
//   console.log('Is it interesting? Yes it is Mr.' + name);
// }

// function myAge(age) {
//   console.log('I am ' + age + ' Years old.');
// }

// callMyName('Mafia', myAge);

// function person(name, cb) {
//   let check = 'I have something problem fixed';
//   cb(check);
//   console.log(`Your name is ${name}`);
// }
// function fixProblem(fix) {
//   console.log(`hey, ${fix}`);
// }

// person('Jacking', fixProblem);

// // expration function

// let check = function (dev) {
//   console.log(`I will be ${dev} developer.`);
// };

// let skills = check;
// skills('Frontend');
// skills('Backend');
// skills('software developer');
// skills('Mern Stack');

// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i] * 2);
// }

// let itemPush = [];
// let s = 0;
// items.map((i) => {
//   return itemPush.push([i] * 3);
//   // return (s += i);
// });

// console.log(itemPush);

/***********
 *
 * নিত্যদিনের জাভাস্ক্রিপ্টঃ map(), filter() ও reduce()
 *
 *********/

// let item = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = item.map((i) => {
//   return i % 2 === 0;
// });
// console.log(res);

// let double = item.map((i) => i * i);

// console.log(double);

// find some event and odd number

// let findEvent = item.filter((i) => i % 2 === 0);

// let eventSum = 0;
// let oddSum = 0;
// let findOdd = item.filter((i) => i % 2 !== 0);
// let findOdd2 = item.filter((i) => {
//   if (i % 2 !== 0) {
//     oddSum += i;
//   }
//   return oddSum;
// });

// let findEvent2 = item.filter((i) => {
//   if (i % 2 === 0) {
//     eventSum += i;
//   }
//   return eventSum;
// });

// console.log(findEvent);
// console.log(findOdd);
// console.log(oddSum);
// console.log(eventSum);

// total sum

// console.log(oddSum + eventSum);

//reduce method of total mutiple sum

// let multiple = item.reduce((v, i) => {
//   return (v *= i);
// }, 1);

// console.log(multiple);

//object

// let person12 = {
//   name: 'king',
//   age: 18,
//   job: 'Frontend Developer',
//   location: 'UK',
// };

// let myObj = item.map((v) => {
//   console.log(this);
// }, person12);

/***********
 *
 * নিত্যদিনের জাভাস্ক্রিপ্টঃ some(), every()
 *
 *
 *********/
// let findInx = item.some((v) => {
//   console.log(`value of ${v}: `);
//   return v === 5;
// });

// console.log(findInx);

// const objSome = [
//   {
//     name: 'Zawad Ahmed',
//     age: 1,
//     job: 'Child',
//   },
//   {
//     name: 'Zobayer Ahmed',
//     age: 31,
//     job: 'Pharmacists',
//   },
//   {
//     name: 'Zonayed Ahmed',
//     age: 21,
//     job: 'Student',
//   },
// ];

// objSome.some((v) => {
//   console.log(`objSome value of ${v.job}`);
//   return v === 3;
// });
// let resing = objSome.some((obj) => obj.age === 31);
// console.log(resing);

// every method

// const arrEvery = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// let evr = arrEvery.every((v) => v === 1);

// console.log(evr);

//Object of loop

// var obj = {
//   Bangladesh: 'Dhaka',
//   India: 'Delhi',
//   Nepal: 'Kathmandu',
//   Afganistan: 'Kabul',
//   Thailand: 'Bangkok',
// };

// for (objs in obj) {
//   console.log(obj[objs]);
//   console.log(obj[objs]);
// }
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));

// Object.values(obj).map((city) => {
//   console.log(`The city name is ${city}`);
// });

// Object.keys(obj).map((country) =>
//   console.log(`The name is ${country} of city name is ${obj[country]}`)
// );

/***********
 *
 *  এরর হ্যান্ডলিং (Error Handling)
 *
 *********/

// try {
//   console.aula('This is an error');
// } catch (err) {
//   console.log(err);
// }

// const age = 17;

// try {
//   if (age < 18) {
//     throw `You are too young men`;
//   } else {
//     console.log(`You are adult men`);
//   }
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log('I also always runing code..');
// }

// error constdructions

// let checkError = new Error('I always error run...');
// console.log(checkError);

// let n = 10;

// if (n > 5) {
//   throw new Error('N is greater than 10');
// }

// let maxN = 2.7976931348623157e608;
// try {
//   if (maxN > Number.MAX_VALUE) {
//     throw new Error('This is number too long.');
//   }
// } catch (err) {
//   console.log(err);
// }

// function changeToInt(v) {
//   let res = Number.parseInt(v);
//   if (!res) {
//     return `please provide a value which is able to convert in Integer`;
//   }
//   return res;
// }
// let resError = changeToInt('ajalkhfda345.64jkahkfdha');
// console.log(resError);
// let resError2 = changeToInt('345jhaklfh');
// console.log(resError2);

// function makeWord(text) {
//   try {
//     let str = text.trim();
//     let res = str.split(' ');
//     return res;
//   } catch (e) {
//     console.log(`please provide valid text...`);
//   }
// }
// console.log(makeWord('kai'));
// let ss = makeWord(84);
// console.log(ss);

// try {
//   console.log('I am Jabir');
//   throw new Error(`Who Am I?`);
//   console.log('King will be mafia');
// } catch (e) {
//   console.log(e.message);
// } finally {
//   console.log('I always run code');
// }

// try {
//   throw `that is code error`;
// } catch {
//   console.log('provide');
// } finally {
//   console.log('please provide error solutions');
// }

// function higherOrder(name, callback) {
//   var age = 19;
//   callback(age);
//   console.log(`my name is ${name}`);
// }

// function myAge(age) {
//   console.log(`I am ${age} years old`);
// }

/***********
 *
 *  Asynchronous
 *
 *********/

// function getCheck() {
//   var x;
//   setTimeout(() => {
//     x = 98;
//   }, 3300);
//   return x;
// }

// let aYsn = getCheck();
// console.log('I will be ' + aYsn);
// var x;
// setTimeout(() => {
//   x = 98;
// }, 3000);

// console.log(`value of ${x}`);

// var value;
// setTimeout(function () {
//   value = 12;
// }, 3000);
// console.log('The value is: ' + value);

/***********
 *
 *  CallBack function
 *
 *********/

// const getCall = () => {
//   setTimeout(() => {
//     console.log(`A function show some time`);
//   }, 3000);
// };
// const someThing = () => {
//   console.log(`I will be check now`);
// };
// getCall();
// someThing();

// const getCallC = (cb) => {
//   setTimeout(() => {
//     console.log(`What are you doing now?`);
//     cb();
//   }, 4000);
// };
// const someThingC = () => {
//   console.log(`I will find job for my career`);
// };
// getCallC(someThingC);

// getSomeData('https://aremoteserver.com', (userInfo) => {
//   console.log(userInfo);
// });

// const userInfo = getSomeData('https://aremoteserver.com');
// console.log(userInfo);

// const myCall = (cb) => {
//   setTimeout(() => {
//     console.log(`I will be wait for you.`);
//     cb();
//   }, 2000);
// };

// const onCall = () => {
//   console.log(`When will you be wait for me?`);
// };

// myCall(onCall);

/***********
 *
 *  promise
 *
 *********/

// const newPromise = (control) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (control) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2500);
//   });
// };
// console.log(newPromise(true));
// console.log(newPromise(false));

// newPromise(true).then(() => {
//   console.log('I will be check');
// });

// newPromise(false)
//   .then(() => {
//     console.log('I will be check');
//   })
//   .catch(() => {
//     console.log(`I can't successful`);
//   });

// const promiseWithData = (control) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (control) {
//         resolve('Data will be success');
//       } else {
//         reject('Data not will be successfully.');
//       }
//     }, 3000);
//   });
// };

// promiseWithData(false)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve('Data is success');
//     } else {
//       reject('data is not success');
//     }
//   }, 5000);
// });

// const newPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve('Data is success 2');
//     } else {
//       reject('data is not success 2');
//     }
//   }, 3000);
// });

// Promise.all([newPromise, newPromise2]).then((dataArr) => {
//   console.log(dataArr);
// });

//without console.log

// const newConnect = (test) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (test) {
//         resolve(`I will be test something`);
//       } else {
//         reject(`I can't something test`);
//       }
//     }, 3000);
//   });
// };

// newConnect(false)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((fail) => {
//     console.log(fail);
//   });

// const newConnect = (test) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (test) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// };

// newConnect(false)
//   .then(() => {
//     console.log(`I will be test something`);
//   })
//   .catch(() => {
//     console.log(`Never test something`);
//   });

/***********
 *
 *  promise and fetch api
 *
 *********/

// const dataApiSuccess = fetch('https://jsonplaceholder.typicode.com/posts');

// console.log(dataApiSuccess);

// dataApiSuccess.then((data) => {
//   console.log(data);
// });

//unscceess data of api

// const dataApiFailed = fetch(
//   'https://jsonplaceholderdoesntexist.typicode.com/posts'
// );

// console.log(dataApiFailed);

// dataApiFailed
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('Your Error:', err);
//   });

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((data) => {
//     return data.json();
//   })
//   .then((posts) => {
//     console.log(posts);
//   });

// const newCheck = (control) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (control) {
//         resolve(`I will be checking now`);
//       } else {
//         reject(`I can't find for your personal post`);
//       }
//     }, 3000);
//   });
// };

// newCheck(false)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const newPerson1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve('check');
//     } else {
//       reject('not check');
//     }
//   }, 2000);
// });

// const newPerson2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve('check will be find');
//     } else {
//       reject('not check anywhere');
//     }
//   }, 1000);
// });

// Promise.all([newPerson1, newPerson2])
//   .then((datas) => {
//     console.log(datas);
//   })
//   .catch((err2) => {
//     console.log(err2);
//   });

// fetch api

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((data) => {
//     return data.json();
//   })
//   .then((posts) => {
//     console.log(posts);
//   });

// const apiData = fetch('https://jsonplaceholder.typicode.com/posts');

// console.log(apiData);

// const dataCheck = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve('Print Out');
//     } else {
//       reject('do not print out');
//     }
//   }, 3000);
// });

// console.log(dataCheck);

// const nes = dataCheck;
// console.log(nes);

// try {
//   const data = dataCheck;
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

// const dataFromRemote = fetch('https://jsonplaceholder.typicode.com/posts');

// console.log(dataFromRemote);

// dataFromRemote
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const url = 'https://jsonplaceholder.typicode.com/posts';

// const check = fetch(url);

// check
//   .then((data) => {
//     return data.json();
//   })
//   .catch((posts) => {
//     console.log(posts);
//   });

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((data) => {
//     return data.json();
//   })
//   .then((posts) => {
//     console.log(posts);
//   });

/***********
 *
 *  async and await
 *
 *********/

//normal

//async function asyncCode() {
// Asynchronous Codes
//}

//es6

// const asyncCode6 = async() => {
//   // Asynchronous Codes
// }

// const hasPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve('I will be win for the code');
//     } else {
//       reject('Something is an error');
//     }
//   }, 3000);
// });

// const handlePromise = async () => {
//   const out = await hasPromise;
//   console.log(out);
// };

// handlePromise();

// const rejectWait = new Promise((reject, resolve) => {
//   setTimeout(() => {
//     if (true) {
//       reject('No ! It is an error');
//     } else {
//       resolve('I am here for you');
//     }
//   }, 1000);
// });

// const rejectSec = async () => {
//   try {
//     const d = await rejectWait;
//     console.log(d);
//   } catch (err) {
//     console.log(err);
//   }
// };

// rejectSec();

// const test = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve('i will be handle');
//     } else {
//       reject('i cant handle about that');
//     }
//   }, 2000);
// });

// const res = async () => {
//   const data = await test;
//   console.log(data);
// };

// res();

// const test = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (false) {
//       resolve('i will be handle');
//     } else {
//       reject('i cant handle about that');
//     }
//   }, 2000);
// });

// const res = async () => {
//   try {
//     const data = await test;
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// res();

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve('Promise 1 Resolved');
//     } else {
//       reject('Promise 1 Error');
//     }
//   }, 5000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve('Promise 2 Resolved');
//     } else {
//       reject('Promise 2 Error');
//     }
//   }, 5000);
// });

// const res2 = async () => {
//   const datas = await Promise.all([promise1, promise2]);
//   console.log(datas);
// };

// res2();

// const getMyName = new Promise((resolved) => {
//   resolved('Jabir');
// });

// const getMyAge = (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (name === 'Jabir') {
//         resolve(19);
//       } else {
//         reject('Data not found');
//       }
//     }, 1000);
//   });
// };

// getMyName.then((name) => {
//   getMyAge(name)
//     .then((age) => {
//       console.log(`My name is ${name} and I am ${age} years old.`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// const details = async () => {
//   const name = await getMyName;
//   const age = await getMyAge(name);
//   console.log(`My name is ${name} and I am ${age} years old.`);
// };

// details();

/****
 *
 *
 * Class
 *
 *
 ****/

// const Child = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// const resChild = new Child('Zara', 2022);
// console.log(resChild.name, resChild.age);

// Child.prototype.date = function () {
//   console.log(`My name is ${this.name} and I am ${this.age - 1998} years old`);
// };
// resChild.date();

// class MyDetails {
//   constructor(name, age, job, location) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.location = location;
//   }

//   personCheck() {
//     console.log(
//       `My name is ${this.name}. I am ${this.age} years old. I Will be ${this.job} developer at ${this.location}`
//     );
//   }
// }

// const checks = new MyDetails('Al Jabir', 19, 'Frontend', 'Remote / UK');

// checks.personCheck();
// console.log(checks.job);

// class TeacherClass {
//   constructor(name, age, job, subject) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.subject = subject;
//   }
// }

// class PersonClass {
//   constructor(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }
// }

// class TeacherClass extends PersonClass {
//   constructor(name, age, job, subject) {
//     super(name, age, job, subject);
//     this.subject = subject;
//   }
// }

// const ourSir = new TeacherClass(
//   'Shafiq Sir',
//   46,
//   'Assistant Teacher',
//   'Physics'
// );

// console.log(ourSir.name);
// console.log(ourSir.age);
// console.log(ourSir.job);
// console.log(ourSir.subject);

//test

// var request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// request.send();

// request.onreadystatechange = function handleRequest() {
//   console.log(request.responseText);
// };

// test end

/******************************
      Learn with sumit and হাতেকলমে জাভাস্ক্রিপ্ট
******************************/

// var x = 29;
// var x = 39;

// function myCall() {
//   let x = 19;
//   console.log(x + ' from func');
// }
// myCall();
// console.log(window.x);

//global

// var y = 24;

// function myScope() {
//   //local
//   console.log(y);
// }
// myScope();
// console.log(y);

// var local = 25;

// function myLocal() {
//   local = 33;
//   console.log(`${local} from mylocal()`);
// }
// myLocal();

// function myFunc() {
//   local = 19;
//   console.log(local);
// }
// myFunc();

// console.log(local);

// var data = 'I am global';

// function myCall() {
//   console.log(`I am inside global: ${data}`);
// }
// myCall();

// console.log(data);

// function global() {
//   console.log('I am global function');

//   function local() {
//     console.log(`I am local function`);
//   }
//   global();
// }

// local();

//object scope
// var local = {
//   name: 'link',
//   age: 'Unknown',
//   job: 'Mern stack developer',
// };

// function myObj() {
//   var local = {
//     name: 'link',
//     age: 'Unknown',
//     job: 'frontend developer',
//   };
//   console.log(local);
//   console.log(local.job);
// }
// myObj();

// console.log(local.job);

//Lexical Scoping

// function parentScope() {
//   var a = 19;
//   function childScope() {
//     var b = 5;
//     console.log(`total sum = ${a + b}`);
//   }
//   childScope();
// }
// parentScope();

// function ba() {
//   var x = 35;
//   function ma() {
//     var y = 15;
//     console.log(`total== ${x + y}`);
//   }
//   ma();
// }
// ba();

/******************************
      Closures
******************************/

// var x = 5;

// function myCall() {
//   var y = 9;
//   return function () {
//     var c = 13;
//     return function () {
//       return x + y + c;
//     };
//   };
// }

// var s = myCall()();
// console.log(s());

// console.dir(s);

// function closuresDemo() {
//   var x = 10;
//   return function () {
//     var y = 20;
//     console.log('Sum: ' + (x + y));
//   };
// }

// var aVar = closuresDemo();

// console.log(aVar());

// function bankAccount(bal) {
//   var balance = bal;
//   return function () {
//     return balance;
//   };
// }

// var account = bankAccount(98000);
// console.dir(account);

// var num1 = 5;

// var sum = function () {
//   var num = 98;
//   return function () {
//     return num1 + num;
//   };
// };

// var myc = sum();

// console.dir(myc);

// (function () {
//   var s = 5;
//   var sum = function () {
//     var s2 = 3;
//     return s + s2;
//   };
//   console.dir(sum);
// })();

// var num1 = 2;
// var num2 = 5;

// var sum = function () {
//   return num1 + num2;
// };

// console.log(sum());
// console.dir(sum);

// num1 = 9;
// num2 = 49;

// console.log(sum());

// console.dir(sum);

// (function () {
//   var num1 = 2;
//   var num2 = 5;

//   var sum = function () {
//     return num1 + num2;
//   };

//   console.log(sum());
//   console.dir(sum);

//   num1 = 9;
//   num2 = 49;

//   console.log(sum());

//   console.dir(sum);
// })();

// var num3 = 2;
// var num4 = 5;

// var sum = function () {
//   return num3 + num4;
// };

// // console.log(sum());
// console.dir(sum);

// let num1 = 2;
// let num2 = 5;

// var sum2 = function () {
//   return num1 + num2;
// };

// // console.log(sum());
// console.dir(sum2);

// (function () {
//   let num1 = 2;
//   let num2 = 5;

//   var sum2 = function () {
//     return num1 + num2;
//   };

//   // console.log(sum());
//   console.dir(sum2);
// })();

// function stopwatch() {
//   var startTime = Date.now();

//   function getDelay() {
//     console.log(Date.now() - startTime);
//   }
//   return getDelay;
// }

// var timer = stopwatch();

// // timer();
// timer();
// timer();
// timer();

// console.dir(timer);

// var a;
// function async() {
//   a = 50;
//   var func = () => {
//     console.log(a);
//   };
//   setTimeout(func, 3000);
//   console.dir(func);
// }
// async();
// a = 30;

// function apiFunc(url) {
//   fetch(url).then((res) => {
//     console.log(res);
//   });
// }

// apiFunc('https://jsonplaceholder.typicode.com/todos/1');

// for (var i = 0; i < 5; i++) {
//   const myfunc = () => {
//     console.log(i);
//   };
//   console.log(i);
//   console.dir(myfunc);
//   setTimeout(myfunc, 3000);
// }
// console.log(i);

// function greeting() {
//   let message = 'Hi';

//   function sayHi() {
//     console.log(message);
//   }

//   sayHi();
// }
// var s = greeting();
// console.dir(s);

// var a = 5;

// function my() {
//   var b = 6;
//   return function () {
//     console.log(a);
//   };
// }

// var s = my();
// console.dir(s);

// var num = 5;

// var sum = function () {
//   var num2 = 9;

//   return function () {
//     return num + num2;
//   };
// };
// var s = sum();
// console.dir(s);

// let n = 5;

// let sum = function () {
//   let n2 = 6;
//   return function () {
//     let n3 = 9;
//     return function () {
//       let n4 = 98;
//       return n + n2 + n3 + n4;
//     };
//   };
// };

// let res = sum()();
// console.dir(res);

// (function () {
//   let sum = 5;
//   let sums = () => {
//     let s = 5;
//     return function () {
//       return sum + s;
//     };
//   };
//   console.dir(sums);
// })();

// function bankAccount(bal) {
//   var balance = bal;
//   return function () {
//     return balance;
//   };
// }

// var account = bankAccount(4432);

// console.dir(account);

// let s = 5;

// function my() {
//   let n = 4;
//   return function () {
//     return s;
//   };
// }
// let res = my();
// console.dir(res);

// (function () {
//   var nam = 4;
//   var num4 = 3;
//   var myFunc = function () {
//     return num + num4;
//   };
//   var res = myFunc();
//   console.dir(res);
// })();

// (function () {
//   var num = 4;
//   var num2 = 6;

//   var sex = function () {
//     return num + num2;
//   };
//   console.dir(sex);

//   num = 9;
//   num2 = 59;

//   console.dir(sex);
// })();
// (function () {
//   console.log('King will be mafia');
// })();

// var s = 34;
// function async() {
//   // let s = 5;
//   var res = () => {
//     console.log(s);
//   };
//   setTimeout(res, 3000);
//   console.dir(res);
// }
// async();

/******************************
      hoisting
******************************/

// let LANGUAGE = 'C Programming';
// let language = 'JavaScript';

// function call() {
//   if (!language) {
//     let language = LANGUAGE;
//   }
//   return language;
// }
// console.log(`I love ${call()}`);

/******************************
      prototype
******************************/

// let person = {};

// person.name = 'janos';
// person.age = 19;

// console.log(person);

// person.eat = function () {
//   console.log(`person is eating`);
// };

// person.sleep = function () {
//   console.log(`person is sleeping`);
// };

// person.eat();
// person.sleep();

// const personMethod = {
//   eat() {
//     console.log(`person is eating`);
//   },
//   sleep() {
//     console.log(`person is sleeping`);
//   },
//   play() {
//     console.log(`person is playing`);
//   },
// };

// function Person(name, age) {
//   let person = Object.create(personMethod);

//   person.name = name;
//   person.age = age;

//   return person;
// }
// const sadia = Person('sadia', 19);
// sadia.eat();

// // console.log(mahi);

// const captain = {
//   name: 'Mashrafi',
//   age: 36,
//   country: 'Bangladesh',
// };

// const player = Object.create(captain);

// player.name = 'Sadia';

// console.log(player);

// console.log(captain.age);
// console.log(captain.country);

// function test() {}

// console.dir(test);
// console.log(test.prototype);

// function Person(name, age) {
//   let person = Object.create(Person.prototype);

//   person.name = name;
//   person.age = age;

//   return person;
// }

// Person.prototype = {
//   eat() {
//     console.log(`person is eating`);
//   },
//   sleep() {
//     console.log(`person is sleeping`);
//   },
//   play() {
//     console.log(`${this.name} person is playing ${this.age}`);
//   },
// };

// const sex = Person('Fucking', 19);
// sex.play();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype = {
//   dev() {
//     console.log(`I will be dev`);
//   },
// };

// const sex = new Person('King', 19);
// sex.dev();

// class Person {
//   constructor(name, job) {
//     this.name = name;
//     this.job = job;
//   }
//   skill() {
//     console.log(`I have something skills`);
//   }
//   frontend() {
//     console.log(`I will be ${this.job} frontend developer `);
//   }
// }

// const sex = new Person('Darling', 'Junior');

// sex.frontend();

//prototype

// function MyDetails(name, age, job, village) {
//   let person = Object.create(MyDetails.prototype);
//   person.name = name;
//   person.age = age;
//   person.job = job;
//   person.village = village;
//   return person;
// }

// MyDetails.prototype = {
//   jabir() {
//     console.log(
//       `I am ${this.name}. I am ${this.age} years old. I will be ${this.job} developer. I live in ${this.village}`
//     );
//   },
// };

// const resPerson = new MyDetails('Jabir', 19, 'Frontend', 'Sylhet');
// resPerson.jabir();

// function PersonCheck(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// PersonCheck.prototype = {
//   king() {
//     console.log(
//       `My name is ${this.name} and ${this.age} years old.I want to be ${this.job} developer`
//     );
//   },
// };

// const res = new PersonCheck('Mafia', 24, 'Frontend');
// const res2 = new PersonCheck('sarah', 19, 'Cyber');
// const res3 = new PersonCheck('Knight', 20, 'Mern stack');
// const res4 = new PersonCheck('Jackie', 21, 'Backend');
// res.king();
// res2.king();
// res3.king();
// res4.king();
// // console.dir(res);

// function king() {
//   this.job = `I will be frontend developer.`;
// }

// king();
// console.log(job);

// const myObj = {
//   name: 'king',
//   age: 19,
//   job: 'developer',
//   check: {
//     name: 'fucking',
//     job: 'sexy',
//     resi: {
//       sex: 'male',
//       age: 19,
//       res: function () {
//         console.log(this);
//       },
//     },
//   },
// };

// myObj.check.resi.res();

// var myObj = {
//   name: 'bal',
//   job: 'sex',
//   another: {
//     name: 'fuck',
//     job: 'dating',
//     res: function () {
//       name: 'Ahmed Zonayed',
//         console.log(`My name is ${this.name} and I am ${this.job}`);
//     }.call(myObj),
//   },
// };

// const person = {
//   name: 'King',
//   dob: 1998,
//   check: function (currYear) {
//     console.log(
//       `My name is ${this.name} and I am ${currYear - this.dob} years old.`
//     );
//   },
// };

// const jaker = {
//   name: 'King',
//   dob: 2003,
// };

// person.check(2022);

// person.check.apply(jaker, [2022]);
// person.check.call(jaker, 2019);

// const myPerson = {
//   name: 'king',
//   age: 19,
//   person2: {
//     name: 'mafia',
//     job: 'hacker',
//     person3: {
//       name: 'kally',
//       age: 19,
//       res: function (msg, job, locations, city) {
//         console.log(
//           `${msg}, my name is ${this.name} and I am ${this.age} years old. I will be ${job} developer at ${locations}. I live in ${city} now`
//         );
//       },
//     },
//   },
// };

// const cyber = {
//   name: 'Knight Kaly',
//   age: 21,
// };

// myPerson.person2.person3.res.call(
//   myPerson.person2.person3,
//   'Hey',
//   'Mern Stack',
//   'remote',
//   'sylhet'
// );

// myPerson.person2.person3.res.apply(cyber, [
//   'Hi',
//   'Frontend',
//   'munich',
//   'sylhet',
// ]);

// const person = {
//   name: 'fuck',
//   age: 19,
//   check: function () {
//     setTimeout(
//       function () {
//         console.log(`my name is ${this.name}`);
//       }.bind(person),
//       2000
//     );
//   },
// };

// person.check();

//prototype inherit

// const Person = function (name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// };

// Person.prototype.checks = function () {
//   console.log(
//     `My name is ${this.name} and ${this.age} years old. I will be ${this.job} developer.`
//   );
// };

// // console.log(Person.prototype);
// const res = new Person('javir', 19, 'Mern Stack');
// res.checks();

// var Person = function (name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// };

// var Teacher = function (name, age, job, subject) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.subject = subject;
// };

// var Teacher = function (name, age, job, subject) {
//   Person.call(this, name, age, job);
//   this.subject = subject;
// };

// var kamaljeet = new Teacher('Kamaljeet Saini', 53, 'Teacher', 'CSE');
// console.log(kamaljeet);

// const Person = function (name, job, scl) {
//   this.name = name;
//   this.job = job;
//   this.scl = scl;
// };

// const Res = function (name, job, scl, sub, batch) {
//   Person.call(this, name, job, scl);
//   this.sub = sub;
//   this.batch = batch;
// };

// const res = new Res(
//   'king',
//   'student',
//   'Sylhet engineering collage',
//   'cse',
//   '19-20'
// );

// console.log(res);

// console.dir(res);
/***************
 *
 *
 *     Prototype inheritance
 *
 *
 ***************/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.eat = function () {

  };
}
Person.prototype = {
  eat: function () {
    console.log(`${this.name} is play cricket`);
  },
};

const sarah = new Person('sarah', 21);
sarah.eat();
console.log(sarah);
const knight = new Person('Knight', 19);
console.log(knight);

const f = function Person() {};

console.dir(f);

//*****prototype chain

Object.prototype.jabir = function () {
  console.log(`I am Jabir`);
};

const s = {};

s.jabir();
console.dir(s);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Cricketer(name, age, type, country) {
  Person.call(this, name, age);
  this.type = type;
  this.country = country;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is playing`);
  },
};

Cricketer.prototype = Object.create(Person.prototype);

Cricketer.prototype.constructor = Cricketer;

let sakib = new Cricketer('sakib', 35, 'right-hand', 'bd');
sakib.eat();

//**********prototype inheritance */

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

function Details(name, age, job, locations, level, duty) {
  Person.call(this, name, age, job);
  this.locations = locations;
  this.level = level;
  this.level = level;
  this.duty = duty;
}

const res = new Details('Al Jabir', 40, 'student', 'sylhet', 'senior', 'never');

console.log(res);
console.log(res.job);
console.dir(res);

// no perameter set bye default

function Result(cpa, grade) {
  this.cpa = cpa;
  this.grade = grade;
}

function UpdateRes(cpa, grade, sub, mark) {
  Result.call(this);
  this.sub = sub;
  this.mark = mark;
}

const passing = new UpdateRes(3.5, 'A', 'DSA and Problem solving', '98');
console.log(passing);

var GeneralPeople = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
};

var Athlete = function (name, age, job, prize) {
  GeneralPeople.call(this);
  this.prize = 100;
};

const j = new Athlete('mafia', 21, 'self learner', 'Silver');
console.log(j);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Cricketer(name, age, type, country) {
  Person.call(this, name, age);
  this.type = type;
  this.country = country;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is playing`);
  },
};

Cricketer.prototype = Object.create(Person.prototype);

// // Cricketer.prototype.constructor = Cricketer;
Cricketer.prototype.play = function () {
  console.log(`I will play cricket with ${this.name}`);
};

let sakib = new Cricketer('sakib', 35, 'right-hand', 'bd');

sakib.eat();

let tamin = new Cricketer('knight', 21, 'All-rounder', 'England');
console.log(tamin);
tamin.play();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Check(name, age, job, height, country) {
  Person.call(this, name, age);
  this.job = job;
  this.height = height;
  this.country = country;
  this.res = function () {
    console.log(`hey ${this.name} I will be ${this.job} developer`);
  };
}

const res2 = new Check('Knight', 19, 'frontend', '5.6', 'Bangladesh');

console.log(res2);
console.dir(res2);
res2.res();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Cricketer(name, age, type, country) {
  Person.call(this, name, age);
  this.type = type;
  this.country = country;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is playing`);
  },
};

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.fuck = function () {
  console.log(`I am playing with ${this.name}`);
};

const res = new Cricketer('kign', 25, 'bating', 'BD');
console.log(res);
res.eat();
res.fuck();

/**********
 *
 *
 * Class constructor
 *
 *
 ************/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  call() {
    console.log(`My name is ${this.name}`);
  }
}

class MyPerson extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
  }

  play() {
    console.log(`I will play with ${this.name} at ${this.country}`);
  }
}

const res = new MyPerson('Knight', 21, 'cyber hacker', 'England');
console.log(res);
console.dir(res);

res.play();
res.play();
res.play();
res.play();
res.play();

const res2 = new Person('Emma', 19);
console.log(res2);
res2.call();

/***********************
 *
 *
 *    geater and sether
 *
 *
 ***********************/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  call() {
    console.log(`My name is ${this.name}`);
  }
  get setName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
}

let s = new Person('King', 24);
console.log(s.setName);
s.setName = 'mafia';

console.log(s.name);

/***********************
 *
 *
 *    this keyword
 *
 *
 ***********************/

// impicit binding

var Person = function (name, age) {
  return {
    name: name,
    age: age,
    print: function () {
      name: 'king', console.log(this.name);
    },
    fuckName: {
      name: 'mrs.XXX',
      output: function () {
        console.log(this.name);
      },
    },
  };
};

var res = Person('king', 25);
// console.log(res);

res.print();
res.fuckName.output();

explicit binding

var outPut = function () {
  console.log(this.name + ' will be mafia');
};

var sakib = {
  name: 'sakib',
  age: 25,
};

outPut.call(sakib);

object rules

const myObj = {
  name: 'king',
  age: 32,
  res: function (v1, v2, v3, v4, v5) {
    console.log(this.name, v1, v2, v3, v4, v5);
  },
};
const v1 = 'knight';
const v2 = 'mafia';
const v3 = 'hacking';
const v4 = 'cyber';
const v5 = 'bal';
const re = [v1, v2, v3, v4, v5];
console.log(re);

myObj.res.apply(myObj, re);

const ress = myObj.res.bind(myObj, v1, v2, v3, v4, v5);
ress();

/***********************
 * higher order function
 ***********************/

example 1 without higher order function

var num = [1, 4, 8];

var res = [];

for (i = 0; i < num.length; i++) {
  res.push(num[i]);
}
console.log(res);

Example 2 with higher order function

var num = [1, 4, 8];

var res = num.map((li) => {
  return li * li;
});

var res = num.map((li) => li * li * li);
console.log(res);

example 1 without higher order function

var players = [
  {
    name: 'knight',
    age: 21,
  },
  {
    name: 'emma',
    age: 19,
  },
  {
    name: 'abdullah',
    age: 25,
  },
];

var playNameList = [];

for (i = 0; i < players.length; i++) {
  if (players[i].age <= 19) {
    playNameList.push(players[i]);
  }
}
console.log(playNameList);

example 2 with higher order function

var players = [
  {
    name: 'knight',
    age: 21,
  },
  {
    name: 'emma',
    age: 19,
  },
  {
    name: 'abdullah',
    age: 25,
  },
];

var playNameList = players.filter((player) => player.age > 21);
console.log(playNameList);

const arr = [1, 3, 5, 7, 9, 11, 23, 55, 70, 22];

const res = arr.filter((li) => li % 2 !== 0);
console.log(res);
let t = 0;
const sum = arr.forEach((v) => {
  return (t += v);
});
console.log(t);

Array.map() build in by me

const language = [
  'JavaScript',
  'Python',
  'PHP',
  'Java',
  'C Programming',
  'C++',
];

function mapJabir(arr, fn) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }

  return newArray;
}

const myArray = mapJabir(language, function (lang) {
  return lang.length;
});
console.log(myArray);

const person = ['jabir', 'rafin', 'sahed', 'mafia'];

function myPerson(arr, inx) {
  let myPersonRes = [];

  for (let i = 0; i < arr.length; i++) {
    myPersonRes.push(inx(arr[i]));
  }
  return myPersonRes;
}

const res = myPerson(person, function (lan) {
  return lan.length;
});
console.log(res);

const myArr = [2, 4, 5, 77, 88, 22, 14, 17];

function myArrD(arr, inx) {
  const trueRes = [];
  for (let i = 0; i < arr.length; i++) {
    trueRes.push(inx(arr[i]));
  }
  return trueRes;
}
let r = 0;
const res = myArrD(myArr, function (v) {
  return (r += v);
});
console.log(res);

foreach
const arr = [3, 5, 9];

arr.forEach((v, i, arr) => {
  return (arr[i] = v * 5);
});
console.log(arr);

function myArr(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

myArr(arr, function (v) {
  console.log(v);
});

function myArr(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
let s = 0;

const res = myArr(arr, function (v) {
  return (s += v);
});
console.log(s);

const res2 = myArr(arr, function (v, i, arr) {
  console.log(v, i, arr);
});

const arr = [3, 5, 9, 10];

function myMap(arr) {
  var newArr = [];

  for (i = 0; i < arr.length; i++) {
    var temp = arr[i] * arr[i];
    newArr.push(arr[i] * arr[i] * arr[i]);
  }
  return newArr;
}

console.log(myMap(arr));

function myMap(arr, cb) {
  let resArr = [];
  for (i = 0; i < arr.length; i++) {
    resArr.push(cb(arr[i], i, arr));
  }
  return resArr;
}

const s = myMap(arr, function (v, i, arr) {
  return v, i, arr;
});
console.log(s);

let ss = myMap(arr, function (v) {
  return v * 3;
});
console.log(ss);

const arr = [3, 5, 9, 10, 3, 2, 1, 44, 22];

let ss = arr.filter((li) => li > 10);

// // console.log(ss);
function myFilter(arr, cb) {
  let fil = [];
  for (i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      fil.push(arr[i]);
    }
  }
  return fil;
}

let s = myFilter(arr, function (v) {
  return v % 2 === 0;
});
console.log(s);

let ress = myFilter(arr, function (v) {
  return v > 10;
});
console.log(ress);

let sw = myFilter(arr, function (v) {
  return v % 2 !== 0;
});
console.log(sw);

const arr = [3, 5, 9, 10, 3, 2, 13, 44, 22];

function myReduce(arr, cb, acc) {
  for (i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

const sum = myReduce(
  arr,
  function (a, b) {
    return a + b;
  },
  0
);
console.log(sum);

const max = myReduce(
  arr,
  function (a, b) {
    return Math.max(a, b);
  },
  0
);
console.log(max);

const min = myReduce(
  arr,
  function (a, b) {
    return Math.min(a, b);
  },
  arr[0]
);
console.log(min);

const arr = [2, 5, 8, 80, 22, 11, 55, 28];

function myFind(arr, cb) {
  for (i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      // return arr[i];
      return i;
    }
  }
}

const res = myFind(arr, function (v) {
  return v === 8;
});
console.log(res);

var arr = [2, 5, 8, 80, 22, 11, 55, 28];
arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arr);

/***********************
 * Asynchronas and callback func
 ***********************/

const processOrder = (customer) => {
  console.log(`Processing order for customer 1`);
  setTimeout(() => {
    console.log(`coking is running`);
  }, 3000);
  console.log(`Order processed for customer 1`);
};
console.log(`take order for customer 1`);
processOrder();
console.log(`Complete order for customer 1`);

const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: 'Technical Meeting',
      location: 'Google meet',
      time: '3:00 AM',
    };
    resolve(meetingDetails);
  } else {
    reject(new Error('Meeting already scheduled!'));
  }
});

meeting
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
console.log('Hey guys');

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: 'Technical Meeting',
      location: 'Google meet',
      time: '3:00 AM',
    };
    resolve(meetingDetails);
  } else {
    reject(new Error('Meeting already scheduled!'));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

meeting
  .then(addToCalender)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
console.log('Hey guys');

const promise1 = Promise.resolve(`I will be solve`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I cant find for you');
  }, 2000);
});

promise1.then((res) => {
  console.log(res);
});
promise2.then((res) => {
  console.log(res);
});

Promise.all([promise1, promise2])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: 'Technical Meeting',
      location: 'Google meet',
      time: '3:00 AM',
    };
    resolve(meetingDetails);
  } else {
    reject(new Error('Meeting already scheduled!'));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return ;Promise.resolve(calender)
};

async function myMeeting() {
  const meetingDetails = await meeting;
  const calendar = await addToCalender(meetingDetails);
  console.log(calendar);
}

myMeeting();

/********* Practice and Practice *******/

error handling

const arr = [3, 4, 5, 6, 11, 3, 2];

function myArr(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const s = myArr(arr, function (v) {
  return v % 2 === 0;
});

console.log(s);

const s2 = myArr(arr, function (v) {
  return v > 5;
});

console.log(s2);

//*************Promise */

const hasClient = true;
const myPromise = new Promise((resolve, reject) => {
  if (!hasClient) {
    const client = {
      name: 'Jack',
      location: 'Fiverr',
      work: 'any',
    };
    resolve(client);
  } else {
    reject('Already cancled order of fiverr');
  }
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const r = true;
const res = () => {
  return new Promise((resolve, reject) => {
    if (!r) {
      resolve('I will be solve');
    } else {
      reject('I do not working fuck');
    }
  });
};

res()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const rr = false;
const res2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!rr) {
        resolve('How can I help you?');
      } else {
        reject('I do not wait for you');
      }
    }, 2500);
  });
};

res2()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const url = 'https://jsonplaceholder.typicode.com/photos';

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((p) => {
    console.log(p);
  });

const res = new Promise((resolve, reject) => {
  if (false) {
    resolve('I will be solve with you');
  } else {
    reject('I am not sure with you');
  }
});

const ch = async () => {
  try {
    const data = await res;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
ch();

/************************
      Recursion in JS
*************************/

f(n-1)+n=f(n)

function sum(n) {
  if (n === 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}
console.log(sum(6));
let n = 6;
console.log((n * (n + 1)) / 2);

const second = () => {
  console.log(`i am seceond`);
};

const third = () => {
  console.log('I am third');
};

const first = () => {
  console.log('I am fist');
  setTimeout(second, 2000);
  new Promise((resolve, reject) => resolve('I am resolve now')).then((res) =>
    console.log(res)
  );
  third();
};
first();

XMLHttprequest

const xhr = new XMLHttpRequest();

xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

xhr.onreadystatechange = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let users = JSON.parse(xhr.response);
      console.log(users);
    } else {
      console.log(xhr.status);
    }
  }
};

xhr.send();

// callback

function getRequest(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open('get', url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        callback(null, response);
      } else {
        callback(xhr.status, null);
      }
    }
  };
  xhr.send();
}

getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
    res.forEach((li) => {
      console.log(li.title);
    });
  }
});

getRequest('https://jsonplaceholder.typicode.com/todos', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
    res.forEach((li) => {
      console.log(li.title);
    });
  }
});

// promise api

const BASE_URL = 'https://jsonplaceholder.typicode.com';
function getRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('get', url);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(new Error('Something error of  data'));
        }
      }
    };
    xhr.send();
  });
}

getRequest(`${BASE_URL}/posts/213`)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

function sum(n) {
  if (n === 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}
console.log(sum(5));

const isLoggedIn = '';

const access = isLoggedIn ? isLoggedIn : false;
console.log(access);

// ES6

const ranks = [2, 5, 7, 31, 4, 6, 5, 4];
const res = ranks.findIndex((i, ix) => {
  return i === 5 && ix > 1;
});

console.log(res);

rest perameter

function myFunc(...arr) {
  console.log(arr);
}
myFunc(453, 'king', 'my', 'fuck', 'sobuj', 'noti');

/******* Clever Programmer ***** */

const weather = prompt('enter your weather type and text now: ');

if (weather == 'rainy') {
  console.log('grab your umbrellah');
} else {
  console.log('wear your sunglass');
}

tipCalculators

function calculatorFood(food, tip) {
  const tipParcent = tip / 100;
  const tipAmmount = food * tipParcent;
  const total = food + tipAmmount;
  return total;
}

console.log(calculatorFood(100, 20));

const arr = [1, 2, 3, 4];

let inx = 0;

function next() {
  return arr[inx++];
}
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());

const channel = 'Stack';
console.log(channel[Symbol.iterator]); // [Function: [Symbol.iterator]]
console.log(channel[Symbol.iterator].toString()); // function [Symbol.iterator]() { [native code] }

const str = 'Jabir';
const list = str[Symbol.iterator]();
console.log(list.next());
console.log(list.next());
console.log(list.next());
console.log(list.next());
console.log(list.next());
console.log(list.next());

const str2 = 'Mafia';

const check = str2[Symbol.iterator]();

while (true) {
  const data = check.next();
  if (data.done) {
    break;
  }
  console.log(data.value);
}

const range = {
  start: 0,
  stop: 100,
  step: 5,
};

for (let s of range) {
  console.log(s);
}

range[Symbol.iterator] = function () {
  let current = this.start;
  const stop = this.stop;
  const step = this.step;
  return {
    next() {
      const o = {
        value: current,
        done: current > stop,
      };
      current += step;
      return o;
    },
  };
};

const rangeIterator = range[Symbol.iterator]();
console.log(rangeIterator.next()); // { value: 0, done: false }
console.log(rangeIterator.next()); // { value: 5, done: false }
console.log(rangeIterator.next()); // { value: 10, done: false }

function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const ress = myGenerator();
console.log(ress.next());
console.log(ress.next());
console.log(ress.next());
console.log(ress.next());

function introduce(name, shirt) {
  const person = {
    name: name,
    shirt: shirt,
    assest: 10000,
    libirirs: 5000,
    netWort: function () {
      return this.assest - this.libirirs;
    },
  };
  const intro = `I am ${person.name} and the ${
    person.shirt
  } color of shirt and networt ${person.netWort()}`;
  return intro;
}
console.log(introduce('king', 'purple'));

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 50000,
    netWorth: function () {
      return this.assets - this.liabilities;
    },
  };

  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${
    person.shirt
  } and my net worth is $${person.netWorth()} USD`;

  return intro;
};

console.log(introducer('Qazi', 'black'));
console.log(introducer('Leonardo', 'white'));

const letterFriquncy = (phrase) => {
  console.log(phrase);

  let freq = {};

  for (const leter of phrase) {
    if (leter in freq) {
      freq[leter] = freq[leter] + 1;
    } else {
      freq[leter] = 1;
    }
  }
  return freq;
};

console.log(letterFriquncy('jabir'));
console.log(letterFriquncy('jabir will be mafia as your wish'));

const wordFrequency = (phrase) => {
  console.log(phrase);

  let freq = [];

  let word = phrase.split(' ');

  for (words of word) {
    if (words in freq) {
      freq[words] += 1;
    } else {
      freq[words] = 1;
    }
  }
  return freq;
};

// console.log(wordFrequency('king will be king of mafia of mafia'));

/****************************
 *
 * Destructuring with Array
 *
 ****************************/

const restaurent = {
  name: 'Italian Food',
  locationse: `Sylhet,Bangladesh`,
  categories: ['chinese', 'pizza', 'kaschi'],
  startMenu: ['salat', 'lemon', 'water'],
  mainMenu: ['pixxa', 'pasta', 'sisota'],
};
const restaurent2 = {
  name: 'Italian Food',
  locationse: `Sylhet,Bangladesh`,
  categories: ['chinese', 'pizza', 'kaschi'],
  startMenu: ['salat', 'lemon', 'water'],
  mainMenu: ['pixxa', 'pasta', 'sisota'],
};
const restaurent3 = {
  name: 'Italian Food',
  locationse: `Sylhet,Bangladesh`,
  categories: ['chinese', 'pizza', 'kaschi'],
  startMenu: ['salat', 'lemon', 'water'],
  mainMenu: ['pixxa', 'pasta', 'sisota'],
};

let checkRestu = [
  ...restaurent3.startMenu,
  ...restaurent3.mainMenu,
  'king',
  'beef',
  'fish',
];

console.log(checkRestu);
[a, , b] = restaurent.startMenu;
console.log(a, b);

destructuring with object

const { name, locationse, startMenu } = restaurent;
console.log(name, locationse, startMenu);

spread operator

let arr = [1, 2, 3, 4, 5];
let arr2 = [12, 23, 34, 65, 78];

const arres = [...arr, ...arr2];
console.log(arres);

const add = (...num) => {
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
};
add(2, 5);
add(2, 5, 4, 5);
add(2, 5, 5, 3, 2, 6);
add(2, 5, 7, 9, 4, 3, 2, 1, 3, 2, 55);

const arrName = greeting => name => console.log(`${greeting} ${name}`);

arrName('Hey')('Jabir');

const fullName = fname => lname => console.log(`${fname} ${lname}`);

fullName('Md')('Jabir');

/****************************
 *
 * OOP with JavaScript
 *
 ****************************/

const Person = function (f, l) {
  this.f = f;
  this.l = l;
  console.log(`${f} ${l}`);
};

const check = new Person('ki', 'ai');

const Person = function (name, birth) {
  this.name = name;
  this.birth = birth;
};

console.log(Person.prototype);

Person.prototype.mainBirth = function () {
  console.log(2020 - this.birth);
};

const res = new Person('King', '1998');
res.mainBirth();

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

const result = new Car('Audi', '10');
console.log(result);
console.log(Car.prototype);
Car.prototype.updateSpeed = function () {
  this.speed += 9;
  console.log(`${this.name} is going to at ${this.speed} km/h`);
};

result.updateSpeed();
result.updateSpeed();
result.updateSpeed();
result.updateSpeed();
class Person {
  constructor(n, l) {
    this.n = n;
    this.l = l;
  }
  call() {
    console.log(`My name is ${this.n}`);
  }
  call2() {
    return `I am ${this.l}`;
  }
}

const e = new Person('King', 'Mafia');
console.log(e);
e.call();

console.log(e.call2());

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/bangladesh');
request.send();

console.log(request.responText);

/****************************
 *
 * Promise and api
 *
 ****************************/

const showcountry = country => {
  const res = fetch(`https://restcountries.com/v3.1/name/${country}`).then(
    data => console.log(data)
  );
};
showcountry('bangladesh');
const showcountry2 = country => {
  const res = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(s => s.json())
    .then(data => {
      console.log(data);
      let ress = `<h1>${data[0].capital}</h1>`;
      return (document.querySelector('body').innerHTML = ress);
    });
};
// // showcountry2('bangladesh');
showcountry2('malaysia');

/*****************

//Extra practice

****************/

const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(d => console.log(d));

import './api.js';
import './something.js';

