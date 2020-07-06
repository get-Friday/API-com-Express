const porta = 3003
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const bd = require('./bd')

app.use(bodyparser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos', (req, res) => {
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res) => {
    const produto = bd.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => console.log(`Servidor executando na porta ${porta}.`))