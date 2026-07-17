import '../styles/Froggy.css';
import Card from './Card';

function Froggy ({clima}){
    return(
            <div id="posicionadorSapo">
    
      <div id="container">
       
        <div id="olhoDireito">
          <div id="escleraDireita">
            <div id="pupilaDireita"></div>
          </div>
        </div>

       
        <div id="olhoEsquerdo">
          <div id="escleraEsquerda">
            <div id="pupilaEsquerda"></div>
          </div>
        </div>

       
        <div className="narina narina-esquerda"></div>
        <div className="narina narina-direita"></div>
        <div id='card'><Card clima={clima}/></div>
        
        </div>
        </div>

    )
}

export default Froggy