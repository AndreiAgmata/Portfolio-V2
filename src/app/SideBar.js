import sidebar from "../styles/sidebar.module.scss";
import { NavLink, Navbar } from "../../node_modules/react-bootstrap/esm/index";
import NavbarBrand from "../../node_modules/react-bootstrap/esm/NavbarBrand";
import { SiAnalogue } from "react-icons/si";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className={sidebar.sidebar}>
      <Navbar className={sidebar.navbar}>
        <div className={sidebar.logo}>
          <NavLink href="#home">
            <SiAnalogue size="2.5em" />
          </NavLink>
        </div>
        <div className={sidebar.links}>
          <NavLink className={sidebar.link} href="#about">
            ABOUT
          </NavLink>
          {/* <NavLink className={sidebar.link} href="#stack">
            TECH STACK
          </NavLink> */}
          <NavLink className={sidebar.link} href="#projects">
            PROJECTS
          </NavLink>
          <NavLink className={sidebar.link} href="#contact">
            CONTACT
          </NavLink>
        </div>
        <div className={sidebar.icons}>
          <NavLink>
            <TiSocialInstagramCircular size="2.5em" />
          </NavLink>
          <NavLink>
            <FaGithub size="2em" />
          </NavLink>
          <NavLink>
            <FaLinkedin size="2em" />
          </NavLink>
        </div>
      </Navbar>
    </div>
  );
}
