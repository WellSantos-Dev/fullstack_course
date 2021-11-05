const express = require('express')
const { nome, sobrenome, criaFuncao } = require('./module/script.js')

const app = express()

console.log(nome)

app.get('/', (request, response) => {
  return response.json({
    nome : 'Wellington',
    sobrenome : 'Santos',
    idade : 19
  })
})

app.listen(3333)