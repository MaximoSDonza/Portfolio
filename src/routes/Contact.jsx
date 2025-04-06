import React from 'react';
import user from '../assets/img/user.png';

const Contact = () => {

  const socialLinks = [
    { href: "https://www.linkedin.com/in/m%C3%A1ximo-sebastian-donza-875379301/", icon: "fa-linkedin" },
    { href: "https://github.com/MaximoSDonza", icon: "fa-github" },
  ];

  return (
    <main className="animate-fadeIn dark:text-blanco dark:bg-negro grid grid-cols-1 content-center gap-16 p-5 text-blue-600 my-10">
      
      <div className="mt-10 text-center">
        <h2 className="text-3xl dark:text-indigo-400 mb-6">Información</h2>
        <p className="text-lg mb-4">
          <i className="fa-regular fa-envelope"></i> maximosebastiandonza@gmail.com
        </p>
        <p className="text-lg mb-4">
          <i className="fa-solid fa-location-dot"></i> Junín, Buenos Aires
        </p>
        <p className="text-lg mb-10">
          <i className="fa-solid fa-phone"></i> +54 236 4452970
        </p>

        <div className="flex justify-center gap-2 mt-6">
          {socialLinks.map(({ href, icon }) => (
            <a key={icon} href={href} target="_blank" rel="noopener noreferrer">
              <i className={`flex items-center justify-center w-12 h-12 text-3xl rounded-full fa-brands ${icon} 
                dark:hover:bg-blanco dark:hover:text-negro hover:bg-blue-600 hover:text-blanco`}>
              </i>
            </a>
          ))}
        </div>


      </div>

      <div>
        <h2 className="text-center dark:text-indigo-400 mb-10 text-3xl">Referencias</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
          <a href="https://github.com/pablitogutierrez" target="_blank" rel="noopener noreferrer">
            <img className="rounded-full w-36 h-36 aspect-square" src="https://avatars.githubusercontent.com/u/159458290?v=4" alt="Pablo Gutierrez" />
          </a>
          <a href="https://github.com/SantiagoHenze" target="_blank" rel="noopener noreferrer">
            <img className="rounded-full w-36 h-36 aspect-square" src="https://avatars.githubusercontent.com/u/129229364?v=4" alt="Santiago Henze" />
          </a>
          <a href="https://www.linkedin.com/in/carlos-andr%C3%A9s-di-cicco-8046225/" target="_blank" rel="noopener noreferrer">
            <img className="rounded-full w-36 h-36 aspect-square" src={user} alt="Carlos Di Cicco" />
          </a>
        </div>
      </div>

    </main>
  );
}

export default Contact;
