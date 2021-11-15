const express = require('express');
const router = express.Router();
const posts = require('../model/posts');
const bodyParser = require('body-parser');
const cors = require('cors');

const options = {
    origin: "http://localhost:3000"
}

router.use(cors(options));

//-----------exibir posts
router.get("/all", (req, res) => { //retornar os posts
    
    res.json(JSON.stringify( posts.getAll())) //ñ posso mandar meu obj direto, chamo JSON.stringfy
      
});
//-----------adicionar post
router.post("/new", express.json(), (req, res) => {

    let title = req.body.title;

    let description = req.body.description;

    posts.newPost(title, description);


    res.send("Post adicionado");

})
//----------deletar post
router.post("/delete", express.json(),(req, res) => {
    let id = req.body.id
    posts.deletePost(id)
    res.send("Post removido com sucesso! ")
})

module.exports = router;