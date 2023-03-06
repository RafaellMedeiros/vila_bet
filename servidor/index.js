import express from "express"
import init from "./init.js"
import bodyParser from "body-parser"

import BD from "./banco_de_dados/BD.js"
import Aposta from "./modelos/aposta.js"
import Utils from './ferramentas/utils.js'
import Autenticador from './ferramentas/autenticador.js'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

init.start()
init.criatJogos(5)

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/login', (req, res) => {
    const aut = new Autenticador(req)
    if (aut.verificaLogin(req)) {
        if (aut.verificaPermissaoADM()) {
            res.render('adm')
        } else if (aut.verificaPermissaoDev()) {
            res.render('dev')
        } else {            
            res.render('nova-aposta', {
                jogos: BD.jogos,
                revendedor: BD.localizaUsuarioEmail(req.body.email).nome
            })
        }
    } else {
        res.render('senha-errada')
    }
})

app.post('/apostar', (req, res) => {
    const apostas = Utils.tranformaResultado(Object.values(req.body).slice(3))
    const dado = req.body
    BD.criarApostas(new Aposta(apostas, dado.nome, dado.tef, dado.responsavel, dado.endereco))
    res.render('confira-aposta', {
        apostas: apostas,
        jogos: BD.jogos
    })
})

app.get('/analise', (req, res) => {
    res.render('analise', {apostas: BD.apostas})
})

app.get('/cadastro-representantes', (req, res) => {
    res.render('cadastro-representantes')
})

app.get('/cadastrar-nova-semana', (req, res) => {
    res.render('cadastrar-nova-semana')
})

app.listen('8080', () => console.log('Server is running'))