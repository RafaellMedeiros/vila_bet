import Utils from "../ferramentas/utils.js"

class Aposta {

    constructor(aposta, nome, telefone, responsavel, endereco) {
        this.id = Utils.criarIdAposta()
        this.nome = nome
        this.aposta = aposta
        this.telefone = telefone
        this.responsavel = responsavel
        this.endereco = endereco
        this.data = Utils.criarData()
        this.horaMinuto = Utils.criarHoraMinuto()
    }

    getNome() { return this.nome }

    getTelefone() { return this.telefone }

    getAposta() { return this.aposta }

    getEndereço() { return this.endereço }

    getResponsavel() { return this.responsavel }

    pontuacao(referencia) {
        let pontuacao = 0
        for (let i = 0; i < referencia.length; i++) {
            if (referencia[i] === this.aposta[i]) {
                pontuacao++
            }
        }
        return pontuacao
    }
}

export default Aposta