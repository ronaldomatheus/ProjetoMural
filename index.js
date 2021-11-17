const PORT = 3000;
const express = require('express');
const apiRouter = require("./router/api")
const path = require("path");
const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

app.use('/api', apiRouter ); //inverti a chamada das rotas

 
app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})



