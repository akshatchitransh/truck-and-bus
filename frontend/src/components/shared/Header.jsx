import React from 'react'
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <header className ="sticky shadow-lg">
      <div className="flex items-center justify-between max-w-6xl p-4 mx-auto lg:max-w-7xl">
      <Link to={"/"}>
          <h1 className="flex flex-wrap text-xl font-bold sm:text-2xl">
            <span className="text-slate-500">Truck</span>
            <span className="text-slate-900">Bus</span>
          </h1>
        </Link>
    <form className="flex items-center p-3 rounded-lg bg-slate-100">
        <input type="text"
            placeholder="Search..."
            className="w-24 bg-transparent focus:outline-none sm:w-64"/>

            <button>
            hi
            </button>
    </form>

<ul className="flex gap-4">
    <Link to={"/"}>
    <li className="hidden lg:inline text-slate-700 hover:underline">
        Home</li>
    </Link>

    <Link to={"/about"}>
    <li className="hidden lg:inline text-slate-700 hover:underline">
        About</li>
    </Link>

    <Link to={"/news"}>
    <li className="hidden lg:inline text-slate-700 hover:underline">
        News Article</li>
    </Link>

    



</ul>
<Link to= {"/sign-in"}>
     <button className='text-white bg-black '>Sign In</button>
     </Link>







      </div>
    </header>
  )
}

export default Header
