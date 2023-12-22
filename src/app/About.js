import app from "../styles/app.module.scss";
import info from "../styles/info.module.scss";
import variables from "../styles/variables.module.scss";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiXcode } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiC } from "react-icons/si";
import { FaSwift } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import Image from "next/image";
import memoji from "../../public/memoji2.png";
import gsap from "gsap";
import { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function About() {
  let aboutTitle = useRef();
  let aboutCard = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: aboutTitle,
          start: "top center+=400",
          // toggleActions: "play none none reverse",
        },
      });

      tl.from(aboutTitle, 0.7, {
        yPercent: 100,
        ease: Power3.easeOut,
      }).from(aboutCard, 1, { opacity: 0, ease: Power3.easeOut });
    });

    return () => ctx.revert();
  });
  return (
    <div className={app.home} id="about">
      <div className={info.aboutContainer}>
        <div className={info.about}>
          <div className={info.headerContainer}>
            <h1
              ref={(el) => (aboutTitle = el)}
              className={variables.title_solid}
            >
              About Me
            </h1>
          </div>

          <div className={info.infoWrapper} ref={(el) => (aboutCard = el)}>
            <div className={info.info}>
              <p>
                I am a passionate advocate for user-centric design, driven by
                the belief that exceptional user experiences lie at the heart of
                every successful product. With a foundation in design thinking
                and a keen understanding of user psychology, I immerse myself in
                the art of crafting seamless, intuitive experiences.
              </p>
              <div className={info.memoji}>
                <Image src={memoji} alt="me"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
