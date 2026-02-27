
let name = "regi ridho";
const age = 25;

function greet($user){
  return `hello ${$user}!`;
}

const add = (a, b) => a + b;

console.log(greet('regi'));
console.log(add(5, 10));

const user = {
  name :'regi',
  age : 25,
  greet: function(){
    console.log(`my name is ${this.name} and i am ${this.age} years old`);
  }
};

user.greet();

  const colors = ['red', 'green', 'blue'];

function fetchData(callback){
  setTimeout(() => {
    callback('data fetched');
  }, 1000);
}

const fetchPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data resolved');
    }, 1000);
  });
}

async function getdata(){
  const result = await fetchPromise();
  console.log(result);
}

getdata();

  colors.forEach(color => console.log(color));
  const length = colors.map(color => color.length);


