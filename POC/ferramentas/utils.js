import BD from '../banco_de_dados/BD.js'



class Utils {
    static tranformaResultado(apostas) {
        return apostas.map(aposta  => {
            switch (aposta) {
                case '1':
                    return aposta = 'Casa'
                case '2':
                    return aposta = 'Fora'
                default:
                    return aposta = 'Empate'
            }
        })
    }

    static criarData() {
        const hoje = new Date();
        const dia = hoje.getDate();
        const mes = hoje.getMonth() + 1;
        const ano = hoje.getFullYear();

        return `${dia}/${mes}/${ano}`
    }

    static criarHoraMinuto() {
        const agora = new Date();
        const hora = agora.getHours();
        const minuto = agora.getMinutes();

        return `${hora}:${minuto}`
    }

    static criarIdAposta() {
        return new Date().getTime();
    }

    static geraRanking(apostaUsuario) {
        const apostasPontuacao = Utils.geraPontuacao(BD.apostas, apostaUsuario)
        apostasPontuacao.sort(function(a, b) {
            return b.pontuacao - a.pontuacao;
          });
        return apostasPontuacao
    }

    static geraPontuacao(apostas, apostaUsuario) {
        const resultado = BD.resultado
        return apostas.map(aposta => {
            let pontuacao = 0;
            if (resultado) {
                for (let i = 0; i < resultado.length; i++) {
                    if (aposta.aposta[i] == resultado[i]) {
                        pontuacao++
                    }
                }
            }
            aposta.pontuacao = pontuacao
            return aposta
        })
    }
}

export default Utils