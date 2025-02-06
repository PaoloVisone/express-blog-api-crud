const menu = require('../data/posts');

function index(req, res) {
    // copiamo la logica dell'index
    res.send('Lista dei post');
}

function show(req, res) {
    // copiamo la logica della show
    res.send('Dettagli del post ' + req.params.id);
}

function store(req, res) {
    // copiamo la logica della store
    res.send('Creazione nuovo post');
}

function update(req, res) {
    // copiamo la logica dell'update
    res.send('Modifica integrale del post ' + req.params.id);
}

function destroy(req, res) {
    // copiamo la logica della destroy..
    res.send('Eliminazione del post ' + req.params.id);
}

// esportiamo tutto
module.exports = { index, show, store, update, destroy }