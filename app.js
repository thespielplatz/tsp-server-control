const server = require('./logic/server');
const app = server.app;

app.get('/ping', (req, res) => {
    res.json("pong").end();
});

server.start(() => {
    console.log("go!");
});

