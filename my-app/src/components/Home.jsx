import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from  'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#edff00]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jack McWilliams</h1>
            <h2 className='text-4xl sm:text7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
              I am a recent graduate from UC Berkeley Full Stack Certification program
              as well as having my B.A in Business from the Univeristy of Oregon. 
              For the last year I have been an E-commerce manager. I know my education and experience will make a valuable member to your team. </p>
            <div>
                <Link to="work" smooth={true}  duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#edff00]  hover:text-[#0a192f] hover:border-[#edff00]'>View Work
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 '/> 
                    </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home