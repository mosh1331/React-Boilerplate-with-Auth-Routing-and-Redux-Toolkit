import React from 'react'
import { Link } from 'react-router-dom'

const LandingLayout = ({ children }) => {
   
    return (
        <div className="min-h-screen flex flex-col font-playfair">
            <nav className="bg-primary text-white p-2 px-8 flex justify-between items-center">
                <div className='cursor-pointer w-12 h-12 '>
                    <img className='w-full h-full block' src={'logo.svg'} alt="" />
                </div>
               <div className="flex items-center gap-x-12">
               <div className="flex space-x-4">
                    <Link to="/about"  className="hover:underline text-navyBlue text-[16px] font-playfair">About Us</Link>
                    <Link to="/contact"  className="hover:underline text-navyBlue text-[16px] font-playfair">Contact Us</Link>
                </div>
                <Link className="px-4 py-1 bg-highlight rounded text-[14px] hover:bg-hoverColor" to="/login" >Login</Link>
               </div>
            </nav>
            {children}
        </div>
    )
}

export default LandingLayout