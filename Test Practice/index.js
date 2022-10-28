//Conditional

if (1 != 2) {
  console.log(`Payment`);
} else {
  console.log(`Do not payment`);
}

let selectedPaymentMethod = 'nagad';

if (selectedPaymentMethod == 'bkash') {
  console.log(`Bkash a redirect koro`);
} else if (selectedPaymentMethod == 'rocket') {
  console.log(`DBBL theke gure asho`);
} else if (selectedPaymentMethod == 'nagad') {
  console.log(`Jibon joddhe tumi egiye gele.`);
} else {
  console.log(`Jao tomar payment kora lagbe na`);
}

switch (selectedPaymentMethod) {
  case 'nagad':
    console.log('Going to payment of nagad');
    break;

  case 'bkash':
    console.log(`Bkash a redirect koro`);
    break;

  case 'upay':
    console.log('Upay payment kora onek subidha hoiche');
  case 'card':
    console.log('student der jonnoe card onk subidha royese');
    break;
  default:
    console.log('kisu korte hobe nah');
    break;
}

let aj = 1;
while (aj <= 20) {
  console.log(aj);
  aj++;
}

//Function

function sum(n1, n2) {
  console.log(n1 + n2);
}

sum(9, 10);

const mySum = (n, n3) => {
  return n + n3;
};

console.log(mySum(9, 9));

function add(num1, num2) {
  return num1 + num2;
}

function betonDao(mulBeton, providentAmount, tax, name) {
  let kataHobe = providentAmount + (providentAmount * tax) / 100;
  let betonPabo = mulBeton - kataHobe;
  console.log(kataHobe);
  console.log(`${name} ei mashe beton pabe ${betonPabo} tk`);
}

betonDao(30000, 5000, 10, 'Jabir');

// Repalce String

let vat = 'Ami vat khabo nah';

let rp = vat.replace('vat', 'ciggarate');

console.log(vat);

console.log(rp);

let jomiRegistry = 'Sona Mia';

let revisedJomiRegistry = jomiRegistry.replace('Sona', 'Lal');

console.log(revisedJomiRegistry);

//trim, toUpperCase, toLowerCase

let s1 = ' ami Bartie Jabo  ';

console.log(s1.trim());

console.log(s1);

console.log(s1.toLowerCase());

console.log(s1.toUpperCase());
console.log(s1.trim().toUpperCase());

let txt = 'aam,jam,kathal';

console.log(txt.split(','));

console.log(txt.indexOf('hal'));

console.log(txt.charCodeAt(3));

console.log(txt.includes('jam'));

console.log(txt.includes('jams'));

console.log(txt.startsWith('jam'));
console.log(txt.startsWith('aam'));

console.log(txt.endsWith('kathal'));

console.log(txt.startsWith('jaam', 5));

// Array

let names = ['takdir', 'jabir', 'mafia', 'Kaif', 'radee', 'prem'];

console.log(names);

console.log(names[1]);
console.log(names[5]);

console.log(names.length - 1);
console.log(names.length);

for (i = 0; i <= names.length; i++) {
  if (names[i] !== undefined) {
    console.log(names[i]);
  }
}

let ss1 = ['abdul', 'rahim', 'karim', 'manik', 'kalam'];

console.log(ss1);

for (i = 0; i <= ss1.length; i++) {
  let el = ss1[i];
  console.log(`list of name : ${el}`);
}

let nums = [13, 33, 31, 44, 55, 65, 22, 14, 67, 88];

// console.log(nums);

let totalSum = 0;

for (i = 0; i < nums.length; i++) {
  totalSum += nums[i];
}
console.log(totalSum);

let muls = [5, 7, 9, 2, 1, 4, 10];

console.log(muls);

let gun = 1;

for (i = 0; i < muls.length; i++) {
  gun *= muls[i];
}

console.log(gun);

// Object

const smartphone = {
  brand: 'Oneplue',
  model: '9 pro',
  makeCall: phoneNumber => {
    console.log(phoneNumber);
  },
  lastBuy: {
    shop: 'London, England',
    date: '09-09-23',
  },
};

// console.log(smartphone.makeCall(+880));
smartphone.makeCall(1998);

console.log(smartphone.lastBuy.date);

for (let item in smartphone) {
  console.log(item);
}

let texts = '';

for (let items in smartphone) {
  texts += `<li>${smartphone[items]}</li>`;
}
console.log(texts);

class MobilePhone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  getModel() {
    return this.model;
  }

  getBrand() {
    return this.brand;
  }
  details() {
    return `using ${this.model} of ${this.brand}`;
  }
}

class SmartPhone extends MobilePhone {
  constructor(brand, model, videoCall) {
    super(brand, model);
    this.videoCall = videoCall;
  }
}

let newPhone = new MobilePhone('Oneplus', '9 pro');

console.log(newPhone.details());

let newPhoneTo = new SmartPhone('Rezar', '9pro 22', true);

console.log(newPhoneTo);
console.log(newPhoneTo.model);
console.log(newPhoneTo.brand);

function Calculator() {
  this.result = 0;

  this.add = function (newNum) {
    this.result = this.result + newNum;
  };
  this.getResult = function () {
    return this.result;
  };
}

let newCalculation = new Calculator();

console.log(newCalculation.add(9).getResult());
