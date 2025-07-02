import './contact.css'
import ImageProfile from '../../assets/image-perfil.png'
function Contact() {
  return (
    <div id="container">
      <div className="container_content">
        <div className="container_content_img">
          <img src={ImageProfile} alt="Perfil" />
        </div>
        <div className="container_content_titulo">
          <h1>Gelson Andrade</h1>
          <p>Cataguases, Minas Gerais</p>
        </div>
        <div className="container_content_description">
          <p>"Front-end developer and avid reader"</p>
        </div>
        <div className="container_content_links">
          <a href="https://github.com/GelsonTeixeira">Git Hub</a>
          <a href="https://br.linkedin.com/in/gelson-teixeira-andrade">LinkedIn</a>
          <a href="https://www.instagram.com/gelson_andrade_/?next=%2Ffilipevalerim%2F">Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Contact