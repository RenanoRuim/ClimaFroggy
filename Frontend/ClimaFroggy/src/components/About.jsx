import '../styles/About.css';
import NuvemImg from '../assets/sun.png'; 
import Sapo from '../assets/SapoLogo1.png';


function About() {
  return (
    <div id="about-section">
      
    
      <div id="sobreNos">
        <h1>Sobre Nós</h1>
      </div>

     
      <div className="conteudo-central">
        
    
        <div className="sapo-decorativo sapo-esq">
          <img src={Sapo} alt="Sapo Decorativo Esquerda" />
        </div>

        <div className="container-nuvem">
          <img src={NuvemImg} className="nuvem-background" alt="Nuvem de fundo" />
          <div className="texto-sobreposto">
            <p>
              O ClimaFroggy nasceu do desejo de transformar a simples consulta do clima em um momento mais leve e divertido!
              Eu sou desenvolvedor e este é um pequeno projeto pessoal que fiz para colocar meus aprendizados em prática. Mas
              o verdadeiro charme do site vem de outro lugar: todas as ilustrações e artes incríveis de sapinhos que você vê por
              aqui foram desenhadas com muito amor pela minha namorada! 🎨✨
              Unindo tecnologia e arte, criamos esse espacinho para deixar o seu dia
               — seja ele de sol ou de chuva — um pouquinho mais alegre. Obrigado por nos visitar!
            </p>
          </div>
        </div>

        {/* Sapinho da Direita */}
        <div className="sapo-decorativo sapo-dir">
          <img src={Sapo} alt="Sapo Decorativo Direita" />
        </div>

      </div>
    </div>
  );
}

export default About;