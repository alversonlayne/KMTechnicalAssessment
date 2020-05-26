const express = require('express');
const app = express();
app.listen(8080, () => console.log('listening at 8080'));
app.use(express.static('public'));

app.get("/api", (request, response) => {
    var data = request;
    response.json(data);
    console.log(data);
    console.log("This is a test.");
});