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
          <div>
            <Button size="lg">Get in Touch</Button>
          </div>
        </section>
      </div>
      <div className={app.right}>
        <div className={app.bg}>
          <section className={app.overlay_container}>
            <Image src={memoji} alt="me" width="300" />
            {/* <Button variant="secondary" size="lg">
        See My Work
      </Button> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
