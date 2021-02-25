const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.use(express.static("public"));

app.get('/test', (req, res) => {
    res.send('wow')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});