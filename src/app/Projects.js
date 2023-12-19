import Button from "../../node_modules/react-bootstrap/esm/Button";
import app from "../styles/app.module.scss";
import projects from "../styles/projects.module.scss";
import variables from "../styles/variables.module.scss";
import Image from "next/image";
import Mentor from "../../public/MentorMatch.png";
import projectsData from "../../public/projects.json";
import gsap from "gsap";
import { Power3 } from "gsap";
import { useEffect, useRef } from "react";

function Projects() {
  let pageHeader = useRef();
  let number = useRef();
  let title = useRef();
  let subtitle = useRef();
  let details = useRef();
  let role = useRef();
  let vLine = useRef();
  let hLineTop = useRef();
  let hLineBot = useRef();
  let button = useRef();
  let image = useRef();
  let mobileImg = useRef();

  const tl = new gsap.timeline();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(
        image,
        1.2,
        { xPercent: -100, opacity: 0, ease: Power3.easeOut },
        "Start"
      );

      tl.from(
        pageHeader,
        0.7,
        {
          yPercent: 100,
          opacity: 0,
          ease: Power3.easeOut,
        },
        "Start"
      )
        .from(
          number,
          1.2,
          {
            xPercent: -100,
            opacity: 0,
            ease: Power3.easeOut,
          },
          0.15
        )
        .from(
          title,
          1.2,
          {
            yPercent: 100,
            ease: Power3.easeOut,
          },
          0.15
        )
        .from(
          subtitle,
          1.2,
          {
            yPercent: 100,
            opacity: 0,
            ease: Power3.easeOut,
          },
          0.15
        )
        .from(
          details,
          1.2,
          {
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.8,
          },
          0.15
        )
        .from(
          mobileImg,
          1.2,
          {
            scale: 0,
            opacity: 0,
            ease: Power3.easeOut,
          },
          1.2
        )
        .from(
          role,
          1.2,
          {
            xPercent: -100,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 1,
          },
          0.15
        )
        .from(
          vLine,
          3.6,
          {
            height: 0,
            opacity: 0,
            ease: Power3.easeOut,
          },
          0.15
        )
        .from(
          hLineTop,
          1.2,
          {
            width: 0,
            opacity: 0,
            ease: Power3.easeOut,
          },
          0.5
        )
        .from(
          hLineBot,
          1.2,
          {
            width: 0,
            opacity: 0,
            ease: Power3.easeOut,
          },
          0.7
        )
        .staggerFrom(
          [button.children[0], button.children[1]],
          1.2,
          {
            opacity: 0,
            ease: Power3.easeOut,
          },
          0.3
        );
    });

    return () => ctx.revert();
  });

  return (
    <div className={app.home} id="projects">
      <div className={projects.projects}>
        <div style={{ overflow: "hidden" }}>
          <h1 className={variables.title_solid} ref={(el) => (pageHeader = el)}>
            Projects
          </h1>
        </div>
        <div className={projects.projectContainer}>
          <div className={projects.projectInfo}>
            <div className={projects.sideBar}>
              <div style={{ overflow: "hidden" }}>
                <h2 ref={(el) => (number = el)}>01</h2>
              </div>
              <div
                className={projects.verticalline}
                ref={(el) => (vLine = el)}
              ></div>
            </div>
            <div className={projects.content}>
              <div className={projects.titleWrapper}>
                <h1 ref={(el) => (title = el)}>Mentor Match</h1>
              </div>
              <div className={projects.subtitleWrapper}>
                <h4 ref={(el) => (subtitle = el)}>
                  Full-stack tutoring application
                </h4>
              </div>
              <div className={projects.details}>
                <p ref={(el) => (details = el)}>
                  A comprehensive mentoring platform featuring seamless
                  integration of chat, payment capabilities, and an advanced
                  scheduling system, ensuring a fully functional and cohesive
                  user experience.
                </p>
                <div
                  className={projects.mobileImg}
                  ref={(el) => (mobileImg = el)}
                >
                  <img src="/MentorMatch.png" alt="Project Image"></img>
                  <div className={projects.overlay}></div>
                </div>
                <div className={projects.role} style={{ overflow: "hidden" }}>
                  <div
                    className={projects.horizontalline}
                    ref={(el) => (hLineTop = el)}
                  ></div>
                  <p ref={(el) => (role = el)}>
                    <strong>Role :</strong> Lead Frontend developer, Assistant
                    backend developer
                  </p>
                  <div
                    className={projects.horizontalline}
                    ref={(el) => (hLineBot = el)}
                  ></div>
                </div>
                <div className={projects.buttons} ref={(el) => (button = el)}>
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open("https://prj-566-666-naa-team-01.vercel.app")
                    }
                  >
                    Go to Project
                  </Button>
                  <Button
                    size="lg"
                    variant="outline-light"
                    onClick={() =>
                      window.open("https://github.com/AndreiAgmata/MentorMatch")
                    }
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={projects.imageSection} style={{ overflow: "hidden" }}>
            <div className={projects.imageWrapper} ref={(el) => (image = el)}>
              <img alt="Project Image" src="/MentorMatch.png"></img>
            </div>
          </div>
        </div>
        <div className={projects.viewMoreWrapper}>
          <Button
            size="lg"
            className={projects.viewMore}
            onClick={() => window.open("https://github.com/AndreiAgmata")}
          >
            View More in GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
