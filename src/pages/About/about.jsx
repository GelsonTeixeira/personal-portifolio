import './about.css'
import ImageAboutMe from '../../assets/image-about-me.jpg'
function About() {
  return(
    <div id="container-content-about">
      <div ><p className='about_me' >About me</p></div>
      <div className="container-boxes">
      <div className="container_img_about">
        <img src={ImageAboutMe} alt="Image About Me" />
      </div>
      <div className="container_texts">
        <h1>Curious about me? Here you have it:</h1>
        <p>My name is Gelson. I was born in the city of Miraí but officially registered in Cataguases. Since childhood, I have always been an active person with a passion for challenges. Some of my favorite hobbies include playing soccer and running—activities that bring me not only enjoyment but also discipline and a competitive spirit. The photo beside this text represents one of the times I competed, something that always drives me to perform at my best. I consider myself a naturally competitive person, always striving to improve and overcome challenges, whether in sports or in my professional life.</p>
        <p>Speaking more about my journey, I, Gelson, have a strong interest in technology and am currently studying software development. My first contact with this field was when I created my first website, an experience that sparked my curiosity and desire to understand more about programming and web development. Since then, I have been refining my skills and gaining new knowledge to become an increasingly qualified professional.</p>
        <p>In addition to technical skills, I believe that my communication abilities are a key strength. I find it easy to express myself, share ideas, and work in a team, which helps me both in academic and professional settings. Being able to listen and convey information clearly is essential in any field, and software development is no exception. I enjoy exchanging knowledge, learning from others, and contributing to efficient and innovative solutions.</p>
        <p>My goal is to continue growing, always seeking new learning opportunities and challenges in the tech industry. I know the path is demanding, but I am determined to face every obstacle with dedication and persistence. 🚀</p>
        </div>  

      </div>
    </div>

  );
}

export default About;
