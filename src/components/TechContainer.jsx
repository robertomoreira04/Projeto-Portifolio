import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from "react-icons/di";

import { SiTypescript, SiTailwindcss } from "react-icons/si";

import "../styles/components/techcontainer.sass";

const tech = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
  },

  { 
    id: "css",
    name: "CSS3", 
    icon: <DiCss3 /> 
  },

  { 
    id: "js", 
    name: "JavaScript", 
    icon: <DiJsBadge /> 
  },

  { 
    id: "ts", 
    name: "Typescript", 
    icon: <SiTypescript /> 
  },

  { 
    id: "react", 
    name: "React", 
    icon: <DiReact /> 
  },

  { 
    id: "node", 
    name: "Node.js", 
    icon: <DiNodejsSmall /> 
  },

  { 
    id: "sass", 
    name: "Sass", 
    icon: <DiSass /> 
  },

  { 
    id: "tailwind", 
    name: "Tailwind CSS", 
    icon: <SiTailwindcss /> 
  },
];

const TechContainer = () => {
  return (
    <section className="tech-container">
      <h2>Tecnologias</h2>
      <div className="tech-grid">
        {tech.map((tech) => (
          <div className="tech-card" id={tech.id} key={tech.id}>
            {tech.icon} 
            <div className="tech-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechContainer;
