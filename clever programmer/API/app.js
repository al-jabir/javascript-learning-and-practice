const newTaskHero = document.getElementById('newTask');
// console.log(newTaski);
const mainBody = document.getElementById('main');
// console.log(mainBody);

const searchBtn = document.getElementById('searchBtn');
// console.log(searchBtn);

const searchInputs = document.getElementById('searchInput');
// console.log(searchInput);
const api_token = '1449305035573300';
const base_URL = `https://www.superheroapi.com/api.php/${api_token}`;

const getPersonDetails = id => {
  fetch(`${base_URL}/${id}`)
    .then(res => res.json())
    .then(data => {
      const checkInfo = getDetailsToo(data);
      // console.log(data);
      // console.log(data.image.url);
      // console.log(data.name);
      const name_title = `<h1>${data.name}</h1>`;

      mainBody.innerHTML = `${name_title}<img src="${data.image.url}" height=200px/>${checkInfo}`;
      console.log(data);
    });
};

const getDetailsToo = bio => {
  const info = Object.keys(bio.biography).map(infos => {
    return `<p>${infos}: ${bio.biography[infos]}</p>`;
  });
  return info.join('');
};

const getSearch = name => {
  fetch(`${base_URL}/search/${name}`)
    .then(res => res.json())
    .then(data => {
      const show = data.results[0].image.url;
      mainBody.innerHTML = `<img src="${show}" height=200px/>`;
    });
};

const randomImg = () => {
  const randomNum = 731;
  return Math.floor(Math.random() * randomNum);
};
// console.log(randomImg());

newTaskHero.onclick = () => getPersonDetails(randomImg());
searchBtn.onclick = () => getSearch(searchInputs.value);
