const express = require('express')
const app = express()
const port = 3000

// middlewares errorsHandler
const errorsHandler = require("./middlewares/errorsHandler");

// middlewares notFound
const notFound = require("./middlewares/notFound");

// Importo il router
const postRouter = require('./routers/posts');

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Registro il body-parser
app.use(express.json());

// Rotta
app.use("/posts", postRouter)

// Registo il middlewares errorsHandler
app.use(errorsHandler);

// Registo il middlewares notFound
app.use(notFound);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})