import React, { useState } from "react";
import Contact from "../Routes/Contact";


const Form = ({usuario, setUsuario, }) => {
  //Aqui deberan implementar el form completo con sus validaciones
  /*const [usuario, setUsuario] = useState({
    nombre:''
  })*/
const [show, setShow] = useState(false)
const [error, setError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (usuario.nombre.length > 5){
     setShow(true)  
    }else{
     setError(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Nombre">Nombre</label>
        <input type="text" onChange={({target}) => setUsuario({...usuario, nombre: target.value})} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" role="email" />
        <button type="submit">Enviar</button>

      </form>
      {show && <p>Gracias {usuario.nombre} te contactaremos cuando antes vía mail</p> }
      {error && <p>Por favor verifique su información nuevamente</p>}

    </div>
  );
};

export default Form;
