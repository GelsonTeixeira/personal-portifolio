import "./home.css";
import FotoPerfil from '../../assets/image-perfil.png'
import { useNavigate } from "react-router-dom";
import JavaScriptLogo from '../../assets/javascript-light.png';
import NodeJsLogo  from '../../assets/nodejs-light.png'
import HtmlLogo from '../../assets/html-light.png';
import LogoCss from '../../assets/css-light.png';
import ReactLogo from '../../assets/reactjs-light.png';


function Home() {
    const navigate = useNavigate()
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/assets/curriculo-gelson-andrade.png'; 
      link.download = 'curriculo-gelson-andrade.png';  
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
            <button onClick={()=> navigate("/contato")}>Get In Touch</button>
            <button onClick={handleDownload}>Download CR</button>
          </div>
          <h3>EXPERIENCE WITH</h3>
          <div className="container_img_tecks">
            <img src={JavaScriptLogo} alt="Logo Javacript" />
            <img src={NodeJsLogo} alt="Logo Nodejs" />
            <img src={HtmlLogo} alt="Logo HTML" />
            <img src={LogoCss} alt="Logo CSS" />
            <img className="react" src={ReactLogo} alt="Logo Reactjs" 
          
              />
          </div>
        </div>
      
    </main>
  );    
}

export default Home;
