import sidebar from "../styles/sidebar.module.scss";
import { NavLink, Navbar } from "../../node_modules/react-bootstrap/esm/index";
import NavbarBrand from "../../node_modules/react-bootstrap/esm/NavbarBrand";
import { SiAnalogue } from "react-icons/si";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

import { Power3 } from "gsap";
import gsap from "gsap";

export default function SideBar() {
  const [show, setShow] = useState(false);
  const [iconColor, setIconColor] = useState("white");
  let menuBar = useRef();
  const tl = new gsap.timeline();

  const handleClick = () => {
    setShow(!show);

    if (window.innerWidth < 850) {
      if (show) {
        tl.to(menuBar, { xPercent: 100, ease: Power3.easeOut });
        setIconColor("white");
      } else {
        tl.to(menuBar, { xPercent: -100, ease: Power3.easeOut });
        setIconColor("black");
      }
    }
  };

  return (
    <>
      <div className={sidebar.burgerContainer} id="burgerContainer">
        <GiHamburgerMenu
          color={iconColor}
          size="2em"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className={`${sidebar.sidebar}`} ref={(el) => (menuBar = el)}>
        <Navbar className={`${sidebar.navbar}`}>
          <div className={sidebar.logo}>
            <NavLink href="#home">
              <img src="/logo.png" alt="logo"></img>
            </NavLink>
          </div>
          <div className={sidebar.links}>
            <NavLink
              className={sidebar.link}
              href="#about"
              onClick={handleClick}
            >
              ABOUT
            </NavLink>
            {/* <NavLink className={sidebar.link} href="#stack">
            TECH STACK
          </NavLink> */}
            <NavLink
              className={sidebar.link}
              href="#projects"
              onClick={handleClick}
            >
              PROJECTS
            </NavLink>
            <NavLink
              className={sidebar.link}
              href="#contact"
              onClick={handleClick}
            >
              CONTACT
            </NavLink>
          </div>
          <div className={sidebar.icons}>
            <NavLink className={sidebar.icon}>
              <TiSocialInstagramCircular
                size="2.5em"
                onClick={() =>
                  window.open("https://www.instagram.com/dreezymixedit")
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
