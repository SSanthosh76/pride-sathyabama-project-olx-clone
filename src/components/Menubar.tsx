import arrow from '../assets/arrow.png'

type menuProp = {
    setMenu:any
}

const Menubar = (props:menuProp) => {
    return(
        <><div className="flex shadow-sm h-10 p-2">
            <input type="text" placeholder='Category ' className='ml-2 outline-none bg-slate-100 ml-16 ' />
            <img src={arrow} className='ml-1 w-8 h-7' />
                <h1 onClick={()=> props?.setMenu("Shirt")} className="ml-12 cursor-pointer hover:text-green-500">Cars</h1>
                <h1 onClick={()=> props?.setMenu("jacket")} className=" ml-5 cursor-pointer hover:text-green-500">Motorcycles</h1>
                <h1 onClick={()=> props?.setMenu("Men")} className=" ml-5 cursor-pointer hover:text-green-500">For Sale: Houses & Apartments</h1>
                <h1 onClick={()=> props?.setMenu("Women")} className=" ml-5 cursor-pointer hover:text-green-500">Scooters</h1>
                <h1 onClick={()=> props?.setMenu("sd card")} className=" ml-5 cursor-pointer hover:text-green-500">Commercial & Other Vehicles</h1>
                <h1 onClick={()=> props?.setMenu("gold")} className=" ml-5 cursor-pointer hover:text-green-500">For Rent: Houses & Apartments</h1>
            </div></>
    )
  }
  
  export default Menubar