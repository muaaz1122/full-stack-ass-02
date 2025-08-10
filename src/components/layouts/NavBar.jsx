import React from 'react'
import { Link } from 'react-router-dom'
import MuaazPage from '../pages/MuaazPage'

const NavBar = () => {
  return (

  <nav className="bg-gray-800">

        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex shrink-0 items-center">
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="h-8 w-auto" />
          </div>
          <div className="ml-6 block">
            <div className="flex space-x-4">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Link to="/" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home </Link>
              <Link to="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</Link>
              <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</Link>
              <Link to="/form" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Form</Link>
              <Link to="/muaaz-page" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">MuaazPage</Link>
              <Link to="/iot-page" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">IotPage</Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         
          {/* Profile dropdown */}
          
            {/*
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
            
          </div>
       
    
   
  </nav>

  )
}

export default NavBar