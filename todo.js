const http  = require('http');
const fs    = require('fs').promises;

const port = 3001;

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
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(html);
        }catch(error){
            res.writeHead(500);
            res.end('file tidak ditemukan');
        }
    } 
    else if(req.method === 'GET' && req.url === '/todos'){
        try{
            const todos = await readTodos();

            // console.log("TODOS : ", todos);
            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify(todos));
        }catch(error){
            res.writeHead(500);
            res.end('error membaca data');
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
                    id : todos.length+1,
                    task : newTodos.task
                }

                todos.push(todo);

                await saveTodos(todos);

                res.writeHead(201, {'Content-Type':'application/json'});
                res.end(JSON.stringify(todos));
            }catch(error){
                res.writeHead(500);
                res.end('error menambah todos');
            }
        });
    }
    else if (req.method === 'DELETE' && req.url.startsWith('/todos/')) {
        try {
            const id = parseInt(req.url.split('/')[2]);
            let todos = await readTodos();
            todos = todos.filter(todo => todo.id !== id && todo.id !== null);
            await saveTodos(todos);
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify({deleted: true}));
        } catch(error) {
            res.writeHead(500);
            res.end('Error deleting todo');
        }
    }
    else{

        res.writeHead(404);
        res.end('not found');
    }

});

server.listen(port, () =>{
    console.log(`Server running http://localhost:${port}`);
});