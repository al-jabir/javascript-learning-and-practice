let temp = prompt("Enter your number type now: ")

let res = 9/5*temp +32
alert(res+ ' degree')
console.log("You have task complete")


/*
learn JS

*/

let n = '5' % '2'; // 25
console.log(n);

let name = '    al jabir         ';
let res = name.trim();
console.log(res);

let m = 'Al Jabir';
let s = m.slice(3, 6);
console.log(s);
console.log(m.length);

function cel(f) {
  return (5 / 9) * (f - 32);
}

// console.log(cel(prompt())+' degree')
// arr+forloop
let arr = ['Al jabir', 'mafia', 'king', 'love', 'Developer'];
let count = 0;

for (i = 1; i < arr.length; i++) {
  console.log(`${i} ${arr[i]}`);
  count++;
}
console.log('total count : ' + count);

// function
function div(n) {
  let count = 0;
  for (i = 1; i < n; i++) {
    if (n % i == 0) {
      console.log(i);
      count++;
    }
  }
  return count;
}

console.log(div(20));

// document.querySelector('.i').innerHTML = 'How can I learn JS for 30 days'

let a, b, c;
a = 5;
a = 9;
b = 6;
b = 5;
c = a * b;
console.log(c);

const f = 'Jabir';
console.log(f);

function mul(n) {
  return n * n;
}

// console.log(mul(prompt()))

//x and X are not same variable declar
let x = 'Jabir';
let X = 'AJ Techs';

let king;

console.log(king); // undefined

//multiple declar

let as = 44,
  kings = 'k',
  hacks = 98.44;

console.log(hacks);

var x2 = '5' + 4 + 9; //549
x2 = 5 + 10 + '15'; //1515
x2 = 2 + 3 + '5';
console.log(x2);
// var can be redeclar do it
var $name = 'Mafia';
console.log($name);
var $name = 98;
console.log($name);

let ns = 10;

{
  let ns = 'devs';
  console.log(ns); //block er baire access korte pare na
}
console.log(ns); // 10 can't block access the value
let asa = 3;
let ms = (100 + 50) * asa;
console.log(ms);

//Data type

let x3 = 24 + 'Jing';
x3 = '39' * 'king';
console.log(x3);

let cs = 33.4;
cs = 33e-5;
console.log(cs);
let a1 = 8;
let a2 = 'kign';
let a3;
let a4 = null;
let a5 = true;
console.log(typeof a1);
console.log(typeof a2);
console.log(typeof a3);
console.log(typeof a4);
console.log(typeof a5);

// data type 2 prokar
// 1 primitive 2 non primitive
/*
primitive list
Number
String
Boolean
NaN
undefined
null
*/

/*
NoN primitive 
Array
Object
function
*/

//tarnary

let res3 = 9 >= 19 ? 'Yes' : 'No';
console.log(typeof res3);

let na = 10;

if (na > 9) {
  console.log('You are allow that');
  if (na > 5) {
    console.log('You are too allow');
  } else {
    console.log('You are not allow');
  }
}

//task problem solve

let task = '' + 1 + 0; //10
task = '' - 1 + 0; //-1
task = 6 / '3'; // 2
task = '3' * '2'; // 6
task = 4 + 5 + 'px'; // 9px
task = '$' + 4 + 9; // $49
task = '4px' - 2; // NaN
task = 7 / 0; // infinity
task = '  -9  ' + 5; // -9  5
task = undefined + 1;
console.log(task);
//End of the sulotion code
console.log(4 ** (1 / 2));

//string compare

if ('9' > '30') {
  console.log('true');
} else {
  console.log('false');
}
// let tesa = prompt('Enter your name :')
// console.log(tesa)

console.log(null || (2 && 3) || 4);

//find the largest num of use function

function largest(a, b, c) {
  if (a > b && b > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(largest(50, 98, 33));

// solution done

// conditions

if (new Date().getHours() > 22) {
  console.log('learning code');
} else {
  console.log('so hard working');
}

if (new Date().getTime() > 50) {
  console.log('Will be learn coding');
}
console.log(new Date().getTime().toString());

//switch condition

switch (new Date().getDay()) {
  case 0:
    console.log('Today is sunday');
    break;
  case 1:
    console.log('Today is Monday');
    break;
  case 2:
    console.log('Today is Tuesday');
    break;
  case 3:
    console.log('Today is Wednesday');
    break;
  case 4:
    console.log('Today is Thrusday');
    break;
  case 5:
    console.log('Today is Friday');
    break;
  case 6:
    console.log('Today is Saturday');
    break;
  default:
    console.log('That is no day match');
}

function comp(str) {
  switch (str) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      console.log('Vowels');
      break;
    default:
      console.log('Consonants');
  }
}
comp(prompt())

let num = prompt('Enter the number: ')
num = parseInt(num)

let num2 = isNaN(num)
console.log(num)

result grade marks of function

function grade(n) {
  if (n > 80) {
    return 'You have got A+';
  } else if (n >= 70) {
    return 'You have got A';
  } else if (n >= 60) {
    return 'You have got A-';
  } else if (n >= 50) {
    return 'You have got B';
  } else if (n >= 40) {
    return 'You have got C';
  } else if (n >= 30) {
    return 'You have got D';
  } else {
    return 'You have failed the exam some subject';
  }
}
// console.log(grade(prompt('Enter your marks write here')))

function lop(n) {
  let cnt = 0;
  for (i = 1; i <= n; i++) {
    cnt += i;
  }
  return cnt;
}

console.log(lop(prompt('Enter the for loop')));
console.log(lop(prompt('Enter the for loop')));
console.log(lop(prompt('Enter the for loop')));
console.log(lop(prompt('Enter the for loop')));

function evn(n) {
  let cnt2 = 0;
  for (i = 1; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
      cnt2++;
    }
  }
  console.log('Total count = ' + cnt2);
}

evn(21);
evn(10);
evn(15);
evn(30);
evn(50);

function star(n) {
  let cnt3 = 0;
  for (i = 1; i <= n; i++) {
    let res4 = '';
    for (j = 1; j <= i; j++) {
      res4 += '*';
      cnt3++;
    }
    console.log(res4);
  }
  console.log('Total nested loop count : ' + cnt3);
}
star(5);
star(15);

// loop

let nai = 1;
while (nai <= 99) {
  console.log(nai + ' I love Allah');
  nai++;
}

function sum(n) {
  var count2 = 0;
  var i = 1;
  while (i <= n) {
    console.log('I want to be developer');
    count2 += i;
    i++;
  }
  console.log('Total count while loop : ' + count2);
}
sum(5);
sum(15);
sum(25);
sum(10);
