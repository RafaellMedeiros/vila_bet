class Usuario {

    constructor(nome, sobrenome, telefone, email, cpf, pass, permissao, endereco) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.telefone = telefone
        this.email = email
        this.cpf = cpf
        this.pass = pass
        this.permissao = permissao
        this.endereco = endereco
    }

    getNome() { return this.nome }

    getSobrenome() { return this.getSobrenome }

    getTelefone() { return this.telefone }

    getEmail() { return this.email }

    getPass() { return this.pass }

    getPermissão() { return this.permissão }

    getEndereço() { return this.endereço }

    setTelefone(telefone) { this.telefone = telefone}

    setEmail(email) { this.email = email }

    setEndereço(endereco) { this.endereco = endereco }
}

export default Usuario