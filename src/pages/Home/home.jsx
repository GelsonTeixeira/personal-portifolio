import "./home.css";
import FotoPerfil from '../../assets/image-perfil.jpg'
import { useNavigate } from "react-router-dom";
import NodeJsLogo  from '../../assets/node-light.svg'
import HtmlLogo from '../../assets/html-logo.svg';
import LogoCss from '../../assets/css-logo.svg';
import ReactLogo from '../../assets/react-light.svg';
import PythonLogo from '../../assets/python-light.svg'
import MongoLogo from '../../assets/mongo-logo.svg'
import SceneCanvas from '../../components/3D/SceneCanvas';
import FloatingShapes from '../../components/3D/FloatingShapes';
import ParticleField from '../../components/3D/ParticleField';
import TechStack3D from '../../components/3D/TechStack3D';

const TECHS = [
  { name: "React", icon: ReactLogo, color: "#61dafb", position: [-3.5, 0.3, 0] },
  { name: "Python", icon: PythonLogo, color: "#3776ab", position: [-2.1, -0.2, 0] },
  { name: "Node.js", icon: NodeJsLogo, color: "#68a063", position: [-0.7, 0.3, 0] },
  { name: "MongoDB", icon: MongoLogo, color: "#4db33d", position: [0.7, -0.2, 0] },
  { name: "HTML5", icon: HtmlLogo, color: "#e34f26", position: [2.1, 0.3, 0] },
  { name: "CSS3", icon: LogoCss, color: "#264de4", position: [3.5, -0.2, 0] },
];

function Home() {
    const navigate = useNavigate()
    const supports3D = true;
    const handleResume = () => {
      window.open("https://drive.google.com/file/d/12-_NyNBwO34K_Pi-QP-t2x4sXkTlSZSH/view?usp=sharing", "_blank");
    };
  return (
    <main>
      {supports3D && (
        <SceneCanvas>
          <ParticleField count={800} color="#ff8660" size={0.01} />
          <FloatingShapes />
        </SceneCanvas>
      )}
      <div id="container-content">
        <div className="container_img_perfil">
        <img src={FotoPerfil} alt="foto-perfil" />
        </div>

        <h2>My name is Gelson and I'm a <strong>programmer</strong></h2>


          <p>I'm Gelson, a programmer passionate about technology and development. Currently, I am improving my programming skills, creating projects and exploring new solutions to digital challenges. I have experience in various technologies and always seek to evolve, learning and applying new ideas to build functional and efficient interfaces.</p>
          <div className="container_buttons">
            <button onClick={()=> navigate("/hireme")}>Get In Touch</button>
            <button onClick={handleResume}>Request CR</button>
          </div>
          <h3>EXPERIENCE WITH</h3>

          {supports3D ? (
            <div className="tech-3d-container">
              <SceneCanvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                style={{ position: "relative", width: "100%", height: "280px" }}
              >
                <TechStack3D techs={TECHS} />
              </SceneCanvas>
            </div>
          ) : (
            <div className="container_img_tecks">
              <img className="react" src={ReactLogo} alt="Logo Reactjs" />
              <img src={PythonLogo} alt="Logo Python" />
              <img src={NodeJsLogo} alt="Logo Nodejs" />
              <img src={MongoLogo} alt="Logo Mongo" />
              <img src={HtmlLogo} alt="Logo HTML" />
              <img src={LogoCss} alt="Logo CSS" />
            </div>
          )}
        </div>

    </main>
  );
}

export default Home;
