function call_back(name, age, task) {
  console.log('Hello ', name);
  console.log(`I am ${age} years old`);
  task();
}

function dev() {
  console.log(`I will be frontend developer`);
}

function target() {
  console.log(`I want to be mern stack developer`);
}

call_back('I am Jabir', 19);
call_back('I am King', 21, dev);
