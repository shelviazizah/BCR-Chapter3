console.log("Implement servermu disini yak 😝!");

const http = require('http');
const PORT = 3000;
const url = require('url')

function onRequest(req, res) {
    console.log('request', req)
    res.writeHead(200);
    res.end("Halo, this is from server!");
}

const server = http.createServer(onRequest);

server.listen(PORT, '127.0.0.1', () => {
    console.log("Server sudah berjalan")
})

const fs = require('fs');
const path = require('path');
const { url } = require('inspector');

console.log('__dirname', __dirname, '../public')

function onRequest(req, res) {
    const parseUrl = url.parse(req.url);
    let pathUrl = parseUrl.pathname

    fs.readFile()

    const htmlFile = path.join(PUBLIC_DIRECTORY, 'index.html')
    const html = fs.readFileSync(htmlFile, 'utf-8');

    console.log(req.url)
    res.setHeader('Content-Type', 'text/html')
    res.writeHead(200);
    res.end(html);
}