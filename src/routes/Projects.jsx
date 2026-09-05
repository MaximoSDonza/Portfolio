import React from 'react'
import bolsa from '../assets/img/bolsa.png'
import portfolio from '../assets/img/portfolio.png'
import jardin from '../assets/img/jardin.png'

const projects = [
    {
        img: portfolio,
        title: "Mi Portfolio",
        description: "Sitio personal para mostrar mi perfil, experiencia y proyectos.",
        tags: ["React", "Tailwind CSS", "Vite"],
        link: "/",
        github: "https://github.com/MaximoSDonza/Portfolio",
    },
    {
        img: bolsa,
        title: "Bolsa de Trabajo T2",
        description: "Red social entre empresas, egresados y alumnos de 7° año de la E.E.S.T N°2 \"Patricias Argentinas\".",
        tags: ["PHP", "MariaDB"],
    },
    {
        img: jardin,
        title: "Paseo San Cayetano",
        description: "Juego de pistas interactivo para los niños del Jardín de Infantes San Cayetano.",
        tags: ["PHP", "React", "MariaDB"],
    }
];

const Projects = () => {
    return (
        <main className="animate-fadeIn bg-blanco dark:bg-negro text-negro dark:text-blanco min-h-[calc(100vh-73px)]">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <h1 className="font-display text-4xl font-extrabold tracking-tight mb-2">Proyectos</h1>
                <p className="text-negro/60 dark:text-blanco/60 mb-12 max-w-prose">Una selección de trabajos que combinan desarrollo web, backend y bases de datos.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-negro/10 dark:border-blanco/10 bg-white dark:bg-panel transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-600/10 dark:hover:shadow-none dark:hover:border-indigo-400/30"
                        >
                            <div className="relative overflow-hidden aspect-[16/10]">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={project.img}
                                    alt={project.title}
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-display font-bold text-negro dark:text-blanco">{project.title}</h3>
                                <p className="mt-2 text-sm text-negro/70 dark:text-blanco/70 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:bg-indigo-400/10 dark:text-indigo-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 mt-6">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:hover:text-negro transition-colors"
                                        >
                                            Visitar
                                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Repositorio de ${project.title}`}>
                                            <i className="flex items-center justify-center w-10 h-10 text-xl rounded-full border border-negro/10 dark:border-blanco/10 fa-brands fa-github hover:bg-negro hover:text-white dark:hover:bg-white dark:hover:text-negro transition-colors"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Projects;
