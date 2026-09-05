import React from 'react';

const socialLinks = [
    { href: "https://www.linkedin.com/in/m%C3%A1ximo-sebastian-donza-875379301/", icon: "fa-linkedin", label: "LinkedIn" },
    { href: "https://github.com/MaximoSDonza", icon: "fa-github", label: "GitHub" },
];

const contactInfo = [
    { icon: "fa-regular fa-envelope", label: "Email", value: "maximosebastiandonza@gmail.com", href: "mailto:maximosebastiandonza@gmail.com" },
    { icon: "fa-solid fa-location-dot", label: "Ubicación", value: "Junín, Buenos Aires" },
    { icon: "fa-solid fa-phone", label: "Teléfono", value: "+54 2364-712320", href: "tel:+542364712320" },
];

const initials = (name) => name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

const Contact = () => {
  return (
    <main className="animate-fadeIn bg-blanco dark:bg-negro text-negro dark:text-blanco">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">

        <section>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-center">Contacto</h1>
          <p className="mt-4 text-center text-negro/60 dark:text-blanco/60 max-w-prose mx-auto">
            ¿Tenés una propuesta o una consulta? Estas son mis vías de contacto.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {contactInfo.map(({ icon, label, value, href }) => {
              const content = (
                <div className="flex flex-col items-center gap-3 text-center rounded-2xl border border-negro/10 dark:border-blanco/10 bg-white dark:bg-panel p-6 h-full transition-colors hover:border-blue-600/30 dark:hover:border-indigo-400/30">
                  <i className={`${icon} text-2xl text-blue-600 dark:text-indigo-400`}></i>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-negro/50 dark:text-blanco/50">{label}</p>
                    <p className="font-medium mt-1 break-words">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href}>{content}</a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {socialLinks.map(({ href, icon, label }) => (
              <a key={icon} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <i className={`flex items-center justify-center w-12 h-12 text-2xl rounded-full border border-negro/10 dark:border-blanco/10 fa-brands ${icon}
                  dark:hover:bg-blanco dark:hover:text-negro hover:bg-blue-600 hover:text-blanco hover:border-transparent transition-colors`}>
                </i>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
