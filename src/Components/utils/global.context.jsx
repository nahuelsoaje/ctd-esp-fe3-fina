import { createContext, useContext, useEffect, useReducer, useState} from "react";
import { reducer } from "./reducer";
import axios from "axios";


export const initialState = {
  list:[],
  selected:{},
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
  axios(url)
  //console.log(res.data)
  .then(res=> {dispatch({type:'GET_LIST', payload:res.data})})
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])
  

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  )
} 
  export default ContextProvider
  export const useContextGlobal = () => useContext(ContextGlobal)

