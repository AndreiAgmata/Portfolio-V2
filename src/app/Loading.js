import loading from "../styles/loading.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Loading() {
  let logo = useRef();
  let shadow = useRef();
  const tl = gsap.timeline();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.to(
        logo,
        {
          y: 20,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          duration: 0.7,
        },
        "start"
      );
      tl.from(
        shadow,
        {
          opacity: 0.3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          duration: 0.7,
        },
        "start"
      );

      setTimeout(() => {
        tl.pause();
      }, 6000);
    });

    return () => ctx.revert();
  });

  return (
    <div className={loading.loading}>
      <img src="./logo.png" alt="log" ref={(el) => (logo = el)}></img>
      <div className={loading.shadow} ref={(el) => (shadow = el)}></div>
    </div>
  );
}

export default Loading;
