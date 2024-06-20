const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'html')));

app.get("*", (req, res) => {
    res.status(404).send('File not found');
});

app.listen(8080, () => {
    console.log(`server starts at port no ${PORT}`);
});
