const urls = [
  `https://jsonplaceholder.typicode.com/posts`,
  `https://jsonplaceholder.typicode.com/albums`,
];
Promise.all(
  urls.map(url => {
    return fetch(url).then(res => res.json());
  })
).then(data => console.log(data));

const res = async url => {
  const ser = await fetch(url);
  const data = await ser.json();
  console.log(data[7].title);
};

// // res(`https://jsonplaceholder.typicode.com/albums`);
const textHome = document.getElementById('hom');

async function resAPi(url) {
  const check = await fetch(url);
  const data = await check.json();
  console.log(data);
  textHome.innerHTML = `<p>${data.body}</p>`;
}

resAPi(`https://jsonplaceholder.typicode.com/posts/33`);

const getUrl = [
  'https://jsonplaceholder.typicode.com/todos',
  'https://jsonplaceholder.typicode.com/users', //users
  'https://jsonplaceholder.typicode.com/photos', // photos
];

const checkApi = async () => {
  const [todos, photos, users] = await Promise.all(
    getUrl.map(url => {
      fetch(url).then(data => data.json());
    })
  );
  console.log(users);
};
checkApi();

async function fetchStarship() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}
fetchStarship();
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholdeTYPO.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function (url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops', err);
  }
};

const getData = async () => {
    const [users, posts, albums] = await Promise.all(urls.map(url =>{
        const res = await fetch(url)
    }))
};
