import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Lavanya
        </span>{" "}
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Artificial Intelligence and Data Science student based in India, specializing in developing intelligent machine learning models, data-driven applications, and high-performance web & mobile solutions.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div 
              className='block-container w-20 h-20 relative group' 
              key={skill.name}
              title={skill.name}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center cursor-pointer'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>

              {/* Custom Hover Tooltip projected in 3D space */}
              <div 
                className='absolute -top-12 left-1/2 bg-slate-900 border border-slate-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-top-16 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl flex flex-col items-center justify-center z-30'
                style={{ transform: "translate3d(-50%, 0, 150px)", transformStyle: "preserve-3d" }}
              >
                <span className='text-white tracking-wide'>{skill.name}</span>
                <div 
                  className='w-2 h-2 bg-slate-900 border-r border-b border-slate-700 absolute -bottom-1 left-1/2' 
                  style={{ transform: "translate3d(-50%, 0, 1px) rotate(45deg)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked on some projects, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
