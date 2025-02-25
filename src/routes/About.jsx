import React from 'react';
import Duras from '../components/Duras';

const About = () => {
  return (
    <main className="dark:text-indigo-400 dark:bg-negro grid gap-10 p-5 text-blue-600 my-20">
      
      <div className="dark:bg-negro flex flex-col items-center mt-20 mb-20">
        <h2 className="mb-10 text-3xl">Habilidades</h2>
        <Duras />
      </div>

    </main>
  );
};

export default About;
