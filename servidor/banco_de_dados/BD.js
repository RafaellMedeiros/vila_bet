import Aposta from "../modelos/aposta.js";
import Usuario from "../modelos/usuario.js";

class BD {

    static usuarios = []
    static apostas = []
    static jogos = []

    static criarUsuarios(usuario) {
        BD.usuarios.push(usuario);
    }

    static localizaUsuarioEmail(email) {
        console.log("Buscando o usuario " + email)
        let user
        BD.usuarios.forEach(usuario => {
            if (usuario.email === email) {
                user = usuario
            }
        })
        return user
    }

    static lerUsuarios(index) {
        return BD.usuarios[index];
    }

    static atualizarUsuarios(index, updatedUser) {
        BD.usuarios[index] = updatedUser;
    }

    static removerUsuarios(index) {
        BD.usuarios.splice(index, 1)
    }
    
    static criarApostas(user) {
        BD.apostas.push(user)
    }

    static lerApostas(index) {
        const dado = BD.apostas[index]
        return new Aposta(dado.aposta, dado.nome, dado.telefone, dado.responsavel, dado.endereco)
    }

    static atualizarApostas(index, updatedUser) {
        BD.apostas[index] = updatedUser
    }

    static removerApostas(index) {
        BD.apostas.splice(index, 1)
    }

    static criarJogo(jogo) {
        BD.jogos.push(jogo)
    }

    static usuarios() {
        for(let i = 0; i < BD.usuarios.length; i++) {
          console.log(BD.usuarios[i])
        }
    }

}

export default BD
