import sidebar from "../styles/sidebar.module.scss";
import { NavLink, Navbar } from "../../node_modules/react-bootstrap/esm/index";
import NavbarBrand from "../../node_modules/react-bootstrap/esm/NavbarBrand";
import { SiAnalogue } from "react-icons/si";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function SideBar() {
  const [show, setShow] = useState(true);
  const [iconColor, setIconColor] = useState("white");

  const handleClick = () => {
    setShow(!show);

    if (show) {
      setIconColor("black");
    } else {
      setIconColor("white");
    }
  };
  return (
    <>
      <div className={sidebar.burgerContainer}>
        <GiHamburgerMenu
          color={iconColor}
          size="2em"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div
        className={`${sidebar.sidebar} ${
          show ? sidebar.navigationHidden : sidebar.navigationInView
        }`}
      >
        <Navbar className={`${sidebar.navbar}`}>
          <div className={sidebar.logo}>
            <NavLink href="#home">
              <SiAnalogue size="2.5em" />
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
            <NavLink>
              <TiSocialInstagramCircular
                size="2.5em"
                onClick={() =>
                  window.open("https://www.instagram.com/dreezymixedit")
                }
              />
            </NavLink>
            <NavLink>
              <FaGithub
                size="2em"
                onClick={() =>
                  window.open("https://www.github.com/andreiagmata")
                }
              />
            </NavLink>
            <NavLink>
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
