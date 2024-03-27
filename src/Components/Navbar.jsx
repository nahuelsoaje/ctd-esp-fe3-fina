import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from './utils/routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav>
      <button onClick={() => navigate (-1)}>🔙</button>
      <Link to={routes.home} ><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contact</h4></Link>
      <Link to={routes.favs}><h4>Favs</h4></Link>
      

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar