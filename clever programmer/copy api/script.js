const api_token = '1449305035573300';
const base_URL = `https://www.superheroapi.com/api.php/${api_token}`;
const newHeroButton = document.getElementById('newHeroButton');

const heroImageDiv = document.getElementById('heroImage');

const searchButton = document.getElementById('searchButton');

const searchInput = document.getElementById('searchInput');

const getFindData = id => {
  fetch(`${base_URL}/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      showInfoData(data);
    });
};
getFindData(45);

const showInfoData = info => {
  const tag = `<h1>${info.name}</h1>`;

  const imgTag = `<img src="${info.image.url}" height=200px width=200px/>`;
  const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
  };

  const personInfo = Object.keys(info.powerstats)
    .map(shows => {
      return `<p>${statToEmoji[shows]}${shows.toUpperCase()}: ${
        info.powerstats[shows]
      }</p>`;
    })
    .join('');

  return (heroImageDiv.innerHTML = `${tag}${imgTag}${personInfo}`);
};

const searchFindData = name => {
  fetch(`${base_URL}/search/${name}`)
    .then(res => res.json())
    .then(data => {
      const showImg = data.results[0];
      showInfoData(showImg);
      console.log(showImg);
    });
};

const randomData = () => {
  const randomImg = 731;
  return Math.floor(Math.random() * randomImg);
};

newHeroButton.onclick = () => getFindData(randomData());

searchButton.onclick = () => searchFindData(searchInput.value);
