import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [product, setProduct] = useState({})
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
 // console.log(params);
 // console.log(product);
 const {favs, setFavs} = useContextGlobal()

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(url)
    .then(res => setProduct(res.data))  
  
  }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div className="card">
      <h3>{product.name}</h3>
      <h3>{product.email}</h3>
      <h3>{product.phone}</h3>
      <h3>{product.website}</h3>
      <button onClick={()=> setFavs([...favs, product])} >⭐</button>
      </div>

    
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail