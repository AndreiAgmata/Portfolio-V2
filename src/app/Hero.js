import variables from "../styles/variables.module.scss";
import app from "../styles/app.module.scss";
import memoji from "../../public/memoji.png";
import Image from "next/image";
import { Button } from "react-bootstrap";

import { TimelineLite, Power3 } from "gsap";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Hero() {
  let header = useRef();
  let emoji = useRef();
  const tl = new gsap.timeline();

  useEffect(() => {
    let headerFirst = header.children[0].children[0];
    let headerSecond = headerFirst.nextSibling;
    let headerThird = headerSecond.nextSibling;

    let emojiImage = emoji;

    let ctx = gsap.context(() => {
      tl.staggerFrom(
        [headerFirst.children, headerSecond.children, headerThird.children],
        1,
        {
          opacity: 0,
          ease: Power3.easeOut,
          delay: 0.8,
        },
        0.15
      ).from(emojiImage, 1.3, { y: 500, ease: Power3.easeOut });
    });

    return () => ctx.revert();
  }, [tl]);

  return (
    <div className={app.home} id="home">
      <div className={app.left}>
        <section ref={(el) => (header = el)}>
          <div>
            <div>
              <h1 className={variables.title_stroke} id="top">
                Hello 👋🏻, I'm
              </h1>
            </div>
            <div>
              <h1 className={variables.title_solid} id="mid">
                Andrei Agmata
              </h1>
            </div>
            <div>
              <h1 className={variables.title_stroke} id="bot">
                Web Developer
              </h1>
            </div>
          </div>
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
            <img
              src="/memoji.png"
              alt="memoji"
              ref={(el) => (emoji = el)}
            ></img>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
