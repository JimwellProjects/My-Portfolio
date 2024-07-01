import React, { useState } from 'react'
import { PROJECTS } from "../utils/data";
import  PROJECT_1_COVER  from "../assets/Projects/Project-1/project-1-cover.png";
import  PROJ_PIC_2  from "../assets/WebProjectPics/pic-2.png";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Projects = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto pt-10 md:pt-20" id="projects">
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

  // const customStyles = {
  //   modal: {
  //     maxWidth: '800px',
  //     width: '90%', 
  //     height: '400px',
  //     borderRadius: '10px',
  //     backgroundColor: '#F5F5F5'
  //   },
  // };

const ProjectsCard = ({ icon: Icon, title, content }) => {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="bg-slate-900 rounded p-5">
    <img src={PROJECT_1_COVER} alt="Card Image" className="rounded mb-5 w-full h-48 object-cover"/>
      <div className="flex items-center justify-between mb-5">
        <p className="text-base text-white">{title}</p>
        <div className="flex space-x-2">
          <Icon className="text-primary text-3xl" />
          <Icon className="text-primary text-3xl" />
          <Icon className="text-primary text-3xl" />
        </div>
      </div>

      <p className="text-xs font-light leading-5 opacity-80 text-white">{content}</p>

      <button
       className="mt-5 bg-primary text-xs font-light text-neutral-50 leading-5 my-6 py-2 px-4 rounded border border-primary hover:bg-transparent hover:text-primary"
       onClick={onOpenModal}>
        See More
      </button>
      <Modal open={open} onClose={onCloseModal} classNames={{modal: 'bg-slate-50 p-6 rounded-lg shadow-lg size-10/12'}} center>
        <div className='p-4 overflow-y-auto'>
          <div className="flex flex-col items-center">
            <img src={PROJ_PIC_2} className="mb-4 rounded-lg size-11/12 max-w-full h-auto" />
            <h2 className="text-2xl font-bold mb-2 text-sky-500">{title}</h2>
            <p className="text-gray-700 mb-6 text-justify">
              {content}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={onCloseModal}>
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};


export default Projects
