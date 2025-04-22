import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/Arquivos/curriculo-gelson-andrade.png'; 
      link.download = 'curriculo-gelson-andrade.png';  
      link.click();
    };
  return (
    <main>
      <div id="container-content">
        <div className="container_img_perfil">
        <img src="/Images/image-perfil.png" alt="foto-perfil" />
        </div>
        
        <h2>My name is Gelson and I'm a <strong>programmer</strong></h2>
       
       
          <p>I'm Gelson, a programmer passionate about technology and development. Currently, I am improving my programming skills, creating projects and exploring new solutions to digital challenges. I have experience in various technologies and always seek to evolve, learning and applying new ideas to build functional and efficient interfaces.</p>
          <div className="container_buttons">
            <button onClick={()=> navigate("/contato")}>Get In Touch</button>
            <button onClick={handleDownload}>Download CR</button>
          </div>
          <h3>EXPERIENCE WITH</h3>
          <div className="container_img_tecks">
            <img src='./Logos/javascript-light.png' alt="Logo Javacript" />
            <img src='./Logos/nodejs-light.png' alt="Logo Nodejs" />
            <img src='./Logos/html-light.png' alt="Logo HTML" />
            <img src='./Logos/css-light.png' alt="Logo CSS" />
            <img className="react"  src='./Logos/reactjs-light.png' alt="Logo Reactjs" 
          
              />
          </div>
        </div>
      
    </main>
  );    
}

export default Home;
