import '../styles/Card.css';

function Card({clima}) {

  if(!clima){
    return (
      <div className="card-clima-box">
        <h2>Pesquise uma cidade 🌎</h2>
      </div>
    )
  }

  return (
    <div className="card-clima-box">
     
      <div className="titulo-card">
        <h1> {clima.cidade}: {clima.temperatura}°</h1>
        <h2>{clima.condicao}</h2>
      </div>

     
      <div className="conteudo-card">
       
        <div className="coluna-card">
          <div className="info-grupo">
            <h3>Vento:</h3>
            <p>{clima.vento} KM/H</p>
          </div>
          <div className="info-grupo">
            <h3>Umidade:</h3>
            <p>{clima.umidade}%</p>
          </div>
        </div>

        
        <div className="coluna-centro">
          <div className="lua-icone">
            <img 
            src={clima.icone}
            alt="clima"
          />
          </div> 
         
        </div>

       
        <div className="coluna-card alinhado-direita">
          <div className="info-grupo">
            <h3>Sensação:</h3>
            <p>{clima.sensacao}°</p>
          </div>
          <div className="info-grupo">
            <h3>Uv:</h3>
            <p>{clima.uv}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;