import sidebar from "../styles/sidebar.module.scss";
import { NavLink, Navbar } from "../../node_modules/react-bootstrap/esm/index";
import NavbarBrand from "../../node_modules/react-bootstrap/esm/NavbarBrand";
import { SiAnalogue } from "react-icons/si";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

import { Power3, Expo } from "gsap";
import gsap from "gsap";

export default function SideBar() {
  const [show, setShow] = useState(false);
  const [logo, setLogo] = useState("./logo-white.png");
  const [iconColor, setIconColor] = useState("white");
  let menuBar = useRef();
  let logoRef = useRef();
  let burgerRef = useRef();
  let links = useRef();
  let icons = useRef();
  let bgRef = useRef();
  let burgerBgRef = useRef();
  let burgerContainerRef = useRef();

  const handleClick = () => {
    setShow(!show);

    const tl = new gsap.timeline();
    let q = gsap.utils.selector(burgerContainerRef);

    if (window.innerWidth < 850) {
      if (show) {
        //hide
        tl.to(menuBar, 1, { yPercent: -1, ease: Power3.easeInOut });
        setTimeout(function () {
          setIconColor("white");
          setLogo("./logo-white.png");
        }, 700);
      } else {
        //show
        tl.to(
          menuBar,
          0.7,
          { yPercent: 100, ease: Power3.out },
          0.1
        ).staggerFrom(
          [
            links.children[0],
            links.children[1],
            links.children[2],
            links.children[3],
            icons,
          ],
          0.5,
          { opacity: 0, ease: Power3.easeIn },
          0.15,
          0.2
        );
        setTimeout(function () {
          setIconColor("black");
          setLogo("./logo.png");
        }, 150);
      }
    }
  };

  useEffect(() => {
    const ctx = new gsap.context(() => {
      let q = gsap.utils.selector(burgerContainerRef);
      let q2 = gsap.utils.selector(bgRef);
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: burgerBgRef,
          start: "top top",
          toggleActions: "play none none reverse",
        },
      });

      const tl2 = new gsap.timeline({
        scrollTrigger: {
          trigger: burgerBgRef,
          start: "top top",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(bgRef, 0.7, { top: 0, ease: Power3.easeInOut }).to(
        [q("#logo"), q("#burger")],
        0.2,
        { yPercent: -100, ease: Power3.easeIn },
        0.2
      );

      tl2.staggerFrom([q2("#logo"), q2("#burger")], 0.6, {
        yPercent: 100,
        ease: Power3.easeInOut,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={sidebar.burgerAlt} ref={(el) => (bgRef = el)}>
        <div style={{ overflow: "hidden" }} className={sidebar.altLogoWrapper}>
          <img src="./logo.png" alt="logo" id="logo"></img>
        </div>
        <div
          style={{ overflow: "hidden" }}
          className={sidebar.altBurgerWrapper}
        >
          <GiHamburgerMenu
            color="black"
            size="2em"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
            id="burger"
          />
        </div>
      </div>
      <div
        className={sidebar.burgerBgRef}
        ref={(el) => (burgerBgRef = el)}
      ></div>
      <div
        className={sidebar.burgerContainer}
        id="burgerContainer"
        ref={(el) => (burgerContainerRef = el)}
      >
        <div style={{ overflow: "hidden" }}>
          <img
            src={logo}
            alt="logo"
            ref={(el) => (logoRef = el)}
            id="logo"
          ></img>
        </div>
        <div style={{ overflow: "hidden" }}>
          <GiHamburgerMenu
            color={iconColor}
            size="2em"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
            id="burger"
          />
        </div>
      </div>
      <div className={`${sidebar.sidebar}`} ref={(el) => (menuBar = el)}>
        <Navbar className={`${sidebar.navbar}`}>
          <div className={sidebar.logo}>
            <NavLink href="#home">
              <img src="/logo.png" alt="logo"></img>
            </NavLink>
          </div>
          <div className={sidebar.links} ref={(el) => (links = el)}>
            <NavLink
              className={sidebar.link}
              href="#projects"
              onClick={handleClick}
            >
              <span>PROJECTS</span>
            </NavLink>
            <NavLink
              className={sidebar.link}
              href="#skills"
              onClick={handleClick}
            >
              SKILLS
            </NavLink>
            <NavLink
              className={sidebar.link}
              href="#about"
              onClick={handleClick}
            >
              ABOUT
            </NavLink>
            <NavLink
              className={sidebar.link}
              href="#contact"
              onClick={handleClick}
            >
              CONTACT
            </NavLink>
          </div>
          <div className={sidebar.icons} ref={(el) => (icons = el)}>
            <NavLink className={sidebar.icon}>
              <TiSocialInstagramCircular
                size="2.5em"
                onClick={() =>
                  window.open("https://www.instagram.com/andreiagmata.dev")
                }
              />
            </NavLink>
            <NavLink className={sidebar.icon}>
              <FaGithub
                size="2em"
                onClick={() =>
                  window.open("https://www.github.com/andreiagmata")
                }
              />
            </NavLink>
            <NavLink className={sidebar.icon}>
              <FaLinkedin
                size="2em"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/andrei-agmata-540245252/"
                  )
                }
              />
            </NavLink>
          </div>
        </Navbar>
      </div>
    </>
  );
}
