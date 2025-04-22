import './contact.css'
function Contact(){
 return(
   <div id="container">
      <div className="container_content">
        <div className="container_content_img">
          <img src="/Images/image-perfil.png" alt="Perfil" />
        </div>
        <div className="container_content_titulo">
          <h1>Gelson Andrade</h1>
          <p>Cataguases, Minas Gerais</p>
        </div>
        <div className="container_content_description">
          <p>"Front-end developer and avid reader"</p>
        </div>
        <div className="container_content_links">
          <a href="https://google.com">GitHub</a>
          <a href="#">Frontend Mentor</a>
          <a href="#">LinkedIn</a>
          <a href="https://x.com/GelsonOficialbr">Twitter</a>
          <a href="https://www.instagram.com/gelson_andrade_/?next=%2Ffilipevalerim%2F">Instagram</a>
        </div>
      </div>
    </div>
 )
}

export default Contact