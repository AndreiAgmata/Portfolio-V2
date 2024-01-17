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
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  let projectRefs = useRef([]);
  projectRefs.current = [];
  let projectTitle = useRef();

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: projectTitle,
          start: "top center+=400",
        },
      });

      tl.from(projectTitle, 0.7, { yPercent: 100, ease: Power3.easeOut });

      projectRefs.current.forEach((projectRef) => {
        const tl = new gsap.timeline({
          scrollTrigger: {
            trigger: projectRef,
            start: "top center+=200",
            // toggleActions: "play none none reverse",
          },
        });

        let q = gsap.utils.selector(projectRef);
        let buttons = [];
        if (q("#button1").length === 0) {
          buttons = [q("#button2")];
        } else {
          buttons = [q("#button1"), q("#button2")];
        }
        tl.from(q("#project-num"), {
          xPercent: -100,

          ease: "sine.inOut",
          duration: 0.5,
        })
          .from(
            q("#title"),
            {
              yPercent: 100,

              ease: Power3.easeOut,
              duration: 0.7,
            },
            0.2
          )
          .from(
            q("#image"),
            {
              opacity: 0,
              y: 30,
              ease: Power3.easeOut,
            },
            0.2
          )
          .from(
            q("#vLine"),
            {
              height: 0,

              ease: Power3.easeOut,
              duration: 1,
            },
            0.2
          )
          .from(
            q("#sub"),
            {
              xPercent: -100,

              ease: Power3.easeOut,
            },
            0.2
          )
          .from(
            q("#details"),
            {
              opacity: 0,
              ease: Power3.easeOut,
            },
            0.5
          )
          .from(
            q("#mobileImg"),
            {
              xPercent: -100,
              ease: Power3.easeOut,
            },
            0.5
          )
          .from(q("#hLine1"), {
            width: 0,
            ease: Power3.easeOut,
          })
          .from(q("#role"), {
            xPercent: -100,
            ease: Power3.easeOut,
          })
          .from(
            q("#hLine2"),
            {
              width: 0,
              ease: Power3.easeOut,
            },
            1
          )
          .staggerFrom(
            buttons,
            1,
            {
              opacity: 0,
              y: 30,
              ease: Power3.easeOut,
            },
            0.15
          );
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className={app.home} id="projects">
      <div className={projects.projects}>
        <div style={{ overflow: "hidden" }}>
          <h1
            className={variables.title_solid}
            ref={(el) => (projectTitle = el)}
          >
            Projects
          </h1>
        </div>
        {projectsData.map((project) => (
          <div
            className={projects.projectContainer}
            key={project.id}
            ref={addToRefs}
          >
            <div className={projects.projectInfo}>
              <div className={projects.sideBar}>
                <div style={{ overflow: "hidden" }}>
                  <h2 id="project-num">{project.id}</h2>
                </div>
                <div className={projects.verticalline} id="vLine"></div>
              </div>
              <div className={projects.content}>
                <div className={projects.titleWrapper}>
                  <h1 id="title">{project.title}</h1>
                </div>
                <div className={projects.subtitleWrapper}>
                  <h4 id="sub">{project.sub}</h4>
                </div>
                <div className={projects.details}>
                  <p id="details">{project.details}</p>
                  <div
                    className={projects.mobileImg}
                    style={{ overflow: "hidden" }}
                    id="mobileImg"
                  >
                    <img src={project.image} alt="Project Image"></img>
                    <div className={projects.overlay}></div>
                  </div>
                  <div className={projects.role} style={{ overflow: "hidden" }}>
                    <div className={projects.horizontalline} id="hLine1"></div>
                    <p id="role">
                      <strong>Role :</strong> {project.role}
                    </p>
                    <div className={projects.horizontalline} id="hLine2"></div>
                  </div>
                  {project.deployed === "true" ? (
                    <div className={projects.buttons}>
                      <Button
                        size="lg"
                        onClick={() => window.open(project.productionLink)}
                        id="button1"
                      >
                        Go to Project
                      </Button>
                      <Button
                        size="lg"
                        variant="outline-light"
                        onClick={() => window.open(project.githubLink)}
                        id="button2"
                      >
                        View Code
                      </Button>
                    </div>
                  ) : (
                    <div className={projects.buttons}>
                      <Button
                        size="lg"
                        variant="outline-light"
                        onClick={() => window.open(project.githubLink)}
                        id="button2"
                      >
                        View Code
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className={projects.imageSection}
              style={{ overflow: "hidden" }}
            >
              <div className={projects.imageWrapper}>
                <img alt="Project Image" src={project.image} id="image"></img>
              </div>
            </div>
          </div>
        ))}
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
