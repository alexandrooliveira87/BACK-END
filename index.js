const express = require('express')
const app = express()

//Rota
    //Metodo HTTP - CRUD (Create, Read, Update, Delete)
    //GET - Pega uma info
    //POST - Cria uma info
    //PUT - Altera toda info
    //PATH - Altera parte da info
    // Delete - Apaga uma info
//Name - identificador da rota

//Function (callback) - Responsável por executar algum comando
app.get('/home', (req, res) => {
  res.send('API de Teste')
})

.
app.listen(3000)