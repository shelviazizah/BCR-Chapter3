console.log("Implement servermu disini yak 😝!");

const express = require('express');
const app = express();
const port = 8000;
const path = require('path')

const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))

app.get('/', (reeq, res) => {
    res.status(200);
    res.sendFile(path.join(publicDir, 'index.example.html'))
})
app.get('/cars', (reeq, res) => {
    res.status(200);
    res.sendFile(path.join(publicDir, 'carimobil.html'))
})

app.listen(port, () => {
    console.log("server sudah jalan")
})