import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [open,setOpen] = useState(false);
    const [theme,setTheme] = useState(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark';
        }

        return 'light';
    });

    useEffect(()=>{
        if(theme=='dark'){
            document.querySelector("html").classList.add('dark')
        }else{
            document.querySelector("html").classList.remove('dark')
        }
    },[theme])

    const handleChangeTheme = ()=>{
        setTheme(prevTheme=>prevTheme=='light' ? 'dark' : 'light')
    }

  return (
    <>
        {/* NAVBAR DESKTOP */}
        <div className='hidden lg:flex justify-between p-5 items-center text-blue-400 mx-0 dark:text-blanco dark:bg-negro'> 
            <Link to="/"><h2 className="text-3xl">.DONZA</h2></Link>
            <nav className='flex gap-5 text-lg mx-0'>
                <div className='hidden xl'></div>
                <Link to="/" className="relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-400 dark:after:bg-blanco after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Home</Link>
                <Link to="/About" className="relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-400 dark:after:bg-blanco after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">About</Link>
                <Link to="/Contact" className="relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-400 dark:after:bg-blanco after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact</Link>
                <Link to="/Projects" className="relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-400 dark:after:bg-blanco after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Projects</Link>
                <button onClick={handleChangeTheme}>{theme=='dark' ? <span className="material-symbols-outlined">dark_mode</span> : <span className="material-symbols-outlined">light_mode</span>}</button>
            </nav>     
        </div>

        {/* NAVBAR MOBILE */}
        <div className='lg:hidden flex flex-col p-5 text-blue-400 dark:text-blanco dark:bg-negro'>
            <div className='flex justify-between items-center'>
                <Link to="/"><h2 className="text-2xl">.DONZA</h2></Link>
                <button onClick={()=>{setOpen(!open)}}>{open ? <span className="text-4xl material-symbols-outlined">close</span> : <span className="text-4xl material-symbols-outlined">menu</span>}</button>
            </div>
            <nav className={`flex flex-col gap-5 text-lg mx-0 justify-center ${open ? '' : 'hidden'}`}>
                <Link to="/" className="">Home</Link>
                <Link to="/About" className="">About</Link>
                <Link to="/Contact" className="">Contact</Link>
                <Link to="/Projects" className="">Projects</Link>
                <button onClick={handleChangeTheme}>{theme=='dark' ? <span className="material-symbols-outlined">dark_mode</span> : <span className="material-symbols-outlined">light_mode</span>}</button>
            </nav>
        </div>
    </>
  )
}

export default Navbar
