import React, { useState } from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  
  const [usuario, setUsuario] = useState({
    nombre:''
  })
  
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form usuario={usuario} setUsuario={setUsuario}  />
    </div>
  )
}

export default Contact