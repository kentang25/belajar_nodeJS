const http = require('http');
const fs   = require('fs').promises;

const port = 3000;

// fungsi baca file
async function readTodos()
{
    const data = await fs.readFile('todos.json', 'utf8');
    return JSON.parse(data);
}

// fungsi simpan file
async function saveTodos(todos)
{
    await fs.writeFile('todos.json', JSON.stringify(todos, null, 2));
}

const server = http.createServer(async (req, res) => {
    // get semua todo
    if(req.method === 'GET' && req.url === '/todos'){
        try{
            const todos = await readTodos();

            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify(todos));
        }catch(error){
            res.writeHead(500);
            res.end("Error membaca data");
        }
    }

    // post tambah todo
    else if(req.method === 'POST' && req.url === '/todos'){
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        console.log('Body:', body);

        req.on('end', async () => {
            try {
                const newTodo = JSON.parse(body);

                console.log(newTodo);

                const todos = await readTodos();
                
                const todo = {
                    id: todos.length + 1,
                    task: newTodo.task
                };

                todos.push(todo);
                
                await saveTodos(todos);

                res.writeHead(201, {'Content-Type' : 'application/json'});
                res.end(JSON.stringify(todo));

            }catch(error){
                res.writeHead(500);
                res.end("error menambah todo");
            }
        });
    }
    else{
        res.writeHead(404);
        res.end("Route tidak ditemukan");
    }
});

server.listen(port, () => {
    console.log(`Serve jalan di http://localhost:${port}`);
});