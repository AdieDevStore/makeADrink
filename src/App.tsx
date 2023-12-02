import { useEffect, useState } from 'react'
import NavBar from './nav'
import Index from './main/index' 
import Search from './search/index'
import './App.css'
import axios from "axios"

const URL = "www.thecocktaildb.com/api/json/v1/1/search.php?f="


function App() {
  let [data, setData]  = useState<any>({}) 
  let [search, setSearch] = useState<string>("")

  const handleChange = ((e:any) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  })

  const handleDataFetch = (() => {
    axios.get(URL).then(resp => {
      console.log(resp.data)
      setData({...resp.data.drinks[0]})
    })
  }) 

  return (
    <>
      <NavBar />
      <Search  onChange={handleChange} />
      <Index data={null}/>
    </>
  )
}

export default App
