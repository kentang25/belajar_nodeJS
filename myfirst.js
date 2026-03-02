
// let name = "regi ridho";
// const age = 25;

// function greet($user){
//   return `hello ${$user}!`;
// }

// const add = (a, b) => a + b;

// console.log(greet('regi'));
// console.log(add(5, 10));

// const user = {
//   name :'regi',
//   age : 25,
//   greet: function(){
//     console.log(`my name is ${this.name} and i am ${this.age} years old`);
//   }
// };

// user.greet();

//   const colors = ['red', 'green', 'blue'];

// function fetchData(callback){
//   setTimeout(() => {
//     callback('data fetched');
//   }, 1000);
// }

// const fetchPromise = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('data resolved');
//     }, 1000);
//   });
// }

// async function getdata(){
//   const result = await fetchPromise();
//   console.log(result);
// }

// getdata();

//   colors.forEach(color => console.log(color));
//   const length = colors.map(color => color.length);


// const fs = require('fs');

// console.log('1 starsting async read');
// fs.readFile('README.md', 'utf8', (err,data) => {
//   if(err) throw err;
//   console.log('2 file content:', data);
// });

// console.log('3 done readfile data');

// --- promise ---

// const myPromise = new Promise((resolve , reject) => {
//     setTimeout(() => {

//         const success = Math.random() > 0.5;

//         if(success){
//             resolve('Opration complated successfully');
//         }else{
//             reject(new Error('Opration failed'));
//         }
//     }, 1000);
// });

// myPromise
//     .then(result => console.log('Succes : ', result))
//     .catch(error => console.error('Error : ', error.message));

// const fs = require('fs').promises;
// const promise1 = Promise.resolve('First Result');
// const promise2 = new Promise((resolve) => setTimeout(() => resolve('Seccond Result'), 1000));
// const promise3 = fs.readFile('README.md', 'utf8');

// Promise.all([promise1, promise2, promise3])
// .then(results => {
//     console.log('Results', results);
// })

// .catch(error =>{ console.error('Error in one of the promises', error)});

// function getUser(userId)
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({id : userId , name:'John'});
//         }, 1000);
//     });
// }

// function getUserPosts(user)
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(['Post1','Post2','Post2']);
//         }, 1000);
//     });
// }

// getUser(123)
//     .then(user => {
//         console.log('user :', user);
//         return getUserPosts(user);
//     })

//     .then(posts => {
//         console.log('posts :', posts);
//     })

//     .catch(error => {
//         console.error('error', error);
//     });

    // --- end promise ---

// --- async and await ---

// async function getdata()
// {
//     console.log('Starting...');
//     const result = await someAsyncOpration();
//     console.log(`result : ${result}`);
//     return result;
// }

// function someAsyncOpration()
// {
//     return new Promise((resolve) => {
//         setTimeout(() =>  resolve('Complated'), 1000);
//     });
// }

// getdata().then(data => console.log('final data : ', data));


const fs = require('fs').promises;

async function readFile()
{
    try {
        const data = await fs.readFile('README.md', 'utf8');
        console.log(data);
    }catch(error){
        console.error('error data', error);
    }
}

readFile();


