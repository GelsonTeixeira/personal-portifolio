import './contact.css'
import ImageProfile from '../../assets/foto-corporativa.png'
import Curriculo from '../../assets/curriculo-gelson-andrade.png'
function Contact() {
  return (
    <div id="container">
      <div className="container_content">
        <div className="container_content_img">
          <img src={ImageProfile} alt="Perfil" />
        </div>
        <div className="container_content_titulo">
          <h1>Gelson Andrade</h1>
        </div>
        <div className="container_content_description">
          <p>"Learn more about me by clicking the links"</p>
        </div>
        <div className="container_content_links">
          <a href="https://github.com/GelsonTeixeira">Git Hub</a>
          <a href={Curriculo}>Resume us</a>
          <a href="https://br.linkedin.com/in/gelson-teixeira-andrade">LinkedIn</a>
          <a href="https://www.instagram.com/gelson_andrade_/?next=%2Ffilipevalerim%2F">Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Contact