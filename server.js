// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Determine the file path
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
            return;
        }

        // Determine the content type based on file extension
        const extname = path.extname(filePath);
        const contentType = {
            '.html': 'text/html',
            '.js': 'application/javascript',
        }[extname] || 'text/plain';

        // Read and serve the file
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
