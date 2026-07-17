import '../styles/Navbar.css';
import logo from '../assets/SapoLogo1.png'

function Navbar(){
    return (<div id="Body">
    <div id="logo">
            <img src={logo} alt="Logo de sapo"/>
            <h1>ClimaFroggy</h1>
    </div>



        <div id="About">
<a href="#about-section" className="botao-sobre-nos">
  Sobre Nós
</a>
        </div>

    </div>)
}


export default Navbar