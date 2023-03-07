import express from "express"
import init from "./init.js"
import bodyParser from "body-parser"

import BD from "./banco_de_dados/BD.js"
import Aposta from "./modelos/aposta.js"
import Usuario from "./modelos/usuario.js"
import Jogo from "./modelos/jogo.js"
import Permissao from "./ferramentas/permissões.js"
import Utils from './ferramentas/utils.js'
import Autenticador from './ferramentas/autenticador.js'
import global from "./ferramentas/global.js"

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

init.start()

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
            const revendedor = BD.localizaUsuarioEmail(req.body.email)
            const nomeRevendedor = `${revendedor.nome} ${revendedor.sobrenome}`
            res.render('nova-aposta', {
                jogos: BD.jogos,
                revendedor: nomeRevendedor
            })
        }
    } else {
        res.render('senha-errada')
    }
})

app.get('/adm', (req, res) => {
    res.render('adm')
})

app.post('/apostar', (req, res) => {
    const dado = req.body
    const apostas = Utils.tranformaResultado(Object.values(dado).slice(4))
    const responsavelDividido = dado.responsavel.split(" ")
    const aposta = new Aposta(apostas, dado.nome, dado.tef, BD.localizaUsuarioNome(responsavelDividido[0], responsavelDividido[1]), dado.endereco)
    BD.criarApostas(aposta)
    res.render('confira-aposta', {
        apostas: apostas,
        jogos: BD.jogos,
        link: `http://192.168.1.107:8080/resultado?id=${aposta.id}`
    })
})

app.get('/analise', (req, res) => {
    res.render('analise', {apostas: BD.apostas})
})

app.get('/cadastro-representantes', (req, res) => {
    res.render('cadastro-representantes')
})

app.post('/cadastro-representantes', (req, res) => {
    const dado = req.body
    BD.criarUsuarios(new Usuario(dado.nome, dado.sobrenome,dado.telefone, dado.email, dado.cpf, dado.senha, Permissao.USER, dado.endereco))
    res.render('adm')
})

let contadorJogo = 1;

app.get('/cadastrar-nova-semana', (req, res) => {
    if (contadorJogo >= global.NUMERO_DE_JOGOS) {
        res.render('cadastrar-nova-semana', {
            contadorJogo: null,
            jogos: BD.jogos
        })
    } else {
        res.render('cadastrar-nova-semana', {
            contadorJogo: contadorJogo,
            jogos: BD.jogos
        })
    }
})

app.post('/cadastrar-nova-semana', (req, res) => {
    contadorJogo++
    const dado = req.body
    const time1 = dado.time1
    const time2 = dado.time2
    BD.criarJogo(new Jogo(`${time1}-${time2}`,`${time1} vs ${time2}`,time1, time1, `empate_jogo_${time1}_${time2}`, time2, time2))
    if(contadorJogo > global.NUMERO_DE_JOGOS) {
        res.render('adm')
    } else {
        res.render('cadastrar-nova-semana', {
            contadorJogo: contadorJogo,
            jogos: BD.jogos
        })
    }
})

app.get('/cadastrar-resultado', (req, res) => {
    res.render('cadastrar-resultado', {jogos: BD.jogos})
})

app.post('/cadastrar-resultado', (req, res) => {
    BD.resultado = Utils.tranformaResultado(Object.values(req.body))
    res.render('adm')
})

app.get('/resultado', (req, res) => {
    const aposta = BD.localizaApostaId(req.query.id)
    const valoresApostados = aposta.aposta

    const ranking = Utils.geraRanking()
 
    res.render('resultado', {
        apostador: aposta.nome,
        jogos: BD.jogos,
        valoresApostados: valoresApostados,
        ranking: ranking
    })
})

app.listen('8080', () => console.log('Server is running'))