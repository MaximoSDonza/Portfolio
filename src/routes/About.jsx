import React from 'react';
import Duras from '../components/Duras';
import Blandas from '../components/Blandas';

const About = () => {
  return (
    <main className="animate-fadeIn dark:text-indigo-400 dark:bg-negro grid gap-10 p-5 text-blue-600 my-10">
      
      <div className="dark:bg-negro flex flex-col items-center mt-5 mb-20 gap-10">
        <h2 className="mb-10 text-3xl">Habilidades</h2>
        <Duras />
        <Blandas />
      </div>

    </main>
  );
};

export default About;
