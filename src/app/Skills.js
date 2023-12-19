import skills from "../styles/skills.module.scss";
import variables from "../styles/variables.module.scss";
import app from "../styles/app.module.scss";

function Skills() {
  return (
    <div className={app.home}>
      <div className={skills.skills}>
        <div className={skills.headerContainer}>
          <h1 className={variables.title_solid_white}>Skills</h1>
        </div>
        <div className={skills.skillsContainer}>
          <div className={skills.skill}>
            <div className={skills.vectorContainer}>
              <img src="./ux-design.svg" alt="svg"></img>
            </div>
            <h1 className={variables.title_solid_yellow}>
              Solution-oriented UX design
            </h1>
            <p>
              Identifying challenges within a business, devising strategies that
              align business objectives with user requirements, and crafting
              impactful experiences to bridge the gap
            </p>
          </div>
          <div className={skills.skill_alternate}>
            <div className={skills.vectorContainer}>
              <img src="./backend.svg" alt="svg"></img>
            </div>
            <h1 className={variables.title_solid_black}>
              Efficient Backend Architecture
            </h1>
            <p>
              Strong focus on creating robust, scalable, and efficient systems.
              Skilled in implementing backend architectures that power web
              applications, services, and databases
            </p>
          </div>
          <div className={skills.skill}>
            <div className={skills.vectorContainer}>
              <img src="./ui-design.svg" alt="svg"></img>
            </div>
            <h1 className={variables.title_solid_yellow}>
              Modern User Interface
            </h1>
            <p>
              Expert in designing modern user interfaces that blend
              functionality with intuitive design. Proficient in leveraging
              cutting-edge technologies to create visually appealing UIs
            </p>
          </div>
          <div className={skills.skill_alternate}>
            <div className={skills.vectorContainer}>
              <img src="./responsive-design.svg" alt="svg"></img>
            </div>
            <h1 className={variables.title_solid_black}>
              Adaptive and Flexible UI
            </h1>
            <p>
              Skilled in creating user-centric and mobile-friendly interfaces
              that prioritize accessibility and functionality across various
              screen sizes
            </p>
          </div>
          <div className={skills.skill}>
            <div className={skills.vectorContainer}>
              <img src="./animation.svg" alt="svg"></img>
            </div>
            <h1 className={variables.title_solid_yellow}>Dynamic Web Design</h1>
            <p>
              Proficient in creating visually engaging websites with fluid and
              interactive animations. Skilled in crafting captivating web
              experiences enriched with dynamic motion
            </p>
          </div>
          <div className={skills.skill_alternate}>
            <div className={skills.vectorContainer}>
              <img src="./music-production.svg" alt="svg"></img>
            </div>
            <h1 className={variables.title_solid_black}>
              Part-time Music Producer
            </h1>
            <p>
              When I am not writing code, I am writing music. I create hip-hop
              beats and produce for various local artists in my home studio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
