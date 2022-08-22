const getButton = document.getElementById('get-button');

const sendButton = document.getElementById('send-button');

const sendRequest = function (method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(data);

    xhr.onload = function () {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = function () {
      reject('something was wrong');
    };
  });
  return promise;
};
const getData = function () {
  sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/2').then(
    (response) => {
      console.log(response);
    }
  );
};
const sendData = function () {
  sendRequest(
    'Post',
    'https://jsonplaceholder.typicode.com/posts/1',
    JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);
