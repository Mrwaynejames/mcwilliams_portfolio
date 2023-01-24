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
              <p>  I am a recent graduate from UC Berkeley Full Stack Certification Program.
                 I'm eager and passionate to learn and further develop my skills.
                I also have a B.A in Business Administration, combining my educations means that I not only 
                understand business concepts but value them and hace the technical skills to implement them.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I am currently an E-commerce manager where I 
              customize code to imporve the UI/UX journey. As a former college athlete I will take
              that same work ethic and drive to take on an challenge I come across. I look forward for the 
              opportunity to learn new technologies effiiciently and thuroughly so that I can best benefit the company. </p>  
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