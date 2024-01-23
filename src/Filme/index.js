
import CardFilme from '../components/CardFilme'
import './Filme.css'

const Filme = (props) => {
  const cssCorPrimaria = { borderColor: props.corPrimaria }
  return (
    (props.filmes.length > 0) ?/*&&*/ <section className='filme' style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={cssCorPrimaria}>{props.nome}</h3>
      <div className='cardFilmes'>
        {props.filmes.map(cardFilme => <CardFilme key={cardFilme.titulo} corDeFundo={props.corPrimaria} titulo={cardFilme.titulo} genero={cardFilme.genero} imagem={cardFilme.imagem} ranking={cardFilme.ranking} />)}
      </div>
    </section>
      :
      ''
  )
}

export default Filme