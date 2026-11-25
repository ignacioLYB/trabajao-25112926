function TarjetaTaller( {titulo, descripcion}) {
    return (
      <article className="card h-100">
        <div className="card h-100">
        <h2 className="h5 card_title">{titulo}</h2>
        <p className="card-text">{descripcion}</p>
        </div>
      </article>
    )
  }
  
  export default TarjetaTaller
  