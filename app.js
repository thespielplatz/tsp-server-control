const server = require('./logic/server');
const app = server.app;

app.get('/api/ping', (req, res) => {
    res.json("pong").end();
});

server.start(() => {
    console.log("go!");
});

