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
