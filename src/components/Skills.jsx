import React from "react";
import { SKILLS } from "../utils/data";


const Skills = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto pb-20" id="skills">
      <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8">
        
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center md:text-left pb-6 md:pb-10 ">
        Skills
      </h5>
        
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS.map((skill) => (
            <SkillsCard
              key={skill.id}
              icon={skill.icon}
              iconProps={skill.iconProps}
              title={skill.title}
              comment={skill.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsCard = ({ icon: Icon, iconProps, title, comment }) => {
  return (
    // <div className="bg-slate-900 rounded border border-blue-900 p-5 hover:scale-105 transition-all ease-in-out">
   <div className="bg-slate-900 rounded p-5">
      <div className="flex items-center justify-between">
        <p className="text-base">{title}</p>
        <Icon className="text-primary text-3xl" />
      </div>
    </div>
  );
};

export default Skills;
