var express = require('express');
var router = express.Router();

var Post = require("../models/Post");

/* Vai para a página do formulário */
router.get('/form', function(req, res, next) {
  res.render('add', { title: 'Formulário' });
});

router.post("/add", function(req, res, next) {
    Post.create( {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        dataNSC: req.body.dataNSC,
        sexo: req.body.sexo,
        email: req.body.email
    })
    .then(function () {
        console.log("Postagem criada com sucesso!")
        res.redirect("/form");
    })
    .catch(function (erro) {
        res.send("Erro ao cadastrar o cliente. Erro: " + erro)
    });
})

module.exports = router;
