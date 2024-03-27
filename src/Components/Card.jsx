import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useContextGlobal } from "./utils/global.context";

const Card = ({item}) => {
  const {dispatch}= useContextGlobal()
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
   <Link to={routes.detail + item.id} > <div className="card">
      <h3>{item.name} </h3>
      <h3>{item.username} </h3>
      <h3>{item.id} </h3>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={()=> dispatch({type:'ADD_FAV', payload:item})} className="favButton">Add fav</button>
    </div></Link>
  );
};

export default Card;
