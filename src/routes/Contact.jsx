import React from 'react'

const Contact = () => {
  return (
    <>
      <main className="dark:text-blanco dark:bg-negro grid grid-cols-1 content-center gap-20  gap-y-20 p-5 text-blue-400   my-50xl ">

      <div className='mt-10'>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl mb-6'>Información</h2>
          <p className=' text-lg mb-4'><i className="fa-regular fa-envelope"></i> maximodonza.business@gmail.com</p>
          <p  className=' text-lg mb-10'><i className="fa-solid fa-phone"></i> +54 236 4452970</p>
          <h3 className='mt-20 mb-8 text-3xl'>Redes Sociales</h3>
        </div>
        <div className='grid sm:grid-cols-2 gap-y-10 lg:grid-cols-3 gap-2 justify-items-center'>
          <a href="https://www.instagram.com/maximodonza/"><i className="flex items-center justify-center w-16 h-16 text-4xl rounded-full fa-brands fa-instagram dark:hover:bg-blanco dark:hover:text-negro hover:bg-blue-400 hover:text-blanco"></i></a>
          <a href="www.linkedin.com/in/máximo-sebastian-donza-875379301"><i className="flex items-center justify-center w-16 h-16 text-4xl rounded-full fa-brands fa-linkedin dark:hover:bg-blanco dark:hover:text-negro hover:bg-blue-400 hover:text-blanco"></i></a>
          <a href="https://github.com/MaximoSDonza"><i className="flex items-center justify-center w-16 h-16 text-4xl rounded-full fa-brands fa-github dark:hover:bg-blanco dark:hover:text-negro hover:bg-blue-400 hover:text-blanco"></i></a>
        </div>
      </div>
      
      <div>
        <h2 className='flex justify-center mb-10 text-3xl'>Referencias</h2>
        <div className='grid sm:grid-cols-2 gap-y-20 lg:grid-cols-3 justify-items-center'>
          <a className='w-36 h-36' href="https://github.com/pablitogutierrez"><img className='aspect-auto	rounded-full w-36 h-36' src="https://avatars.githubusercontent.com/u/159458290?v=4" alt="Pablo Gutierrez" /></a>
          <a className='w-36 h-36' href="https://github.com/SantiagoHenze"><img className='aspect-auto	rounded-full w-36 h-36' src="https://avatars.githubusercontent.com/u/129229364?v=4" alt="Santiago Henze" /></a>
          <a className='w-36 h-36' href="https://www.linkedin.com/in/carlos-andr%C3%A9s-di-cicco-8046225/"><img className='aspect-auto	rounded-full w-36 h-36' src="../assets/img/user.png" alt="Carlos Di cicco" /></a>
        </div>
      </div>


      </main>
    </>
  )
}

export default Contact
