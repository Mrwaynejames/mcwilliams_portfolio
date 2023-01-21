import React from 'react';
import resume from "../assets/Jack_McWilliams_Tech.pdf";



const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full gap-8'>
          <div className=' pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#edff00]'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid  gap-8 px-4'>
            <div>
              <p>  I am a recent graduate from UC Berkeley Full Stack Certification Program. I also obtained
              my B.A in Business from the Univeristy of Oregon in 2019. 
              For the last year I have been an E-commerce manager. 
              I know my education and experience will make a valuable member
               to your team..</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations.</p>  
            </div>
            <a href={resume}>
              <button className='text-white border-2 hover:bg-[#edff00] hover:border-[#edff00] hover:text-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center'>Resume</button>
              </a>
          </div>
      </div>
    </div>
  );
};

export default About;