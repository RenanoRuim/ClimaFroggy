import '../Styles/About.css';
import NuvemImg from '../assets/sun.png'; // Sua imagem de nuvem
import Sapo from '../assets/SapoLogo1.png' // Se tiver as imagens dos sapinhos


function About() {
  return (
    <div id="about-section">
      
      {/* Botão/Título "Sobre Nós" no topo */}
      <div id="sobreNos">
        <h1>Sobre Nós</h1>
      </div>

      {/* Área Central: Nuvem, Texto e Sapinhos */}
      <div className="conteudo-central">
        
        {/* Sapinho da Esquerda (Opcional - remova as tags img se for fazer em CSS puro depois) */}
        <div className="sapo-decorativo sapo-esq">
          <img src={Sapo} alt="Sapo Decorativo Esquerda" />
        </div>

        {/* Bloco da Nuvem com Texto sobreposto */}
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