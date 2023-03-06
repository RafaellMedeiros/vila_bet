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
        return new Date(2022, 1, 19, 15, 30, 0).getTime();
    }
}

export default Utils