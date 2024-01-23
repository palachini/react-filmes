import './CardFilme.css'

const CardFilme = ({ titulo, imagem, genero, corDeFundo }) => {
  return (
    <div className='cardFilme'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={titulo} />
      </div>
      <div className='rodape'>
        <h4>{titulo}</h4>
        <h5>{genero}</h5>
      </div>
    </div>
  )
}

export default CardFilme
