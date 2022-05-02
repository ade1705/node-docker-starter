const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.json({ status: 'Go away!!!' });
}).get('/health', (request, response) => {
    response.json({ api: [
        { service: "service_name", version: "v1", status: "available" },
        { service: "service_name2", version: "v1", status: "available" }
    ]});
});
module.exports = app;
