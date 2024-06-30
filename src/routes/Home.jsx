import React from 'react'
import bolaamarilla from '../assets/img/bolaamarilla.png'
const Home = () => {
  return (
    <>
    
      <main className='dark:text-blanco dark:bg-negro flex h-full flex-col-reverse lg:flex-row p-5 items-center text-blue-400 justify-evenly my-50xl flex-wrap'>

        <div className=''>
          <h2>Hola! Soy Máximo.</h2>
          <p>Soy un programador trainee.</p>
          <p>Mi meta es ser desarrollador de software, o desarrollador full stack.</p>
          <div className='flex justify-between mt-10'>
            <a href="https://www.instagram.com/maximodonza/"><i className="flex items-center justify-center w-12 h-12 text-2xl rounded-full fa-brands fa-instagram dark:hover:bg-blanco dark:hover:text-negro hover:bg-blue-400 hover:text-blanco"></i></a>
            <a href=""><i className="flex items-center justify-center w-12 h-12 text-2xl rounded-full fa-brands fa-linkedin dark:hover:bg-blanco dark:hover:text-negro hover:bg-blue-400 hover:text-blanco"></i></a>
            <a href=""><i className="flex items-center justify-center w-12 h-12 text-2xl rounded-full fa-brands fa-github dark:hover:bg-blanco dark:hover:text-negro hover:bg-blue-400 hover:text-blanco"></i></a>
          </div>
        </div>

        <div className=''>
          <img className='aspect-auto	rounded-full w-80 h-80' src={bolaamarilla} alt="hola" />
        </div>

      </main>

    </>
  )
}

export default Home
