import React from 'react'

const Projects = () => {
  return (
    <>
      <main className="dark:text-blanco dark:bg-negro grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:items-start lg:justify-start lg:gap-y-0 lg:gap-x-5 text-blue-400 gap-y-12 my-5 lg:my-20">

        

        <div className="mx-4 lg:mx-10 w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="../assets/img/bolaamarilla.png" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mi Portfolio</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hecho con React y Tailwind</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Visitar
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none">
                  <i className="flex items-center justify-center w-12 h-12 text-2xl rounded-full fa-brands fa-github dark:hover:bg-blanco dark:hover:text-negro hover:bg-blue-400 hover:text-blanco"></i>
                </a>
            </div>
        </div>

        <div className="mx-4 lg:mx-10 w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="">
                <img className="rounded-t-lg" src="../assets/img/bolaamarilla.png" alt="" />
            </a>
            <div className="p-5">
                <a href="">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bolsa de Trabajo T2</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Es una red social entre empresas, egresados y alumnos de 7° Año de la secundaria "E.E.S.T N°2 Patricias Argentinas". <br /> Hecho con PHP y MariaDB.</p>
            </div>
        </div>

        <div className="mx-4 lg:mx-10 w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="">
                <img className="rounded-t-lg" src="../assets/img/bolaamarilla.png" alt="" />
            </a>
            <div className="p-5">
                <a href="">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Paseo San Cayetano</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Es un juego de pistas para los niños del "Jardin de infantes San Cayetano". <br /> Hecho con Node, React y MariaDB</p>
            </div>
        </div>

      

      </main>
    </>
  )
}

export default Projects
