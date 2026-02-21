import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Achievements"
          sub="🏆 Milestones & Awards"
        />

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-[48%] lg:w-[31%]">
              <GlowCard card={testimonial} index={index}>

              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
