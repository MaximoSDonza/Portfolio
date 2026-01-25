import React from 'react';
import me from '../assets/img/me.png';

const Home = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/m%C3%A1ximo-sebastian-donza-875379301/", icon: "fa-linkedin" },
    { href: "https://github.com/MaximoSDonza", icon: "fa-github" },
    { href: "https://www.instagram.com/maximodonza", icon: "fa-instagram" },
  ];

  return (
    <main className="animate-fadeIn bg-blanco dark:text-white dark:bg-negro flex min-h-screen flex-col-reverse lg:flex-row p-5 items-center text-blue-600 justify-evenly py-16 flex-wrap">
      
      <section>
        <h2 className="dark:text-indigo-400 text-blue-700">Hola! Soy Máximo.</h2>
        <p>Soy un programador trainee.</p>
        <p>Mi meta es ser desarrollador de software o full stack.</p>

        <div className="flex gap-5 mt-10">
          {socialLinks.map(({ href, icon }) => (
            <a key={icon} href={href} target="_blank" rel="noopener noreferrer">
              <i className={`flex items-center justify-center w-12 h-12 text-2xl rounded-full fa-brands ${icon} 
                dark:hover:bg-blanco dark:hover:text-negro hover:bg-blue-600 hover:text-blanco`}>
              </i>
            </a>
          ))}
        </div>
      </section>

      <section className="w-72 h-72 rounded-full dark:border-indigo-400 border-blue-600 border-2 overflow-hidden">
        <img className="w-full h-full object-cover" src={me} alt="Foto de perfil" />
      </section>

    </main>
  );
};

export default Home;
