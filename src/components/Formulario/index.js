import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {

  const rankings = [
    'Muito Top',
    'Top',
    'Legal',
    'Até que vale o tempo perdido',
    'Meme'
  ];

  const [titulo, setTitulo] = useState('')
  const [imagem, setImagem] = useState('')
  const [genero, setGenero] = useState('')
  const [ranking, setRanking] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoFilmeCadastrado({
      titulo,
      genero,
      imagem,
      ranking
    })
    setGenero('')
    setImagem('')
    setRanking('')
    setTitulo('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o cadastro do filme:</h2>
        <CampoTexto
          obrigatorio={true}
          label="Título"
          placeholder="Digite o título do filme"
          valor={titulo}
          aoAlterado={valor => setTitulo(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Gênero"
          itens={props.generos}
          valor={genero}
          aoAlterado={valor => setGenero(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o caminho da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Ranking"
          itens={rankings}
          valor={ranking}
          aoAlterado={valor => setRanking(valor)}
        />
        <Botao>
          Adicionar Filme
        </Botao>
      </form>
    </section>
  )
}

export default Formulario