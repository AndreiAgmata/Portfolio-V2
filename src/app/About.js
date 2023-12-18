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
      <div className={info.left}>
        <div className={info.about}>
          <h1 className={variables.title_solid}>About Me</h1>
          <div className={info.infoWrapper}>
            <div className={info.info}>
              <p>
                Hey there, I'm Andrei, a final semester Computer Programming and
                Analysis student at Seneca College. <br /> <br />
                I've been fascinated by computers since I was young, which led
                me to dive into coding during high school. From Microsoft Visual
                Basic to Java, I've crafted various object-oriented programs,
                including an Adventure game that ignited my passion for software
                creation. <br /> <br /> Now, as I near graduation, I've been
                actively expanding my programming skills through diverse
                projects at Seneca, aiming to evolve further in software and web
                development with each line of code I write.
              </p>
              <div className={info.memoji}>
                <Image src={memoji} alt="me" width="220"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={info.right} id="stack">
        <div className={info.techStack}>
          <h1 className={variables.title_solid_dark}>Tech Stack</h1>
          <div className={info.stacks}>
            <div className={info.stack}>
              <h2>Frontend</h2>
              <div className={info.list}>
                <FaReact size="4em" />
                <TbBrandNextjs size="4em" />
                <IoLogoJavascript size="4em" />
                <FaCss3Alt size="4em" />
                <FaSass size="4em" />
                <FaBootstrap size="4em" />
              </div>
            </div>
            <div className={info.stack}>
              <h2>Backend</h2>
              <div className={info.list}>
                <SiExpress size="4em" />
                <FaNode size="4em" />
                <SiMongodb size="4em" />
                <IoLogoFirebase size="4em" />
              </div>
            </div>
            <div className={info.stack}>
              <h2>Languages</h2>
              <div className={info.list}>
                <SiCplusplus size="4em" />
                <SiC size="4em" />
                <FaSwift size="4em" />
                <FaJava size="4em" />
              </div>
            </div>
            <div className={info.stack}>
              <h2>Tools</h2>
              <div className={info.list}>
                <TbBrandVscode size="4em" />
                <SiXcode size="4em" />
                <FaGitSquare size="4em" />
                <SiAdobephotoshop size="4em" />
                <FaFigma size="4em" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
