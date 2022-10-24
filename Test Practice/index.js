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
