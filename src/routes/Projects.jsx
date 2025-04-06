import React from 'react'
import bolsa from '../assets/img/bolsa.png'
import portfolio from '../assets/img/portfolio.png'
import jardin from '../assets/img/jardin.png'

const projects = [
    {
        img: portfolio,
        title: "Mi Portfolio",
        description: "Hecho con React y Tailwind",
        link: "/",
        github: "https://github.com/MaximoSDonza/Portfolio",
    },
    {
        img: bolsa,
        title: "Bolsa de Trabajo T2",
        description: "Es una red social entre empresas, egresados y alumnos de 7° Año de la secundaria 'E.E.S.T N°2 Patricias Argentinas'. Hecho con PHP y MariaDB",
    },
    {
        img: jardin,
        title: "Paseo San Cayetano",
        description: "Es un juego de pistas para los niños del 'Jardin de infantes San Cayetano'. Hecho con PHP, React y MariaDB",
    }
];

const Projects = () => {
    return (
        <main className="animate-fadeIn dark:text-indigo-400 dark:bg-negro grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-10 text-blue-600">
            {projects.map((project, index) => (
                <div key={index} className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
                    <a href={project.link} className="w-full">
                        <img className="rounded-t-lg w-full aspect-[16/9] object-cover" src={project.img} alt={project.title} />
                    </a>
                    <div className="p-5 flex flex-col flex-grow">
                        <a href={project.link}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-600 dark:text-indigo-400">{project.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">{project.description}</p>
                        <div className="flex items-center space-x-3">
                            {project.link && (
                                <a href={project.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Visitar
                                    <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} className="inline-flex items-center">
                                    <i className="flex items-center justify-center w-12 h-12 text-2xl rounded-full fa-brands fa-github dark:hover:bg-white dark:hover:text-negro hover:bg-blue-400 hover:text-white"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default Projects;
