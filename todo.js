const http  = require('http');
const fs    = require('fs').promises;

const port = 3000;

async function readTodos()
{
    const data = await fs.readFile('todos.json', 'utf8');
    return JSON.parse(data);
}

async function saveTodos(todos)
{
    await fs.writeFile('todos.json', JSON.stringify(todos, null, 2));
}

const server = http.createServer(async (req, res) => {
    if(req.method === 'GET' && req.url === '/'){
        try{
            const html = await fs.readFile('index.html');
            res.writeHead(200, {'Content-Type':'html/text'});
            res.end(html);
        }catch(error){
            res.writeHead(505);
            res.end('file tidak ditemukan');
        }
    } 
    else if(req.method === 'GET' && req.url === '/todos'){
        try{
            const addTodos = await readTodos();
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(readTodos);
        }catch(error){
            res.writeHead(505);
            res.end('error menampilkan data');
        }
    }

    else if(req.method === 'POST' && req.url === '/todos'){
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try{
                const newTodos = JSON.parse(body);
                const todos = await readTodos();
                const todo  = {
                    id : todos.lenght+1,
                    task : newTodos.task
                }

                todos.push(todo);

                await saveTodos(todos);

                res.writeHead(201, {'Content-Type':'application/json'});
                res.end(JSON.stringify(todos));
            }catch(error){
                res.writeHead(505);
                res.end('error menambah todos');
            }
        });
    }else{
        res.writeHead(404);
        res.end('not found');
    }
});

server.listen(port, () =>{
    console.log(`Server running http://localhost:${port}`);
});