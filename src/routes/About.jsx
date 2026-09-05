import React from 'react';
import Duras from '../components/Duras';

const education = [
  {
    title: "Licenciatura en Sistemas",
    place: "Universidad Nacional del Noroeste de la Provincia de Buenos Aires",
    location: "Junín, Buenos Aires",
    period: "2025 - Actualidad",
    current: true,
  },
  {
    title: "Tecnicatura en Programación",
    place: "Escuela de Educación Secundaria Técnica N°2 \"Patricias Argentinas\"",
    location: "Junín, Buenos Aires",
    period: "2021 - 2024",
    current: false,
  },
];

const experience = [
  {
    title: "Investigador",
    place: "ITT UNNOBA",
    location: "Junín, Buenos Aires",
    period: "Septiembre 2024 - Noviembre 2024",
    bullets: [
      "Desarrollo de software de procesamiento de imágenes, conteo y captura de movimiento (tracking).",
      "Documentación de procesos y resultados técnicos mediante papers.",
    ],
  },
  {
    title: "Prácticas profesionalizantes",
    place: "Clarolab",
    location: "Junín, Buenos Aires",
    period: "Agosto 2024 - Septiembre 2024",
    bullets: [
      "Desarrollo de una aplicación web con realidad aumentada.",
      "Resolución de problemas técnicos y optimización de funcionalidades de la aplicación web.",
      "Documentación de procesos y resultados técnicos mediante informes.",
    ],
  },
];

const Timeline = ({ items }) => (
  <ol className="relative border-s-2 border-blue-600/20 dark:border-indigo-400/20 ps-8 space-y-10">
    {items.map((item, index) => (
      <li key={index} className="relative">
        <span className="absolute -start-[41px] top-1 w-4 h-4 rounded-full bg-blue-600 dark:bg-indigo-400 ring-4 ring-blanco dark:ring-negro"></span>

        <p className="text-xs font-semibold tracking-wide uppercase text-blue-600 dark:text-indigo-400">{item.period}</p>
        <h4 className="mt-1 text-xl font-display font-bold text-negro dark:text-blanco">
          {item.title} {item.current && <span className="ms-2 align-middle text-[10px] font-semibold tracking-wide uppercase bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 rounded-full px-2 py-1">En curso</span>}
        </h4>
        <p className="text-sm text-negro/60 dark:text-blanco/60 mt-1">{item.place} · {item.location}</p>

        {item.bullets && (
          <ul className="mt-3 space-y-1.5 text-negro/75 dark:text-blanco/75">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600 dark:text-indigo-400 mt-1">›</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ol>
);

const About = () => {
  return (
    <main className="animate-fadeIn bg-blanco dark:bg-negro text-negro dark:text-blanco">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">

        <section>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Sobre mí</h1>
          <p className="mt-5 text-lg leading-relaxed text-negro/75 dark:text-blanco/75 max-w-prose">
            Técnico en Programación, con formación orientada al desarrollo web, backend y gestión de bases de datos.
            Actualmente cursando la Licenciatura en Sistemas en la UNNOBA. Cuento con experiencia en desarrollo web,
            gestión de bases de datos relacionales, realidad aumentada y varios lenguajes de programación.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-negro/75 dark:text-blanco/75 max-w-prose">
            Me caracterizo por un perfil proactivo y organizado, con actitud de aprendizaje constante y buenas
            habilidades para el trabajo en equipo. Me interesa seguir creciendo en desarrollo de software,
            automatización de sistemas y optimización de procesos.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-8">Experiencia Laboral</h2>
          <Timeline items={experience} />
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-8">Formación Académica</h2>
          <Timeline items={education} />
        </section>

        <section className="flex flex-col items-center text-center">
          <h2 className="font-display text-2xl font-bold mb-8">Habilidades</h2>
          <Duras />
        </section>

      </div>
    </main>
  );
};

export default About;
