import '../Styles/PesquisaBar.css';
import Search from '../assets/search.png'
import { useState } from "react";
import { buscarClima } from "../services/weatherService";


function PesquisaBar({ setClima }){
     console.log("setClima:", setClima);
    console.log("tipo:", typeof setClima);

    const [cidade, setCidade] = useState("")

async function pesquisarClima(){ 
  try { 

    const dados = await buscarClima(cidade);
    console.log("Dados que vieram da API:", dados);
    setClima(dados); 

  }
  catch(error) { 
    
    console.error("Erro na requisição:", error.response?.data || error.message); 
  } 
}

    return (
        <div id="barSearch">

            <div id="barraPesquisa">

                <input 
                    type="text" 
                    placeholder="Digite uma cidade"
                    id="campoPesquisa"

                    value={cidade}

                    onChange={(e)=>setCidade(e.target.value)}

                /> 


                <button 
                    id="botaoPesquisa"
                    onClick={pesquisarClima}
                >

                    <img 
                        id='imgBuscar' 
                        src={Search} 
                        alt="buscar"
                    />

                </button>

            </div>

        </div>
    )
}

export default PesquisaBar;