import React from 'react'
import Logo from './Logo/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className='container-fluid'>
    <img src={Logo} alt="" style={{maxWidth:'90px', objectFit:'contain', overflow:'hidden'}}/>
    <img src="https://img.icons8.com/fluency/48/000000/weather.png" alt="sunny"/>
    <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-cloudy-weather-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png" alt="cloudy"/>
    <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-rainy-weather-justicon-flat-justicon-2.png" alt="rainy"/>
    </div>
    </nav>
  )
}

export default Navbar
