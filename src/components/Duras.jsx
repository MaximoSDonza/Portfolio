import React from 'react';

const skills = [
  { icon: "fa-js", label: "JavaScript", level: "Intermedio" },
  { icon: "fa-git-alt", label: "Git", level: "Básico" },
  { icon: "fa-php", label: "PHP", level: "Intermedio" },
  { icon: "fa-react", label: "React", level: "Intermedio" },
  { icon: "fa-node", label: "Node.js", level: "Básico" },
  { icon: "fa-html5", label: "HTML5", level: "Intermedio" },
  { icon: "fa-css3", label: "CSS3", level: "Intermedio" },
];

const Duras = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center justify-center rounded dark:border-2 dark:border-blanco dark:bg-blanco dark:text-negro p-6 w-28 h-28"
          aria-label={skill.label}
        >
          <i className={`text-5xl fa-brands ${skill.icon}`}></i>
          <p className='text-xl dark:text-indigo-500 '>{skill.level}</p>
        </div>
      ))}
    </div>
  );
};

export default Duras;
