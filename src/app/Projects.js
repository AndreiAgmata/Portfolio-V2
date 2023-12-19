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
  // let project = useRef([]);
  // project.current = [];

  let projectRefs = useRef([]);
  projectRefs.current = [];

  const tl = new gsap.timeline();

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      projectRefs.current.forEach((projectRef) => {
        tl.from(
          projectRef.children[1].children[0],
          1.2,
          { xPercent: -100, opacity: 0, ease: Power3.easeOut },
          "Start"
        );

        tl.from(
          projectRef.children[0].children[1].children[0].children[0],
          1.2,
          {
            yPercent: 100,
            opacity: 0,
            ease: Power3.easeOut,
          },
          0.15
        )
          .from(
            projectRef.children[0].children[0].children[0].children[0],
            1.2,
            {
              xPercent: -100,
              opacity: 0,
              ease: Power3.easeOut,
            },
            0.15
          )
          .from(
            projectRef.children[0].children[1].children[1].children[0],
            1.2,
            {
              yPercent: 100,
              opacity: 0,
              ease: Power3.easeOut,
            },
            0.15
          )
          .from(
            projectRef.children[0].children[1].children[2].children[0],
            1.2,
            {
              opacity: 0,
              ease: Power3.easeOut,
              delay: 0.8,
            },
            0.15
          )
          .from(
            projectRef.children[0].children[1].children[2].children[1],
            1.2,
            {
              scale: 0,
              opacity: 0,
              ease: Power3.easeOut,
            },
            1.2
          )
          .from(
            projectRef.children[0].children[1].children[2].children[2]
              .children[1],
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
            projectRef.children[0].children[0].children[1],
            3.6,
            {
              height: 0,
              opacity: 0,
              ease: Power3.easeOut,
            },
            0.15
          )
          .from(
            projectRef.children[0].children[1].children[2].children[2]
              .children[0],
            1.2,
            {
              width: 0,
              opacity: 0,
              ease: Power3.easeOut,
            },
            0.5
          )
          .from(
            projectRef.children[0].children[1].children[2].children[2]
              .children[2],
            1.2,
            {
              width: 0,
              opacity: 0,
              ease: Power3.easeOut,
            },
            0.7
          )
          .staggerFrom(
            [
              projectRef.children[0].children[1].children[2].children[3]
                .children[0],
              projectRef.children[0].children[1].children[2].children[3]
                .children[1],
            ],
            0.7,
            {
              opacity: 0,
              ease: Power3.easeOut,
            },
            0.2
          );
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className={app.home} id="projects">
      <div className={projects.projects}>
        <div style={{ overflow: "hidden" }}>
          <h1 className={variables.title_solid}>Projects</h1>
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
                  <h2>{project.id}</h2>
                </div>
                <div className={projects.verticalline}></div>
              </div>
              <div className={projects.content}>
                <div className={projects.titleWrapper}>
                  <h1>{project.title}</h1>
                </div>
                <div className={projects.subtitleWrapper}>
                  <h4>{project.sub}</h4>
                </div>
                <div className={projects.details}>
                  <p>{project.details}</p>
                  <div className={projects.mobileImg}>
                    <img src={project.image} alt="Project Image"></img>
                    <div className={projects.overlay}></div>
                  </div>
                  <div className={projects.role} style={{ overflow: "hidden" }}>
                    <div className={projects.horizontalline}></div>
                    <p>
                      <strong>Role :</strong> {project.role}
                    </p>
                    <div className={projects.horizontalline}></div>
                  </div>
                  <div className={projects.buttons}>
                    <Button
                      size="lg"
                      onClick={() => window.open(project.productionLink)}
                    >
                      Go to Project
                    </Button>
                    <Button
                      size="lg"
                      variant="outline-light"
                      onClick={() => window.open(project.githubLink)}
                    >
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={projects.imageSection}
              style={{ overflow: "hidden" }}
            >
              <div className={projects.imageWrapper}>
                <img alt="Project Image" src={project.image}></img>
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
