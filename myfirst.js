
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


// const fs = require('fs').promises;

// async function readFile()
// {
//     try {
//         const data = await fs.readFile('README.md', 'utf8');
//         console.log(data);
//     }catch(error){
//         console.error('error data', error);
//     }
// }

// readFile();

// async function fetchUserData() {
//   try {
//     const response = await fetch('https://api.example.com/users/1');
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const user = await response.json();
//     console.log('User data:', user);
//     return user;
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     throw error; 
//   }
// }

// const http = require('http');

// const server = http.createServer((req, res) => {

    // function fetchData(id)
    // {
    //     return new Promise( resolve => {
    //         setTimeout(() => resolve(`Data for id ${id}`), 1000);
    //     });
    // }
    
    // async function fetchSequential()
    // {
    //     console.time('sequential');
    //     const data1 = await fetchData(1);
    //     const data2 = await fetchData(2);
    //     const data3 = await fetchData(3);
    //     console.timeEnd('sequential');
    //     return [data1, data2, data3];
    // }
    
    // async function fetchParallel()
    // {
    //     console.time('parallel');
    
    //     const result = await Promise.all([
    //         fetchData(1),
    //         fetchData(2),
    //         fetchData(3)
    //     ]);
    //     console.timeEnd('parallel');
    //     return result;
    // }
    
    // async function runDemo()
    // {
    //     console.log('run sequentially...');
    //     const seqResult = await fetchSequential();
    //     console.log(seqResult);
    
    //     console.log('\nRunning in parallel');
    //     const perResult = await fetchParallel();
    //     console.log(perResult);
    // }

    // runDemo();
// });

// server.listen(3000, () => {
//     console.log('Server jalan di http://localhost:3000');
// });

//  --- async with callback ----

// function getUser(userid, callback)
// {
//     setTimeout(() => {
//         callback(null, {id : userid, name:'john'});
//     }, 1000);
// }

// function getUserPost(user, callback)
// {
//     setTimeout(() => {
//         callback(null, ['Post 1', 'Post 2']);
//     }, 1000);
// }

// getUser(1, (error, user) => {
//     if(error){
//         console.error(error);
//         return;
//     }
//     console.log('User', user);

// getUserPost(user, (error,post) => {
//     if(error){
//         console.error(error);
//         return;
//     }
//     console.log('Posts', post);
//     });
// });

// // --- async with promise ---

// function getUserPromise(userId)
// {
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve ({id : userId, name:'John'});
//         }, 1000);
//     });
// }

// function getPostUserPromise(post)
// {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve (['post 1', 'post 2']);
//         }, 1000);
//     });
// }

// getUserPromise(1)
//     .then(user => {
//         console.log('User' , user);
//         return getPostUserPromise(user);
//     })
//     .then(post => {
//         console.log('Post' , post);
//     })
//     .catch(error => {
//         console.error(error);
//     });


// async function getUserAndPost(){
//     try{
//         const user = await getUserPromise(1);
//         console.log('user :', user);

//         const post = await getPostUserPromise(user);
//         console.log('post :', post);
//     }catch(error){
//         console.error(error);
//     }
// }

// getUserAndPost();

// const fs = require('fs').promises;

// async function loadData(userid)
// {
//     try{
//         const data = await fs.readFile(`user/${userid}.json`, 'utf8');
//         const user = JSON.parse(data);
    
//         if(!user.email){
//             throw new error('data email tidak ditemukan');
//         }
    
//         return user;
//     }catch(error){
//         if(error.code === 'ENOENT'){
//             throw new error('data userID tidak ditemukan');
//         }else if(Error instanceof SyntaxError){
//             throw new error('format tidak sesuai');
//         }

//         throw error;
//     }finally{
//         console.log(`finally prosessing user id ${userid}`);
//     }
// } 

// (async () => {
//     try{
//         const user = await loadData(123);
//         console.log('user data', user);
//     }catch(error){
//         console.error('failed', error.message);
//     }
// })();

export function add(a, b){
    return a + b;
}

export function subtract(a, b){
    return a + b;
}
// Only one default export per module
export default function() {
  console.log('I am the default export');
}

// Or with a named function/class/object
function mainFunction() {
  return 'Main functionality';
}

mainFunction;