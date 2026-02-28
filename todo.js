const http = require('http');

let todos = [];

const server = http.createServer((req, res) => {

    // Header supaya bisa tampil di browser
    res.setHeader('Content-Type', 'application/json');

    // GET semua todo
    if (req.url === '/todos' && req.method === 'GET') {
        res.end(JSON.stringify(todos));
    }

    // Tambah todo
    else if (req.url === '/todos' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {

        console.log("ISI BODY:", body);

        try {
            const data = JSON.parse(body);

            todos.push(data.todo);

            res.end(JSON.stringify({
                message: "Todo ditambahkan",
                todos: todos
            }));

        } catch (error) {
            res.end(JSON.stringify({
                message: "JSON tidak valid",
                error: error.message
            }));
        }
    });
}

    // Hapus todo
    else if (req.url.startsWith('/todos/') && req.method === 'DELETE') {
        const id = parseInt(req.url.split('/')[2]);
        todos.splice(id, 1);

        res.end(JSON.stringify({
            message: "Todo dihapus",
            todos: todos
        }));
    }

    else {
        res.end(JSON.stringify({ message: "Route tidak ditemukan" }));
    }

});

server.listen(3000, () => {
    console.log('Server jalan di http://localhost:3000');
});