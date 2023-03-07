import BD from './banco_de_dados/BD.js'
import Usuario from './modelos/usuario.js'
import Aposta from './modelos/aposta.js'
import Permissao from './ferramentas/permissões.js'

import t from './banco_de_dados/teste.js'
import Jogo from './modelos/jogo.js'

class Init {

  static start() {
    const resultado = [1,2,0,2,1,2,0,1,1,2]
    
    const usuarioRafa = new Usuario('Dev', '01',
        '9999-9999', 'dev@gmail.com', '111.111.111-12',
        'dev', Permissao.DEV, 'Rua placa mãe' )
    
    const usuarioLiz = new Usuario('Administrador', '01',
        '9999-9999', 'adm@gmail.com', '111.111.111-12',
        'adm', Permissao.ADM, 'Rua Central' )
    
    BD.criarUsuarios(usuarioRafa)
    BD.criarUsuarios(usuarioLiz)

  }

  static criatJogos(numJogos) {
    let j = 1;
    for (let i = 0; i < numJogos; i++) {
      const time1 = `Time ${j}`
      const idCasa = `time_${j}`
      j++
      const time2 = `Time ${j}`
      const idFora = `time_${j}`
      j++
      BD.criarJogo(new Jogo(`${idCasa}-${idFora}`,`${time1} vs ${time2}`,idCasa, time1, `empate_jogo_${i}`, idFora, time2))
    }
  }


}

export default Init


