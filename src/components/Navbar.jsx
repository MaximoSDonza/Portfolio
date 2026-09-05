import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CvBtn from './CvBtn'

const CV_URL = `${import.meta.env.BASE_URL}cv/CV-Maximo-Donza.pdf`

const links = [
    { to: '/', label: 'Inicio' },
    { to: '/About', label: 'Sobre mi' },
    { to: '/Projects', label: 'Proyectos' },
    { to: '/Contact', label: 'Contacto' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    });

    useEffect(() => {
        if (theme == 'dark') {
            document.querySelector("html").classList.add('dark')
        } else {
            document.querySelector("html").classList.remove('dark')
        }
    }, [theme])

    useEffect(() => {
        setOpen(false);
    }, [pathname])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light')
    }

    const isActive = (to) => pathname === to;

    return (
        <header className="sticky top-0 z-50 bg-blanco/80 dark:bg-negro/80 backdrop-blur-md border-b border-blue-600/10 dark:border-indigo-400/10">
            {/* NAVBAR DESKTOP */}
            <div className='hidden lg:flex justify-between px-8 py-4 items-center max-w-6xl mx-auto'>
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 dark:bg-indigo-400 group-hover:rotate-45 transition-transform duration-300"></span>
                    <h2 className="text-2xl font-display font-bold text-negro dark:text-blanco tracking-tight">DONZA.</h2>
                </Link>

                <nav className='flex gap-8 items-center text-sm font-medium tracking-wide'>
                    {links.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`relative py-1 transition-colors duration-200 ${isActive(to)
                                ? 'text-blue-600 dark:text-indigo-400'
                                : 'text-negro/70 dark:text-blanco/70 hover:text-blue-600 dark:hover:text-indigo-400'
                                }`}
                        >
                            {label}
                            <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 dark:bg-indigo-400 transition-all duration-300 ${isActive(to) ? 'w-full' : 'w-0'}`}></span>
                        </Link>
                    ))}

                    <span className="w-px h-5 bg-negro/10 dark:bg-blanco/10"></span>

                    <button
                        onClick={handleChangeTheme}
                        aria-label="Cambiar tema"
                        className="text-negro/70 dark:text-blanco/70 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        <span className="material-symbols-outlined align-middle">{theme == 'dark' ? 'dark_mode' : 'light_mode'}</span>
                    </button>

                    <CvBtn CV_URL={CV_URL}/>
                </nav>
            </div>

            {/* NAVBAR MOBILE */}
            <div className='lg:hidden px-5 py-4'>
                <div className='flex justify-between items-center'>
                    <Link to="/" className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-sm bg-blue-600 dark:bg-indigo-400"></span>
                        <h2 className="text-xl font-display font-bold text-negro dark:text-blanco tracking-tight">DONZA.</h2>
                    </Link>
                    <div className="flex items-center gap-3">
                        <button onClick={handleChangeTheme} aria-label="Cambiar tema" className="text-negro/70 dark:text-blanco/70">
                            <span className="material-symbols-outlined align-middle">{theme == 'dark' ? 'dark_mode' : 'light_mode'}</span>
                        </button>
                        <button onClick={() => { setOpen(!open) }} aria-label="Abrir menú" className="text-negro dark:text-blanco">
                            <span className="text-3xl material-symbols-outlined align-middle">{open ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>

                <nav className={`grid overflow-hidden transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="min-h-0 flex flex-col gap-1">
                        {links.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${isActive(to)
                                    ? 'bg-blue-600/10 text-blue-600 dark:bg-indigo-400/10 dark:text-indigo-400'
                                    : 'text-negro/80 dark:text-blanco/80'
                                    }`}
                            >
                                {label}
                            </Link>
                        ))}
                        <CvBtn CV_URL={CV_URL}/>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
