"use client";

import "../styles/customTheme.scss";
import styles from "./page.module.css";

import SideBar from "./SideBar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Loading from "./Loading";

import { Power3 } from "gsap";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  let loading = useRef();
  const tl = new gsap.timeline();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.to(loading, {
        opacity: 0,
        ease: Power3.easeOut,
        duration: 0.7,
        delay: 2.8,
      });
    });
    return () => ctx.revert();
  });
  return (
    <>
      <div ref={(el) => (loading = el)}>
        <Loading />
      </div>

      <SideBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
