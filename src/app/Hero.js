import variables from "../styles/variables.module.scss";
import app from "../styles/app.module.scss";
import memoji from "../../public/memoji.png";
import Image from "next/image";
import { Button } from "react-bootstrap";

function Hero() {
  return (
    <div className={app.home} id="home">
      <div className={app.left}>
        <section>
          <h1 className={variables.title_stroke} id="top">
            Hello 👋🏻, I'm
          </h1>
          <h1 className={variables.title_solid} id="mid">
            Andrei Agmata
          </h1>
          <h1 className={variables.title_stroke} id="bot">
            Web Developer
          </h1>
          <p>
            I create immersive digital experiences <br />
            that go beyond mere websites, <br /> aiming for innovation and
            <br />
            pushing boundaries. 🚀
          </p>
          <div className={app.heroButtons}>
            <Button
              size="lg"
              onClick={() => (window.location.href = "#contact")}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline-light"
              onClick={() => (window.location.href = "#projects")}
            >
              See my work
            </Button>
          </div>
        </section>
      </div>
      <div className={app.right}>
        <div className={app.bg}>
          <section className={app.overlay_container}>
            <img src="/memoji.png" alt="memoji"></img>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
