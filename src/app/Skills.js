import skills from "../styles/skills.module.scss";
import variables from "../styles/variables.module.scss";
import app from "../styles/app.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Skills() {
  let skillsTitle = useRef();
  let skillsList = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: skillsTitle,
          start: "top center+=400",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(skillsTitle, 0.7, { yPercent: 100, ease: Power3.easeOut });

      let q = gsap.utils.selector(skillsList);

      for (let i = 1, j = 0; i < 4, j < 3; i += 2, j++) {
        const tl2 = new gsap.timeline({
          scrollTrigger: {
            trigger: q(`#row${j + 1}`),
            start: "top center+=200",
            toggleActions: "play none none reverse",
          },
        });

        tl2
          .from([q(`#icon${i}`), q(`#icon${i + 1}`)], {
            duration: 0.7,
            yPercent: 100,
            ease: Power3.easeOut,
          })
          .from(
            [q(`#header${i}`), q(`#header${i + 1}`)],
            0.7,
            {
              yPercent: 204,
              ease: Power3.easeOut,
            },
            0.2
          )
          .from(
            [q(`#details${i}`), q(`#details${i + 1}`)],
            1,
            {
              opacity: 0,
              ease: Power3.easeOut,
            },
            0.5
          );
      }
    });
    return () => ctx.revert();
  });
  return (
    <div className={app.home}>
      <div className={skills.skills} id="skills">
        <div className={skills.headerContainer} style={{ overflow: "hidden" }}>
          <h1
            className={variables.title_solid_white}
            ref={(el) => (skillsTitle = el)}
          >
            Skills
          </h1>
        </div>
        <div className={skills.skillsContainer} ref={(el) => (skillsList = el)}>
          <div className={skills.skill} id="row1">
            <div style={{ overflow: "hidden" }}>
              <div className={skills.vectorContainer} id="icon1">
                <img src="./ux-design.svg" alt="svg"></img>
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h1 className={variables.title_solid_yellow} id="header1">
                Solution-oriented UX design
              </h1>
            </div>
            <p id="details1">
              Identifying challenges within a business, devising strategies that
              align business objectives with user requirements, and crafting
              impactful experiences to bridge the gap
            </p>
          </div>
          <div className={skills.skill_alternate}>
            <div style={{ overflow: "hidden" }}>
              <div className={skills.vectorContainer} id="icon2">
                <img src="./backend.svg" alt="svg"></img>
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h1 className={variables.title_solid_black} id="header2">
                Optimized Backend System
              </h1>
            </div>
            <p id="details2">
              Strong focus on creating robust, scalable, and efficient systems.
              Skilled in implementing backend architectures that power web
              applications, services, and databases
            </p>
          </div>
          <div className={skills.skill} id="row2">
            <div style={{ overflow: "hidden" }}>
              <div className={skills.vectorContainer} id="icon3">
                <img src="./ui-design.svg" alt="svg"></img>
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h1 className={variables.title_solid_yellow} id="header3">
                Modern User Interface
              </h1>
            </div>
            <p id="details3">
              Expert in designing modern user interfaces that blend
              functionality with intuitive design. Proficient in leveraging
              cutting-edge technologies to create visually appealing UIs
            </p>
          </div>
          <div className={skills.skill_alternate}>
            <div style={{ overflow: "hidden" }}>
              <div className={skills.vectorContainer} id="icon4">
                <img src="./responsive-design.svg" alt="svg"></img>
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h1 className={variables.title_solid_black} id="header4">
                Adaptive and Flexible UI
              </h1>
            </div>
            <p id="details4">
              Skilled in creating user-centric and mobile-friendly interfaces
              that prioritize accessibility and functionality across various
              screen sizes
            </p>
          </div>
          <div className={skills.skill} id="row3">
            <div style={{ overflow: "hidden" }}>
              <div className={skills.vectorContainer} id="icon5">
                <img src="./animation.svg" alt="svg"></img>
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h1 className={variables.title_solid_yellow} id="header5">
                Dynamic Web Design
              </h1>
            </div>
            <p id="details5">
              Proficient in creating visually engaging websites with fluid and
              interactive animations. Skilled in crafting captivating web
              experiences enriched with dynamic motion
            </p>
          </div>
          <div className={skills.skill_alternate}>
            <div style={{ overflow: "hidden" }}>
              <div className={skills.vectorContainer} id="icon6">
                <img src="./music-production.svg" alt="svg"></img>
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <h1 className={variables.title_solid_black} id="header6">
                Part-time Music Producer
              </h1>
            </div>
            <p id="details6">
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
