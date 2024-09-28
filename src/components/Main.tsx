import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Menubar from './Menubar'
import Home from './Home'
import Footer from './Footer'

const Main = () => {

    const[prod,setProd] = useState([])
    const[search,setSearch] = useState("")
    const[menu,setMenu] = useState("")

    const getproducts = () =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProd(json))
    }

    useEffect(()=>{
        getproducts()
    },[])

    return(
      <div>
        <Navbar setSearch={setSearch}/>
        <Menubar setMenu={setMenu}/>
        <Home products={prod} search={search} Menu={menu}/>
        <Footer/>
      </div>
    )
  }
  
  export default Main