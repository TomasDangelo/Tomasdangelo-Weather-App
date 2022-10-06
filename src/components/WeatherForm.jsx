import React from 'react'

const WeatherForm = ({getWeather}) => {
  return (
    <div className="card card-body">
        <form className='d-flex gap-4 flex-column h-100' onSubmit={getWeather}>
            <div>
                <input className='form-control' type="text" name="city" placeholder='Escribí el nombre de la ciudad que querés buscar' autoFocus/>
            </div>
          
        <button className='btn btn-success d-block'>
            Obtener clima
        </button>
        </form>
    </div>
  )
}

export default WeatherForm