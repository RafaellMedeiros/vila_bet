import BD from './banco_de_dados/BD.js'
import Usuario from './modelos/usuario.js'
import Aposta from './modelos/aposta.js'
import Permissao from './ferramentas/permissões.js'

import t from './banco_de_dados/teste.js'
import Jogo from './modelos/jogo.js'

class Init {

  static start() {
    const resultado = [1,2,0,2,1,2,0,1,1,2]
    
    const usuarioRafa = new Usuario('Rafa', 'Medeiros',
        '9999-9999', 'rafa@gmail.com', '111.111.111-12',
        '12345', Permissao.DEV, 'rua dos bobos' )
    
    const usuarioVi = new Usuario('Vi', 'Santos',
        '9999-9999', 'vi@gmail.com', '111.111.111-12',
        '11111', Permissao.USER, 'rua dos bobos' )
    
    const usuarioLiz = new Usuario('Liz', 'Santos',
        '9999-9999', 'Liz@gmail.com', '111.111.111-12',
        '12312', Permissao.ADM, 'rua dos bobos' )
    
    const aposta1 = new Aposta([0,1,2,0,1,2,0,1,2,0], 'Ted Silva', '9111- 1212', usuarioVi, 'rua depois da li')
    const aposta2 = new Aposta([1,2,0,1,1,1,1,1,1,1], 'Vandinha', '9121- 5212', usuarioVi, 'rua perto da li')
    
    BD.criarUsuarios(usuarioRafa)
    BD.criarUsuarios(usuarioVi)
    BD.criarUsuarios(usuarioLiz)

    BD.criarApostas(aposta1)
    BD.criarApostas(aposta2)

    console.log(BD.apostas)
    BD.apostas[0].aposta = resultado
    console.log(BD.apostas)
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


