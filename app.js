const express = require ('express')
const app = express()
const bodyParser = require("body-parser")
const buscaCep = require ('./src/functions/buscaCep')
const casosCovid = require ('./src/functions/casosCovid')
const buscaPokemon = require ('./src/functions/buscaPokemon')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views','./src/views')

app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/envia-cep', async (req,res) => {
    const { cep } = req.body
    const resultado = await buscaCep(cep)

    res.render('resultado', {dado: resultado})
})
app.post('/envia-uf', async (req, res) => {
    const { uf } = req.body
    
    const resultado = await casosCovid(uf)
    
    res.render("resultado", {dado: resultado})
})
app.post('/envia-id', async (req, res) => {
    const { id } = req.body
    
    const resultado = await buscaPokemon(id)
        
    res.render("resultado", {dado: resultado})
})


app.listen(3333)
