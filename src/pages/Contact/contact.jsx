import './contact.css'
import ImageProfile from '../../assets/foto-corporativa.png'
import Curriculo from '../../assets/curriculo-gelson-andrade.svg'

import GitHubLogo from '../../assets/github-logo.svg'
import LinkedInLogo from '../../assets/linkedin-logo.svg'
import InstagramLogo from '../../assets/instagram-logo.svg'

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
          <a href="https://github.com/GelsonTeixeira">
            <img src={GitHubLogo} alt="GitHub" className="logo github" />
            GitHub
          </a>
          <a href={Curriculo}>
            <img src={Curriculo} alt="Resume" className="logo resume" />
            Resume
          </a>

          <a href="https://br.linkedin.com/in/gelson-teixeira-andrade">
            <img src={LinkedInLogo} alt="LinkedIn" className="logo linkedin" />
            LinkedIn
          </a>
          <a href="https://www.instagram.com/gelson_andrade_/?next=%2Ffilipevalerim%2F">
            <img src={InstagramLogo} alt="Instagram" className="logo instagram" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
