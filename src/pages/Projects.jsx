import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects, skills } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              
              {/* Tech Stack section with custom icons and premium tooltips */}
              {project.skills && (
                <div className='mt-5 flex flex-col gap-2'>
                  <span className='text-xs font-semibold text-slate-400 uppercase tracking-wider'>
                    Technologies Used
                  </span>
                  <div className='flex gap-3 flex-wrap mt-1'>
                    {project.skills.map((skillName) => {
                      const skill = skills.find((s) => s.name === skillName);
                      if (!skill) return null;
                      return (
                        <div
                          key={skillName}
                          className='w-10 h-10 rounded-xl bg-white border border-slate-200 flex justify-center items-center cursor-pointer relative group hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm hover:border-blue-500/50 z-10'
                        >
                          <img
                            src={skill.imageUrl}
                            alt={skillName}
                            className='w-3/5 h-3/5 object-contain'
                          />

                          {/* Hover Tooltip displaying ONLY the name with high contrast */}
                          <div 
                            className='absolute -top-11 left-1/2 bg-slate-900 border border-slate-700 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 group-hover:-top-13 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md z-30 flex flex-col items-center justify-center'
                            style={{ transform: "translateX(-50%)" }}
                          >
                            <span className='text-white tracking-wide'>{skillName}</span>
                            <div className='w-1.5 h-1.5 bg-slate-900 border-r border-b border-slate-700 rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2' />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className='mt-6 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
