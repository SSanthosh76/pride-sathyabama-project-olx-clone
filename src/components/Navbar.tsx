import olx from '../assets/olx.png'
import lens from '../assets/lens.png'
import arrow from '../assets/arrow.png'
import search from '../assets/search.png'
import { useState } from 'react'
import Login from './Login'

type searchProp = {
    setSearch:any
}

const Navbar = (props:searchProp) => {

    const [loginPop,setLoginPop] = useState(false)

    return(
        <>
        <div className='flex p-4 pl-5 bg-slate-100 shadow-md'>
         <img src={olx} className='w-11 h-9' />
         <div className='flex border-2 border-spacing-1 w-64 p-2 border-black ml-5'>
            <img src= {lens} className='w-6 h-5 mt-1 pr-2' />
            <input type="text" placeholder='location ' className='ml-2 outline-none bg-slate-100' />
            <img src={arrow} className='w-8 h-7' />
         </div>
         <div className='flex h-12 ml-4 border-2 border-black '>
            <input onChange={(e)=> props?.setSearch(e.target.value)} type="text"  placeholder='find Cars, Moblie Phones and More' className='ml-3 w-[600px] outline-none bg-slate-100' />
            <img src={search} className=''/>
         </div>
         <div className='flex h-12 p-3 ml-7 cursor-pointer'>
            <h1 className='font-semibold'>ENGLISH</h1>
            <img src={arrow} className='w-8 h-7' />
         </div>
         <div onClick={()=> setLoginPop(!loginPop)} className='flex h-12 p-3 ml-7 cursor-pointer underline hover:no-underline'>
            <h1 className='font-bold text-lg'>LOGIN</h1>
         </div>
         <div className='w-28 flex h-12 p-2 ml-8 cursor-pointer rounded-full border border-yellow-500'>
            <h1 className='font-bold text-lg ml-3'>+ SELL</h1>
         </div>
        </div>
        {loginPop && <Login setLoginPop={setLoginPop}/>}
        </>
    )
  }
  
  export default Navbar