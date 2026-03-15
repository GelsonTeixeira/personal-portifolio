import './contact.css'
import ImageProfile from '../../assets/foto-corporativa.png'
import Curriculo from '../../assets/curriculo-gelson-andrade.svg'

import GitHubLogo from '../../assets/github-logo.svg'
import LinkedInLogo from '../../assets/linkedin-logo.svg'
import InstagramLogo from '../../assets/instagram-logo.svg'

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="contact-subtitle">
            Connect with me through social media or download my resume.
          </p>
        </div>

        {/* Profile Card */}
        <div className="contact-card">
          <div className="contact-profile">
            <div className="contact-avatar">
              <img src={ImageProfile} alt="Gelson Andrade" />
            </div>
            <h2 className="contact-name">Gelson Andrade</h2>
            <p className="contact-bio">
              "Learn more about me by clicking the links"
            </p>
          </div>

          <div className="contact-links">
            <a href="https://github.com/GelsonTeixeira" target="_blank" rel="noopener noreferrer" className="contact-link">
              <img src={GitHubLogo} alt="GitHub" className="logo github" />
              <span>GitHub</span>
            </a>
            <a href={Curriculo} download className="contact-link">
              <img src={Curriculo} alt="Resume" className="logo resume" />
              <span>Resume</span>
            </a>
            <a href="https://br.linkedin.com/in/gelson-teixeira-andrade" target="_blank" rel="noopener noreferrer" className="contact-link">
              <img src={LinkedInLogo} alt="LinkedIn" className="logo linkedin" />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/gelson_andrade_/?next=%2Ffilipevalerim%2F" target="_blank" rel="noopener noreferrer" className="contact-link">
              <img src={InstagramLogo} alt="Instagram" className="logo instagram" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
