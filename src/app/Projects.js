import Button from "../../node_modules/react-bootstrap/esm/Button";
import app from "../styles/app.module.scss";
import projects from "../styles/projects.module.scss";
import variables from "../styles/variables.module.scss";
import Image from "next/image";
import Mentor from "../../public/MentorMatch.png";
import projectsData from "../../public/projects.json";

function Projects() {
  return (
    <div className={app.home} id="projects">
      <div className={projects.projects}>
        <h1 className={variables.title_solid}>Projects</h1>
        {projectsData.map((project) => (
          <div className={projects.projectContainer} key={project.id}>
            <div className={projects.projectInfo}>
              <div className={projects.sideBar}>
                <h1>{project.id}</h1>
                <div className={projects.verticalline}></div>
              </div>
              <div className={projects.content}>
                <h1>{project.title}</h1>
                <h4>{project.sub}</h4>
                <div className={projects.details}>
                  <p>{project.details}</p>
                  <div className={projects.role}>
                    <div className={projects.horizontalline}></div>
                    <p>
                      <strong>Role :</strong> {project.role}
                    </p>
                    <div className={projects.horizontalline}></div>
                  </div>
                  {project.productionLink === "" ? (
                    <div>
                      <Button
                        size="lg"
                        variant="outline-light"
                        onClick={() => window.open(project.githubLink)}
                      >
                        View Code
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button
                        size="lg"
                        onClick={() => window.open(project.productionLink)}
                      >
                        Go to Project
                      </Button>
                      <Button
                        size="lg"
                        variant="outline-light"
                        style={{ marginLeft: "1rem" }}
                        onClick={() => window.open(project.githubLink)}
                      >
                        View Code
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={projects.imageSection}>
              <Image
                alt="Project Image"
                width="500"
                height="500"
                src={project.image}
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
