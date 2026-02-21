import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="w-full mx-auto flex flex-col xl:flex-row items-center justify-between gap-10 px-5 md:px-20 pt-32 pb-20 relative z-10 min-h-[100dvh]">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center items-start w-full xl:w-1/2">
          <div className="flex flex-col items-start gap-7">
            <div className="hero-text text-left">
              <h1>
                Shaping
                <span className="slide text-left">
                  <span className="wrapper text-left">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <div className="flex flex-col xl:flex-row items-center xl:items-center gap-10 mt-4 relative z-10 w-full">
              <div className="flex flex-col items-center gap-6 shrink-0">
                <img
                  src="/images/keshav.png"
                  alt="Keshav Goel"
                  className="w-64 h-64 md:w-80 md:h-80 xl:w-[28rem] xl:h-[28rem] object-cover object-[center_6%] rounded-full border-4 border-white/20 shadow-2xl"
                />
                <Button
                  text="See My Work"
                  className="md:w-80 md:h-16 w-60 h-12"
                  id="counter"
                />
              </div>
              <p className="text-white-50 md:text-xl text-center md:text-left max-w-xl xl:-mt-20">
                Hi, I'm Keshav Goel, a B.Tech Computer Science (AI) student at USICT, New Delhi.
                I have a passion for building innovative, impactful solutions and pushing the boundaries of web development and IoT.
              </p>
            </div>
          </div>
        </header>

        <figure className="w-full xl:w-[45%] mt-10 xl:mt-0 relative" style={{ height: '900px', overflow: 'hidden' }}>
          <iframe
            title="Young-man-doing-coding-work"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking="true"
            execution-while-out-of-viewport="true"
            execution-while-not-rendered="true"
            web-share="true"
            src="https://sketchfab.com/models/d2417662454a4389bc53694c1cb8b1bc/embed?autostart=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_theme=dark&dnt=1&transparent=1&ui_controls=0&ui_annotations=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0"
            className="absolute left-[-28%] top-[-10%] w-[120%] h-[120%] pointer-events-auto"
          />
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
