import React from 'react';

const skills = [
  { icon: "fa-js", label: "Autodidacta" },
  { icon: "fa-git-alt", label: "Formación constante" },
  { icon: "fa-php", label: "Trabajo en equipo" },
  { icon: "fa-react", label: "Adaptabilidad" },
  { icon: "fa-node", label: "Escucha activa" },
  
];

const Blandas = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-4 lg:flex-row">
      {skills.map(({ label }) => (
        <li className='text-l dark:text-indigo-500 rounded dark:bg-blanco p-2'>{label}</li>
      ))}
    </ul>
  );
};

export default Blandas;