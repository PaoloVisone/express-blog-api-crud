const posts = require('../data/posts');

function index(req, res) {
    // copiamo la logica dell'index

    // Bonus
    //Inizialmente, l'array d'oggetti filtrato corrisponde a quello originale
    let filteredPost = posts;

    // Se la richiesta contiene un filtro, allora filtriamo l'array
    if (req.query.tags) {
        filteredPost = posts.filter(post => post.tags.includes(req.query.tags));
    }
    // restituiamo la variabile filteredMenu
    // potrebbe essere stata filtrata o contenere l'array originale
    res.json(filteredPost);
}

function show(req, res) {
    // copiamo la logica della show

    // recupero l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerco il post tramite id
    const post = posts.find(post => post.id === id);

    // Faccio il controllo
    if (!post) {
        //Imposto lo status 404
        res.status(404)

        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

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

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const post = posts.find(post => post.id === id);

    // Piccolo controllo
    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    // Rimuoviamo la pizza dal menu
    posts.splice(posts.indexOf(post), 1);

    // Verifichiamo sul terminale
    console.log(posts);

    // Restituiamo lo status corretto
    res.sendStatus(204)
}

// esportiamo tutto
module.exports = { index, show, store, update, destroy }