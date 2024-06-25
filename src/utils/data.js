import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCocos, SiExpress, SiMongodb, SiTypescript } from "react-icons/si";

export const PROFILE_DATA = {
  profilePicture: "https://via.placeholder.com/150",
  name: "Jimwell Chavez",
  // tagline: `Passionate React JS developer with 2 years of experience, dedicated to crafting immersive web experiences and solving complex challenges.`,
  tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque mi eget erat consequat tempor. Sed eu volutpat erat.`,
  jobTitle: "Full Stack Developer",
  location: "Pasay City, Metro Manila",
  yearsOfExperience: 2,
  skills: [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "Node.js",
    "RESTful APIs",
  ],
  email: "jimwellchavez24@gmail.com",
  phone: "+639451025824",
  website: "https://www.linkedin.com/in/jimwell-chavez/",
};

export const SKILLS = [
  {
    id: "01",
    icon: IoLogoJavascript,
    title: "JavaScript",
  },
  {
    id: "02",
    icon: SiTypescript,
    title: "TypeScript",
  },
  {
    id: "03",
    icon: IoLogoReact,
    title: "React JS",
  },
  {
    id: "04",
    icon: IoLogoNodejs,
    title: "Node JS",
  },
  {
    id: "05",
    icon: SiMongodb,
    title: "MongoDB",
  },
  {
    id: "06",
    icon: SiExpress,
    title: "ExpressJs",
  },
  {
    id: "07",
    icon: IoLogoHtml5,
    title: "HTML",
  },
  {
    id: "08",
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
  },
  {
    id: "09",
    icon: SiCocos,
    title: "Cocos Creator",
  },
];

export const PROJECTS = [
  {
    id: "01",
    icon: IoLogoReact,
    title: "Project 1",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque mi eget erat consequat tempor. Sed eu volutpat erat. Sed sagittis vestibulum dictum. Donec nisi augue, dictum eu orci in, suscipit vehicula enim. Proin at pellentesque leo. Maecenas non augue sit amet diam consequat consequat.`,
  },
  {
    id: "02",
    icon: IoLogoReact,
    title: "Project 2",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque mi eget erat consequat tempor. Sed eu volutpat erat. Sed sagittis vestibulum dictum. Donec nisi augue, dictum eu orci in, suscipit vehicula enim. Proin at pellentesque leo. Maecenas non augue sit amet diam consequat consequat.`,
  },
  {
    id: "03",
    icon: IoLogoReact,
    title: "Project 3",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque mi eget erat consequat tempor. Sed eu volutpat erat. Sed sagittis vestibulum dictum. Donec nisi augue, dictum eu orci in, suscipit vehicula enim. Proin at pellentesque leo. Maecenas non augue sit amet diam consequat consequat.`,
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "By Technology Inc.",
    position: "Web Game Developer",
    icon_1: IoLogoJavascript,
    duration: "02-2023 / Present",
    description:
      "Developed web-based games using Cocos Creator and Cocos2dx with TypeScript, integrating graphics, animations, and multimedia. Developed clean, efficient code for game mechanics and UI features, collaborating with designers and artists throughout. Conducted thorough testing and debugging to ensure game stability and iteratively refined features based on requirements.",
  },
  {
    id: "02",
    company: "Easycom Japan Philippines Inc.",
    position: "Web Developer Intern",
    duration: "10-2022 / 01-2023",
    description:
      "Developed automation scripts with Protractor and TypeScript, ensuring website functionality through comprehensive test cases. Contributed to front-end development with Angular for e-commerce projects, and built server-side applications using Node.js and Express.js. Managed data in MySQL databases effectively.",
  },
];

export const ABOUT_ME_DATA = {
  introduction: "Hi, I'm Jimwell Chavez, an React JS developer passionate about building engaging web applications and solving complex problems with code.",
  background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque mi eget erat consequat tempor. Sed eu volutpat erat. Sed sagittis vestibulum dictum. Donec nisi augue, dictum eu orci in, suscipit vehicula enim. Proin at pellentesque leo. Maecenas non augue sit amet diam consequat consequat.",
   // background: "I hold a Bachelor's degree in Information Technology from the Urdaneta City University. Over the past 2 years, I've gained valuable experience in frontend development, working on projects ranging from e-commerce websites to interactive dashboards.",
  // skills: "I'm proficient in a variety of technologies including React.js, JavaScript, HTML, CSS, and Node.js. I'm also experienced in using version control systems like Git and working with RESTful APIs.",
  // projects: "Some of my notable projects include an e-commerce website built with React.js and Redux, a social media dashboard using Node.js and MongoDB, and a personal portfolio website deployed with Netlify.",
  // interests: "Outside of coding, I enjoy traveling to new places, capturing moments through photography, and playing guitar. I'm also an avid reader and love exploring new cuisines.",
  // careerGoals: "In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to meaningful projects that make a positive impact on people's lives.",

  stats: {
    yearsOfExperience: '2',
    numberOfProjects: '5',
    certificationsEarned: 2,
  },
};
