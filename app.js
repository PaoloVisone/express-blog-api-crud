const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})