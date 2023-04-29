fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(err => console.log(`Data is not found`));
