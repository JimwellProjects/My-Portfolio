import React from 'react'
import { PROJECTS } from "../utils/data";
import  PROJECT_1_COVER  from "../assets/Projects/Project-1/project-1-cover.png";

const Projects = () => {
  return (
<section className="max-w-screen-xl px-6 mx-auto pt-10 md:pt-24" id="projects">
      <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8">
        <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center md:text-left pb-6 md:pb-">Projects</h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PROJECTS.map((skill) => (
            <ProjectsCard
              key={skill.id}
              icon={skill.icon}
              iconProps={skill.iconProps}
              title={skill.title}
              content={skill.content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectsCard = ({ icon: Icon, iconProps, title, content }) => {
  return (
<div className="bg-slate-900 rounded p-5">
  <img src={PROJECT_1_COVER} alt="Card Image" className="rounded mb-5 w-full h-48 object-cover" />

  <div className="flex items-center justify-between mb-5">
    <p className="text-base text-white">{title}</p>
    <div className="flex space-x-2">
      <Icon className="text-primary text-3xl" />
      <Icon className="text-primary text-3xl" />
      <Icon className="text-primary text-3xl" />
    </div>
  </div>

  <p className="text-xs font-light leading-5 opacity-80 text-white">{content}</p>

  <button className="mt-5 bg-primary text-xs font-light text-neutral-50 leading-5 my-6 py-2 px-4 rounded border border-primary hover:bg-transparent hover:text-primary">
    See More
  </button>
</div>

  );
};


export default Projects
