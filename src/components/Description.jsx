import React from 'react'

const Description = () => {
  return (
    <>
    <div className='container-fluid w-100 h-75 d-flex p-0'>
      <img className='img-fluid w-100' style={{objectFit:'contain', maxHeight:'900px'}} src="https://i0.wp.com/enlacelatinonc.org/wp-content/uploads/2022/04/El-Clima-hoy.jpg?fit=1200%2C676&ssl=1" alt="weather-states" />
   </div>
    <div className='container-fluid mt-4 d-flex flex-column align-items-center justify-content-center'>
    <h1 className='text-info'>¿Cómo funciona?</h1>
    <p className='fs-4'> <span className='text-primary fw-bold'>Consultando el nombre de la ciudad que quieras!</span> Con ello, obtendrás los datos más relevantes de su clima.</p>
    <p className='fs-4'>Si colocás una ciudad y no devuelve su información, es porque no se tienen los datos disponibles.</p>
    <p className='fs-6'>Para más exactitud, podés poner el nombre de la ciudad, y seguido de una coma las primeras dos iniciales de su país. Por ejemplo, "Rosario, AR"</p>
    </div>
    </>
  )
}

export default Description