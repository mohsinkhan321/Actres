import React, { useEffect, useState } from "react";
import axios from "axios"
import "./App.css"
import Header from "./Header";
import Character from "./Character";
import Search from "./Search";

const App = () =>{
  const [Items, setItems] = useState([])
  const [Loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  

  useEffect(()=>{
    const fetchItems = async () =>{
      const result = await axios (`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setLoading(false)
    }
    fetchItems()
  },[query])

 
  return(
    <>
    <div className="container">
      <Header/>
      <Search getQuery={(q)=>setQuery(q)}/>
      <Character Loading ={Loading} Items ={Items}/>
    </div>
    </>
  )
}

export default App



