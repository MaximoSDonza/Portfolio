import React from 'react';

const skills = [
  { icon: "fa-js", label: "JavaScript" },
  { icon: "fa-git-alt", label: "Git" },
  { icon: "fa-php", label: "PHP" },
  { icon: "fa-react", label: "React" },
  { icon: "fa-node", label: "Node.js" },
  { icon: "fa-html5", label: "HTML5" },
  { icon: "fa-css3", label: "CSS3" },
];

const Duras = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="flex items-center justify-center rounded dark:border-2 dark:border-blanco dark:bg-blanco dark:text-negro p-6 w-28 h-28"
          aria-label={skill.label}
        >
          <i className={`text-5xl fa-brands ${skill.icon}`}></i>
        </div>
      ))}
    </div>
  );
};

export default Duras;
