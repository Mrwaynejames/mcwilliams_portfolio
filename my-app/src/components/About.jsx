import React from 'react';
import resume from "../assets/Jack_McWilliams_Tech.pdf";



const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#edff00]'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Jack McWilliams, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations.</p>  
              <a href={resume}>
              <button className='text-white border-2 hover:bg-[#edff00] hover:border-[#edff00] hover:text-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center'>Resume</button>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;