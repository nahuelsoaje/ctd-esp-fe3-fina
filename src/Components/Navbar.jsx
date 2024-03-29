import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from './utils/routes'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const [theme, setTheme] = useState("light")

  useEffect(()=>{
    if(theme == "dark"){
      document.querySelector('body',).classList.add('dark')
    }else{
      document.querySelector('body',).classList.remove('dark')
    }

  },[theme])
  const handleTheme = () =>{
    setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
  }

  return (
    <nav>
      <Link to={routes.home} ><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contact</h4></Link>
      <Link to={routes.favs}><h4>Favs</h4></Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='dark'>
      <button onClick={handleTheme}>Change theme</button>
      </div>
      
    </nav>
  )
}

export default Navbar