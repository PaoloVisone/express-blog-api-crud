const posts = require('../data/posts');

function index(req, res) {
    // copiamo la logica dell'index
    res.json(posts);
}

function show(req, res) {
    // copiamo la logica della show

    // recupero l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerco il post tramite id
    const post = posts.find(post => post.id === id);

    // Restituisci JSON
    res.json(post);
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