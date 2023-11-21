import {describe, it, expect} from 'vitest'
import axios from 'axios'
describe('Primeiro teste da aplicação', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })
})
describe.skip('Cadastro Filme', () => {
  it('Deve cadastrar um filme com sucesso', async () => {
    const filme = {
      id:1,
      titulo: 'vingadores',
      descricao: 'filme dos vingadores',
      foto:'enderecodaimg'
    }
  }

  )
})
describe.skip('Cadastro Filme', () => {
  it('Deve cadastrar um filme com sucesso', async () => {
    const filme = {
      id:1,
      titulo: 'A freira 2',
      descricao: 'filme da freira',
      foto:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEtpnOnlSI3UkF1Xkf_1pboQcKZ5nvIzhKw6Xqs4d_8xKF6JKN'
    }
  }

  )
})
describe('Cadastro Filme', () => {
    it('Deve cadastrar um filme cadastrado', async () => {
        const filme = {
            id: 1,
            titulo: 'barbie sereia',
            descricao: 'Filme da Barbie',
            foto: 'https://m.media-amazon.com/images/M/MV5BY2RmY2JjYTMtM2MzOC00ZTE5LWE3ZjktNWE3NzdkNWZmOTc4XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_FMjpg_UX1000_.jpg',
        }
        const resposta =  await axios.post('http://localhost:3000/filmes', filme)
        expect(resposta.status).toBe(201)
        expect(resposta.data).toEqual(filme)
        //1) Buscar o filme cadastrado;
        const listarfilmes = await axios.get('http://localhost:3000/filmes')
        const filmeCadastrado = listarfilmes.data

        //2) Verificar se o filme devolvido é igual ao que nós cadastramos;
        expect(filmeCadastrado[0]).toEqual(filme)
        
        //3) Verificar se o tamanho da lista é igual a 1
        expect(filmeCadastrado.length).toBe(1)
    })
    it('Deve cadastrar um filme com sucesso', async () => {
      const filme = {
          id: 2, 
          titulo: 'Vingadores',
          descricao: 'Filme dos Vingadores',
          foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
      }
      const resposta =  await axios.post('http://localhost:3000/filmes', filme)
    /*expect(resposta.status).toBe(201)
      expect(resposta.data).toEqual(filme)*/
      //1) Buscar o filme cadastrado;
      const listarfilmes = await axios.get('http://localhost:3000/filmes')
      const filmeCadastrado = listarfilmes.data

      //2) Verificar se o filme devolvido é igual ao que nós cadastramos;
      expect(filmeCadastrado[0]).toEqual(filme)
      
      //3) Verificar se o tamanho da lista é igual a 1
      expect(filmeCadastrado.length).toBe(1)
  })
})