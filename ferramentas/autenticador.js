import BD from "../banco_de_dados/BD.js"
import Permissao from "./permissões.js";

class Autenticador {

    usuario;

    constructor(req) {
        this.usuario = BD.localizaUsuarioEmail(req.body.email)
    }

    verificaLogin(req) {
        return this.usuario.pass == req.body.password
    }

    verificaPermissaoADM() {
        return this.usuario.permissão == Permissao.ADM
    }

}

export default Autenticador