import "./hero.css";
import heroImg from "./img/hero.png";

function Hero() {
  const scrollToContact = () => {
    const contact = document.querySelector("#contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Hi, I'm Fathir Ramdan Maulani</h1>
        <p>a Web Development</p>
        <br />
        <span>A web development and student from SMKN 1 BANJAR</span>
        <br />
        <button onClick={scrollToContact}>Contact Me</button>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
