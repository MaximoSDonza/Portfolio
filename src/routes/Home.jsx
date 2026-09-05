import React from 'react';
import { Link } from 'react-router-dom';
import me from '../assets/img/me.png';
import CvBtn from '../components/CvBtn';

const CV_URL = `${import.meta.env.BASE_URL}cv/CV-Maximo-Donza.pdf`

const Home = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/m%C3%A1ximo-sebastian-donza-875379301/", icon: "fa-linkedin", label: "LinkedIn" },
    { href: "https://github.com/MaximoSDonza", icon: "fa-github", label: "GitHub" },
  ];

  return (
    <main className="relative overflow-hidden bg-blanco dark:bg-negro text-negro dark:text-blanco">
      <div className="pointer-events-none absolute -top-24 right-[-10%] w-96 h-96 rounded-full bg-blue-600/10 dark:bg-indigo-400/10 blur-3xl animate-blob"></div>
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-72 h-72 rounded-full bg-amber-500/10 blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>

      <div className="relative flex min-h-[calc(100vh-73px)] flex-col-reverse lg:flex-row items-center justify-center lg:justify-evenly gap-14 px-6 py-16 max-w-6xl mx-auto">

        <section className="max-w-xl text-center lg:text-left opacity-0 animate-riseIn">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 dark:border-indigo-400/20 px-3 py-1 text-xs font-medium tracking-wide text-blue-700 dark:text-indigo-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            Ocupado
          </span>

          <h1 className="font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Hola, soy Máximo.
          </h1>

          <p className="mt-5 text-lg text-negro/70 dark:text-blanco/70 max-w-prose mx-auto lg:mx-0">
            Técnico en Programación orientado a desarrollo web, backend y bases de datos.
            Mi meta es crecer como desarrollador full stack, resolviendo problemas reales con código prolijo.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <CvBtn CV_URL={CV_URL}/>
            <Link
              to="/Projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 dark:border-indigo-400 text-blue-600 dark:text-indigo-400 px-6 py-3 font-semibold hover:bg-blue-600 hover:text-blanco dark:hover:bg-indigo-400 dark:hover:text-negro transition-colors"
            >
              Ver proyectos
            </Link>
          </div>

          <div className="flex gap-4 mt-10 justify-center lg:justify-start">
            {socialLinks.map(({ href, icon, label }) => (
              <a key={icon} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <i className={`flex items-center justify-center w-12 h-12 text-2xl rounded-full border border-negro/10 dark:border-blanco/10 fa-brands ${icon}
                  dark:hover:bg-blanco dark:hover:text-negro hover:bg-blue-600 hover:text-blanco hover:border-transparent transition-colors`}>
                </i>
              </a>
            ))}
          </div>
        </section>

        <section className="relative shrink-0 opacity-0 animate-riseIn stagger-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-amber-500 dark:from-indigo-400 dark:to-amber-400 opacity-20 blur-2xl scale-110"></div>
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full ring-4 ring-blue-600 dark:ring-indigo-400 ring-offset-4 ring-offset-blanco dark:ring-offset-negro overflow-hidden">
            <img className="w-full h-full object-cover" src={me} alt="Foto de perfil de Máximo Donza" />
          </div>
        </section>

      </div>
    </main>
  );
};

export default Home;
