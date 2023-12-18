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

function About() {
  return (
    <div className={app.home} id="about">
      <div className={info.aboutContainer}>
        <div className={info.about}>
          <div className={info.headerContainer}>
            <h1 className={variables.title_solid}>About Me</h1>
          </div>
          <div className={info.infoWrapper}>
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
