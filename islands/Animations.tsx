import { useEffect } from "preact/hooks";
import gsap from "https://esm.sh/gsap@3.12.5";

export default function Animations() {
  useEffect(() => {
    const title = document.getElementById("title");
    gsap.from(title, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power4.out",
    });

    const introduction = document.getElementById("introduction");
    if (introduction) {
      const text = introduction.innerText;
      introduction.innerText = "";
      text.split("").forEach((letra, index) => {
        const span = document.createElement("span");
        span.textContent = letra;
        span.style.opacity = "0";
        introduction.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          duration: 0.8,
          delay: index * 0.02,
          ease: "power1.inOut",
        });
      });
    }
  }, []);

  return <div />;
}
