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
  const tl = new gsap.timeline();

  const handleClick = () => {
    setShow(!show);

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
        tl.to(menuBar, 0.7, { yPercent: 100, ease: Power3.out })
          .staggerFrom(
            [
              links.children[0],
              links.children[1],
              links.children[2],
              links.children[3],
            ],
            0.5,
            { opacity: 0, ease: Power3.easeIn },
            0.15,
            0.2
          )
          .from(
            [
              icons.children[0],
              icons.children[1],
              icons.children[2],
              icons.children[3],
            ],
            1,
            { opacity: 0, ease: Power3.easeIn }
          );
        setIconColor("black");
        setLogo("./logo.png");
      }
    }
  };

  return (
    <>
      <div className={sidebar.burgerContainer} id="burgerContainer">
        <img src={logo} alt="logo" ref={(el) => (logoRef = el)}></img>
        <GiHamburgerMenu
          color={iconColor}
          size="2em"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
          ref={(el) => (burgerRef = el)}
        />
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
