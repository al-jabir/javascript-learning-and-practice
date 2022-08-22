// const check = new Promise((res, rej) => {
//   console.log('I still show on youtube');
//   setTimeout(() => {
//     const isThat = true;
//     isThat ? res('I will be project') : rej('I will be good learn project');
//   }, 3000);
// });
// console.log(check.then(res => console.log(res)));

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     isReady = [true, false][Math.floor(Math.random() * 2)];

//     isReady ? resolve('Soup is ready') : reject('No soup today');
//   }, 2000);
// });
// console.log(
//   promise1
//     .then(success => console.log({ success }))
//     .catch(err => console.log({ err }))
// );

// const res = async () => {
//   try {
//     const re = await promise1;
//     console.log(re);
//   } catch (err) {
//     console.log(err);
//   }
// };
// res();

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isReady = [true, false][Math.floor(Math.random() * 2)];

//     isReady
//       ? resolve('Oneday I will be frontend Developer')
//       : reject('I will be still learning for career my job');
//   }, 2500);
// });

// console.log(
//   promise2.then(data => console.log(data)).catch(err => console.log(err))
// );

// const result = async () => {
//   const show = await promise2;
//   //   console.log(show);

//   const data = { rate: 0, skill: 0, pass: 0 };

//   try {
//     console.log(show);
//     data.rate = 4.5;
//     data.skill = 10;
//     data.pass = 4;
//     return data;
//   } catch (err) {
//     console.log(err);
//     data.rate = 3.9;
//     data.skill = 2.8;
//     data.pass = 3;
//     return data;
//   }
// };
// console.log(
//   result()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// );

async function getFindData() {
  try {
    const getUserData = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    const showUser = getUserData.json();

    return showUser;
  } catch (err) {
    console.log(err.message);
  }
}

console.log(getFindData().then(data => console.log(data.email)));
