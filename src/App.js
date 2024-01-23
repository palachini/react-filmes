import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Filme from './Filme';

function App() {
  const generos = [
    {
      nome: 'Ação',
      corPrimaria: '#FF3333',
      corSecundaria: '#FF333333',
    },
    {
      nome: 'Animação',
      corPrimaria: '#ffcc00',
      corSecundaria: '#ffcc0033',
    },
    {
      nome: 'Aventura',
      corPrimaria: '#4caf50',
      corSecundaria: '#4caf5033',
    },
    {
      nome: 'Comédia',
      corPrimaria: '#ff6666',
      corSecundaria: '#ff666633',
    },
    {
      nome: 'Docuentário',
      corPrimaria: '#3399cc',
      corSecundaria: '#3399cc33',
    },
    {
      nome: 'Drama',
      corPrimaria: '#c0392b',
      corSecundaria: '#c0392b33',
    },
    {
      nome: 'Ficção Científica',
      corPrimaria: '#7f8c8d',
      corSecundaria: '#7f8c8d33',
    },
    {
      nome: 'Musical',
      corPrimaria: '#ff9933',
      corSecundaria: '#ff993333',
    },
    {
      nome: 'Romance',
      corPrimaria: '#ff66b2',
      corSecundaria: '#ff66b233',
    },
    {
      nome: 'Suspense',
      corPrimaria: '#800080',
      corSecundaria: '#80008033',
    },
  ];
  const [filmes, setFilmes] = useState([])

  const aoNovoFilmeAdicionado = (filme) => {
    setFilmes([...filmes, filme])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario generos={generos.map(genero => genero.nome)} aoFilmeCadastrado={filme => aoNovoFilmeAdicionado(filme)} />
      {generos.map(genero => <Filme
        key={genero.nome}
        nome={genero.nome}
        corPrimaria={genero.corPrimaria}
        corSecundaria={genero.corSecundaria}
        filmes={filmes.filter(filme => filme.genero === genero.nome)}
      />)}

    </div>
  );
}

export default App;
