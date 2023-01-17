import React, {useState}from 'react'
import logo from '../assets/jm.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={logo} alt="logo" style={{width:'50px'}} />
            </div>
            {/* menu */}
            
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            
            {/* Hamburgrt */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobil menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* social icons */}
            <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-[#4f5bd5] via-[#962fbf] via-[#d62976] to-[#feda75] ' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Instagram <FaInstagram size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-500 ' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-900' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar