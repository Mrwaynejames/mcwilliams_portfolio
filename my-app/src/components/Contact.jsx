import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/40dc8da0-6c17-48a4-8134-0a7440f9e712" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
               <p className='text-4xl fobt-bold inline border-b-4 border-[#edff00] text-gray-300'>Contact</p> 
               <p className='text-gray-300 py-4'>Submit the form below or reach me at <a href="mailto:mcwilliamsjack96@gmail.com" className="hover:text-[#edff00]">mcwilliamsjack96@gmail.com</a></p>
            </div>
            <input className="bg-[#ccd6f6] p-2" type="text" placeholder='Name' name='name' />
            <input className="my-4 p-2 bg-[#ccd6f6]"type="text" placeholder='Email' name='email' />
            <textarea className="bg-[#ccd6f6] p-2" name="message" placeholder='Message' rows="10"></textarea>
            <button className='text-white border-2 hover:bg-[#edff00] hover:border-[#edff00] hover:text-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center'>Let's Chat</button>
        </form>
    </div>
  )
}

export default Contact