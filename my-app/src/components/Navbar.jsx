import React, {useState}from 'react'
import logo from '../assets/jm.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import resume from "../assets/Jack_McWilliams_Tech.pdf";
import {Link} from  'react-scroll'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={logo} alt="logo" style={{width:'50px'}} />
            </div>
            {/* menu */}
            
                <ul className="hidden md:flex ">
                    <li className="hover:text-[#edff00]" >
                        <Link to="home" smooth={true}  duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-[#edff00]"><Link to="about" smooth={true}  duration={500}>
                            About
                        </Link></li>
                    <li className="hover:text-[#edff00]" ><Link to="skills" smooth={true}  duration={500}>
                            Skills
                        </Link></li>
                    <li className="hover:text-[#edff00]" ><Link to="work" smooth={true}  duration={500}>
                            Work
                        </Link></li>
                    <li className="hover:text-[#edff00]" ><Link to="contact" smooth={true}  duration={500}>
                            Contact
                        </Link></li>
                </ul>
            
            {/* Hamburgrt */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobil menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><li className="hover:text-[#edff00]"><Link onClick={handleClick} to="home" smooth={true}  duration={500}>
                            Home
                        </Link></li></li>
                <li className='py-6 text-4xl'><li className="hover:text-[#edff00]" ><Link onClick={handleClick} to="about" smooth={true}  duration={500}>
                            About
                        </Link></li></li>
                <li className='py-6 text-4xl'> <li className="hover:text-[#edff00]" ><Link onClick={handleClick} to="skills" smooth={true}  duration={500}>
                            Skills
                        </Link></li></li>
                <li className='py-6 text-4xl'><li className="hover:text-[#edff00]" ><Link onClick={handleClick} to="work" smooth={true}  duration={500}>
                            Work
                        </Link></li></li>
                <li className='py-6 text-4xl'><li className="hover:text-[#edff00]" ><Link onClick={handleClick} to="contact" smooth={true}  duration={500}>
                            Contact
                        </Link></li></li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/jack-mcwilliams1996/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/Mrwaynejames">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-[#4f5bd5] via-[#962fbf] via-[#d62976] to-[#feda75] ' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.instagram.com/jackmcwillliams/">
                            Instagram <FaInstagram size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-900' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href={resume}>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar