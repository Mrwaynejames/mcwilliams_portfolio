import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-xol justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#edff00]'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div>
                    <p>Hi, My I'm Jack, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p> I am paasionate about a building excellent software that improves 
                        the lives of those around me. I specialize in frontend development, 
                        creating for indivoduals to large corporations.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About