import React from 'react'

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid d-flex justify-content-between text-center">
          <div className='col-12 col-md-4'>
             <p className='text-white'>Creado por Tomás D'Angelo con ReactJS</p>
          </div>
            <div className='col-12 col-md-4'>
             <p className='text-white'>Información en tiempo real <br /> provienente de la <a className='text-white' href="https://openweathermap.org/">API de OpenWeather</a></p>
            </div>
            <div className='col-12 col-lg-4'>
            <a href="https://wa.me/+543415987640?text=¡Hola Tomás!"><img src={"https://img.icons8.com/color/48/000000/whatsapp--v1.png"} alt="whatsapp"/></a> 
            <a href="mailto:tomasdangelo7@outlook.es"> <img src={"https://img.icons8.com/color/48/000000/microsoft-outlook-2019--v2.png"} alt='outlook'/></a>
            <a href="https://www.linkedin.com/in/tomasdangelo/" target={"_blank"}><img src={"https://img.icons8.com/fluency/48/000000/linkedin-2.png"} alt='linkedin'/></a> 
            <a href="https://github.com/TomasDangelo"><img alt='github' src={"https://img.icons8.com/ios-filled/50/000000/github.png"}/></a>
            </div>
         

        </div>
    </nav>
  )
}

export default Footer