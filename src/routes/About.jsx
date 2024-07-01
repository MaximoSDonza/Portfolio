import React, { useEffect, useState } from 'react'
import Duras from '../components/Duras'
import Blandas from '../components/Blandas'
const About = () => {
  const [habilidad,setHabilidades] = useState('duras');
  
  const handleChangeHability=(val)=>{
    setHabilidades(val);
  }


  return (
    <>
      
      <main className="dark:text-blanco dark:bg-negro flex gap-1 h-full flex-col p-5 text-blue-400 justify-evenly my-50xl lg:flex-wrap">

        <div className='flex flex-col items-center'>
          <h2 className='mb-10 text-3xl'>Sobre Mi</h2>
          <h3 className='text-xl'>Máximo Donza</h3>
          <p className='text-lg'>Programador trainee</p>
          <p className='text-lg'>18 Años</p>
          <p className='text-base'>Actualmente estoy cursando la educación secundaria.
            Apunto a un titulo universitario, me gusta el backend pero apunto al desarrollo full stack.
          </p>
          <p className='text-base'>Mi deporte favorito es el futbol y soy un apasionado de la musica y los videojuegos.</p>
        </div>

        <div className='dark:bg-negro flex flex-col mt-20 mb-20 h-1/2'>
          <h2 className='mb-20 text-3xl mx-auto'>Habilidades</h2>
          <div className="h-full dark:bg-negro flex flex-col lg:flex-row lg:justify-evenly lg:gap-5">
            <div className="flex lg:flex-col justify-around pb-12 lg:pb-0 lg:pr-24 h-full border-solid border-blue-400 dark:border-blanco border-b-2 lg:border-b-0 lg:border-r-2">
              <button className='text-2xl' onClick={()=>handleChangeHability('blandas')}>Blandas</button>
              <button className='text-2xl' onClick={()=>handleChangeHability('duras')}>Duras</button>
            </div>
            <div className="flex dark:bg-negro justify-center flex-row flex-wrap shrink-0 gap-5 w-full lg:w-1/2 p-5">
              { habilidad=='duras' ? <Duras/> : <Blandas/>}
            </div>
          </div>
        </div>

      </main>

    </>
  )
}

export default About
