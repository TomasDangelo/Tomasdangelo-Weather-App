import React from 'react'

const Description = () => {
  return (
    <div className='container-fluid mt-4 d-flex flex-column align-items-center justify-content-center'>
    <h1 className='text-info'>¿Cómo funciona?</h1>
    <p className='fs-4'> <span className='text-primary fw-bold'>Consultando el nombre de la ciudad que quieras!</span> Con ello, obtendrás los datos más relevantes de su clima.</p>
    <p className='fs-4'>Si colocás una ciudad y no devuelve su información, es porque no se tienen los datos disponibles.</p>
    </div>
  )
}

export default Description