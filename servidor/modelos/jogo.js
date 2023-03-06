class Jogo {
    constructor(id, nome, idCasa, nomeCasa, idEmpate, idFora, nomeFora) {
        this.id = id
        this.nome = nome;
        this.idCasa = idCasa;
        this.nomeCasa = nomeCasa
        this.idEmpate = idEmpate;
        this.idFora = idFora;
        this.nomeFora = nomeFora;
    }

    getNome() { return this.nome; }
    getIdCasa() { return this.idCasa; }
    getNomeCasa() { return this.nomeCasa; }
    getIdEmpate() { return this.idEmpate; }
    getIdFora() { return this.idFora; }
    getNomeFora() { return this.nomeFora; }
    getId() { return this.id; }
}

export default Jogo