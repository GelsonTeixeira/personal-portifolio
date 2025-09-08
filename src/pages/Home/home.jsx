import "./home.css";
import FotoPerfil from '../../assets/image-perfil.png'
import Curriculo from '../../assets/curriculo-gelson-andrade.svg'
import { useNavigate } from "react-router-dom";
import NodeJsLogo  from '../../assets/node-light.svg'
import HtmlLogo from '../../assets/html-logo.svg';
import LogoCss from '../../assets/css-logo.svg';
import ReactLogo from '../../assets/react-light.svg';
import PythonLogo from '../../assets/python-light.svg'
import MongoLogo from '../../assets/mongo-logo.svg'

function Home() {
    const navigate = useNavigate()
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = Curriculo; 
      link.download = 'curriculo-gelson-andrade.svg';  
      link.click();
    };
  return (
    <main>
      <div id="container-content">
        <div className="container_img_perfil">
        <img src={FotoPerfil} alt="foto-perfil" />
        </div>
        
        <h2>My name is Gelson and I'm a <strong>programmer</strong></h2>
       
       
          <p>I'm Gelson, a programmer passionate about technology and development. Currently, I am improving my programming skills, creating projects and exploring new solutions to digital challenges. I have experience in various technologies and always seek to evolve, learning and applying new ideas to build functional and efficient interfaces.</p>
          <div className="container_buttons">
            <button onClick={()=> navigate("/contact")}>Get In Touch</button>
            <button onClick={handleDownload}>Download CR</button>
          </div>
          <h3>EXPERIENCE WITH</h3>
          <div className="container_img_tecks">
            <img className="react" src={ReactLogo} alt="Logo Reactjs" />
            <img src={PythonLogo} alt="Logo Python" />
            <img src={NodeJsLogo} alt="Logo Nodejs" />
            <img src={MongoLogo} alt="Logo Mongo" />
            <img src={HtmlLogo} alt="Logo HTML" />
            <img src={LogoCss} alt="Logo CSS" />
          </div>
        </div>
      
    </main>
  );    
}

export default Home;
