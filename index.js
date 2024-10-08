const express = require("express");
const app = express();

const port = 3000;

const router = require("./routers/index")
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabela");

app.use(express.json()) 
router(app,express);
tabelas.init(conexao)


app.listen(port,(err) =>{
    if(err){
        console.log("erro")
        return
    }
    console.log("deu certo")
})