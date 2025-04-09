import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   const routes =[
    {path: "/", name: "Home"},
    {path: "/unete", name:"Unete a la aventura"},
    {path: "/TOE", name:"TOE"},
    {path: "/biblioteca", name:"biblioteca"}
   ]

  return (
    <nav>
    <ul className='flex justify-center gap-4'>
        {routes.map((route)=>(
            <li key={route.path}>
                <NavLink
                to={route.path} className={({isActive})=>`text-white transition ${isActive ? "underline font-bold" : "hover:text-gray-400" }`}>{route.name}</NavLink>
            </li>
        ))}
    </ul>
    </nav>
  )
}

export default Navbar