import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
const {state} = useContextGlobal()
//console.log(state);
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.list.map((item)=> <Card key={item.id}  item={item} />)}
      </div>
    </main>
  )
}

export default Home