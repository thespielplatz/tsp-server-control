const server = require('./logic/server');
const app = server.app;

app.get('/ping', (req, res) => {
    res.json("pong").end();
});

server.start(() => {
    console.log("go!");
});

process.on('SIGINT', function() {
    app.close(() => {
        process.exit(0)
    })
})
