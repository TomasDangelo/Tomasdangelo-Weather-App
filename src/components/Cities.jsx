import React from 'react'

const Cities = () => {
  return (
    <div className='container-fluid w-25'>
     <h3>Te dejo algunas de las cientas de opciones que podés consultar...</h3>
    <table className="table table-hover text-center">
        <thead>
            <tr>
                <th scope='col'>Ciudad</th>
            </tr>
        </thead>
        <tbody>

             <tr className="table-active">
                <th scope='row'>Santiago de Chile</th>
            </tr>
            <tr className="table-secondary">
                <th scope='row'>Lima</th>
            </tr>
            <tr className="table-success">
                <th scope='row'>Buenos Aires</th>
            </tr>
            <tr className="table-danger">
                <th scope='row'>Rosario</th>
            </tr>
            <tr className="table-warning">
                <th scope='row'>New York</th>
            </tr>
            <tr className="table-info">
                <th scope='row'>Sao Paulo</th>
            </tr>
            <tr className="table-light">
                <th scope='row'>Montevideo</th>
            </tr>
            <tr className="table-dark">
                <th scope='row'>Florianopolis</th>
            </tr>
            <tr className="table-active">
                <th scope='row'>Asunción</th>
            </tr>
            <tr className="table-secondary">
                <th scope='row'>Santa Cruz de la Sierra</th>
            </tr>
      
            <tr className="table-success">
                <th scope='row'>Brasilia</th>
            </tr>
                    <tr className="table-warning">
                <th scope='row'>Manaus</th>
            </tr>
            <tr className="table-info">
                <th scope='row'>Rio de Janeiro</th>
            </tr>
            <tr className="table-light">
                <th scope='row'>Ciudad de México</th>
            </tr>
            <tr className="table-dark">
                <th scope='row'>Toronto</th>
            </tr>
            <tr className="table-active">
                <th scope='row'>Berlín</th>
            </tr>
            <tr className="table-secondary">
                <th scope='row'>Estocolmo</th>
            </tr>
            <tr className="table-success">
                <th scope='row'>Londres</th>
            </tr>
            <tr className="table-danger">
                <th scope='row'>París</th>
            </tr>
            <tr className="table-warning">
                <th scope='row'>Kiev</th>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Cities