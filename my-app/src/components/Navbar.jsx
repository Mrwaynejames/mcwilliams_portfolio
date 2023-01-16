import React from 'react'
import logo from '../assets/jm.png'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
    return (
        <div className="fixed w-full h-[80px] flex jusitfy-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={logo} alt="logo" style={{width:'50px'}} />
            </div>
            {/* menu */}
            <div>
                <ul className="flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/* Hamburgrt */}
            <div className="hidden">
                <FaBars />
            </div>
            {/* mobil menu */}
            <ul className="hidden">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* social icons */}
            <div></div>
        </div>
    )
}

export default Navbar