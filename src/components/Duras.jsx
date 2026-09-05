import React from 'react';

const levelWeight = {
  Básico: 1,
  Intermedio: 2,
  Avanzado: 3,
};

const skills = [
  { icon: "fa-js", label: "JavaScript", level: "Intermedio" },
  { icon: "fa-git-alt", label: "Git", level: "Básico" },
  { icon: "fa-php", label: "PHP", level: "Intermedio" },
  { icon: "fa-react", label: "React", level: "Intermedio" },
  { icon: "fa-node", label: "Node.js", level: "Básico" },
  { icon: "fa-html5", label: "HTML5", level: "Intermedio" },
  { icon: "fa-css3", label: "CSS3", level: "Intermedio" },
  { icon: "fa-java", label: "JAVA", level: "Básico"}
];

const Duras = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group flex flex-col items-center gap-3 rounded-2xl border border-negro/10 dark:border-blanco/10 bg-white dark:bg-panel p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-600/30 dark:hover:border-indigo-400/30 hover:shadow-lg hover:shadow-blue-600/5 dark:hover:shadow-none"
        >
          <i className={`text-4xl fa-brands ${skill.icon} text-blue-600 dark:text-indigo-400`}></i>
          <p className="font-semibold text-negro dark:text-blanco">{skill.label}</p>
          <div className="flex gap-1" aria-label={`Nivel: ${skill.level}`}>
            {[1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`w-2 h-2 rounded-full ${dot <= levelWeight[skill.level]
                  ? 'bg-blue-600 dark:bg-indigo-400'
                  : 'bg-negro/10 dark:bg-blanco/15'
                  }`}
              ></span>
            ))}
          </div>
          <span className="text-xs text-negro/50 dark:text-blanco/50">{skill.level}</span>
        </div>
      ))}
    </div>
  );
};

export default Duras;
