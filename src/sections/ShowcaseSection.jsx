import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const materialMoverRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [materialMoverRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={materialMoverRef} className="first-project-wrapper w-full max-w-5xl mx-auto">
            <div className="w-full rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
              <img src="/images/material-mover.png" alt="Smart Product Search" className="w-full h-auto object-contain" />
            </div>
            <div className="text-content mt-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Smart Product Search — Material Mover: A Circular Economy
                Platform
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack web app built with Node.js, Express, & MongoDB for
                trading surplus construction materials with RBAC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
