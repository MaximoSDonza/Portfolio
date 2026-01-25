import React from 'react';

const Contact = () => {

  const socialLinks = [
    { href: "https://www.linkedin.com/in/m%C3%A1ximo-sebastian-donza-875379301/", icon: "fa-linkedin" },
    { href: "https://github.com/MaximoSDonza", icon: "fa-github" },
    { href: "https://www.instagram.com/maximodonza", icon: "fa-instagram" },
  ];

  const contactos = [
    {href: "https://pablogutierrez.infinityfreeapp.com/", img: "https://avatars.githubusercontent.com/u/159458290?v=4", alt: "Pablo Gutierrez" },
    {href: "https://github.com/SantiagoHenze", img: "https://avatars.githubusercontent.com/u/129229364?v=4", alt: "Santiago Henze" },
    {href: "https://www.linkedin.com/in/carlos-andr%C3%A9s-di-cicco-8046225/", img: "../assets/img/user.png", alt: "Carlos Di Cicco" },
  ]

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
          {contactos.map(({href, img, alt}) => (
            <a className="text-center" href={href} target="_blank" rel="noopener noreferrer">
              <img className="rounded-full w-36 h-36 aspect-square" src={img} alt={alt} />
              <label >{alt}</label>
            </a>
          ))}
        </div>
      </div>

    </main>
  );
}

export default Contact;
