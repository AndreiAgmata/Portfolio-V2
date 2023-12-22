import variables from "../styles/variables.module.scss";
import app from "../styles/app.module.scss";
import memoji from "../../public/memoji.png";
import Image from "next/image";
import { Button } from "react-bootstrap";

import { Power3 } from "gsap";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Hero() {
  let header = useRef();
  let text = useRef();
  let buttons = useRef();
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
        0.6,
        {
          yPercent: 100,

          ease: Power3.easeOut,
          delay: 3.6,
        },
        0.15
      )
        .staggerFrom(
          [
            text.children[0],
            text.children[1],
            text.children[2],
            text.children[3],
          ],
          0.8,
          { xPercent: -100, ease: Power3.easeOut },
          0.15
        )
        .staggerFrom(
          [buttons.children[0].children[0], buttons.children[1].children[0]],
          1,
          {
            scale: 0,
            ease: Power3.easeOut,
          },
          0.3
        )
        .from(emojiImage, 1.3, { y: 500, ease: Power3.easeOut }, 3.6);
    });

    return () => ctx.revert();
  }, [tl]);

  return (
    <div className={app.home} id="home">
      <div className={app.left}>
        <section ref={(el) => (header = el)}>
          <div>
            <div style={{ overflow: "hidden" }}>
              <h1 className={variables.title_stroke} id="top">
                Hello 👋🏻 , I'm
              </h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h1 className={variables.title_solid} id="mid">
                Andrei Agmata
              </h1>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h1 className={variables.title_stroke} id="bot">
                Web Developer
              </h1>
            </div>
          </div>
          <div
            ref={(el) => (text = el)}
            className={app.text}
            style={{ overflow: "hidden" }}
          >
            <p>I create immersive digital experiences</p>
            <p>that go beyond mere websites,</p>
            <p>aiming for innovation and</p>
            <p>pushing boundaries. 🚀</p>
          </div>

          <div className={app.heroButtons} ref={(el) => (buttons = el)}>
            <div style={{ overflow: "hidden" }}>
              <Button
                size="lg"
                onClick={() => (window.location.href = "#contact")}
              >
                Get in Touch
              </Button>
            </div>
            <div style={{ overflow: "hidden" }}>
              <Button
                size="lg"
                variant="outline-light"
                onClick={() => (window.location.href = "#projects")}
              >
                See my work
              </Button>
            </div>
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
