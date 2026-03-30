// const http = require('http');
// const fs = require('fs').promises;

// const PORT = 3000;

// async function readTodos(){
//     const data = await fs.readFile('todos.json','utf8');
//     return JSON.parse(data);
// }

// async function saveTodos(todos){
//     await fs.writeFile('todos.json', JSON.stringify(todos,null,2));
// }

// const server = http.createServer(async (req,res)=>{

//     // tampilkan halaman html
//     if(req.method === 'GET' && req.url === '/'){
//         const html = await fs.readFile('index.html');
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end(html);
//     }

//     // ambil todos
//     else if(req.method === 'GET' && req.url === '/todos'){
//         const todos = await readTodos();
//         res.writeHead(200,{'Content-Type':'application/json'});
//         res.end(JSON.stringify(todos));
//     }

//     // tambah todo
//     else if(req.method === 'POST' && req.url === '/todos'){
//         let body='';

//         req.on('data',chunk=>{
//             body+=chunk.toString();
//         });

//         req.on('end', async ()=>{
//             const newTodo = JSON.parse(body);

//             const todos = await readTodos();

//             const todo={
//                 id: todos.length+1,
//                 task:newTodo.task
//             };

//             todos.push(todo);

//             await saveTodos(todos);

//             res.writeHead(201,{'Content-Type':'application/json'});
//             res.end(JSON.stringify(todo));
//         });
//     }

//     else{
//         res.writeHead(404);
//         res.end("Not Found");
//     }

// });

// server.listen(PORT,()=>{
//     console.log(`Server running http://localhost:${PORT}`);
// });

class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }
}

module.exports = Logger;