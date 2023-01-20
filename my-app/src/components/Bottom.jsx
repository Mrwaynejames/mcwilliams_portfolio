import React from 'react'
import resume from "../assets/Jack_McWilliams_Tech.pdf";


const Bottom = () => {
  return (
    <div className="w-full h-[70px] flex justify-center items-center px-4 bg-[#edff00] text-[#0a192f]">
        <ul className='flex justify-center items-center'>
            <a href="https://www.linkedin.com/in/jack-mcwilliams1996/">
                <li className='no-underline hover:underline'>Linkedin</li>
            </a>
            <a href="https://github.com/Mrwaynejames">
                <li className='no-underline hover:underline'>Github</li>
            </a>
            <a href={resume}>
                <li className='no-underline hover:underline'>Resume</li>
            </a>
            <a href="https://www.instagram.com/jackmcwillliams/">
                <li className='no-underline hover:underline'>Instagram</li>
            </a>
            <a href="https://github.com/Mrwaynejames/mcwilliams_portfolio">
                <li className='no-underline hover:underline'>Website Repository</li>
            </a>
        </ul>
    </div>
  )
}

export default Bottom