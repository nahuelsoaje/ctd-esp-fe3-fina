import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
 // console.log(params);
 // console.log(product);
 const {state, dispatch} = useContextGlobal()
 const {selected} = state

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(url)
    .then(res => dispatch({type:'GET_RECIPE', payload:res.data}) )  
  
  }, [])
console.log(selected);
  return (
    <>
      <h1>Detail Dentist id </h1>
      <div className="card">
      <h3>{selected.name}</h3>
      <h3>{selected.email}</h3>
      <h3>{selected.phone}</h3>
      <h3>{selected.website}</h3>
      <button onClick={()=> dispatch({type:'DELETE_FAV', payload: selected.id})} >❌</button>
      </div>

    
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail