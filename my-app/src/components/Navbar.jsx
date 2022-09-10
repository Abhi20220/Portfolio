import React from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/AC.png'

export const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#a19f9f] text-grey-300'>
        <div>
            <img src={Logo} alt="Logo image" style={{width: '50px'}}/>
        </div>
        {/* menu */}
        
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
       

        {/* Hamburger */}
        <div className='md:hidden'>
            <FaBars />
        </div>

        {/* mobile menu */}
        <ul className='absolute top-0 left-0 w-full h-screenbg-[#a19f9f] flex flex-col justify-center items-center'>
                 <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
        </ul>

        {/* social icons */}
        <div className='hidden'></div>

    </div>
  )
}
