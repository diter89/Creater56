
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, html) => {
        if (err) {
            throw err;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    });
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
