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
        <h1>So, You’re Curious? Then Let’s Dive Into My Journey</h1>
        <p>My name is Gelson, and I have always been an active person with a passion for challenges. Some of my favorite hobbies include playing soccer and running, activities that bring me both enjoyment and discipline. This photo portrays one of the moments I competed, a moment that constantly inspires me to give my best. I consider myself naturally competitive, always striving to grow and overcome challenges, whether in sports or in my professional life.</p>
        <p>Speaking more about my journey, I have a strong interest in technology and am currently studying Systems Development at Rio Pomba Valley (RPV) while also pursuing a degree in Software Engineering. My first contact with this field was when I created my first website, an experience that sparked my curiosity and desire to understand more about programming and web development. Since then, I have been refining my skills and gaining new knowledge to become an increasingly qualified professional.</p>
        <p>In addition to technical skills, I believe that my communication abilities are a key strength. I find it easy to express myself, share ideas, and work in a team, which helps me both in academic and professional settings. Being able to listen and convey information clearly is essential in any field, and software development is no exception. I enjoy exchanging knowledge, learning from others, and contributing to efficient and innovative solutions.</p>
        <p>My goal is to continue growing, always seeking new learning opportunities and challenges in the tech industry. I know the path is demanding, but I am determined to face every obstacle with dedication and persistence. 🚀</p>
        </div>  

      </div>
    </div>

  );
}

export default About;
