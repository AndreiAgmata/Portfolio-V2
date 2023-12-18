import loading from "../styles/loading.module.scss";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function Loading() {
  let logo = useRef();
  let shadow = useRef();
  const tl = gsap.timeline();
  const [hide, setHide] = useState(false);

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
        setHide(true);
      }, 4000);
    });

    return () => ctx.revert();
  });

  return (
    <div className={`${loading.loading} ${hide ? loading.hidden : ""}`}>
      <img src="./logo.png" alt="log" ref={(el) => (logo = el)}></img>
      <div className={loading.shadow} ref={(el) => (shadow = el)}></div>
    </div>
  );
}

export default Loading;
