class Utils {
    static tranformaResultado(apostas) {
        return apostas.map(aposta => {
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
}

export default Utils