import React from 'react'
import javascript from "../assets/javascript.png"
import css from "../assets/css.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import mongo from "../assets/mongo.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import mysql from "../assets/mysql.png"
import json from "../assets/json.png"
import fetch from "../assets/fetch.png"
import boot from "../assets/Fetch API.png"


const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#edff00] '>Skills</p>
                <p className='py-4'>Some of the Technologies I have experience in</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 mb-6'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={html} alt="html" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={css} alt="html" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={javascript} alt="html" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={react} alt="html" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={github} alt="html" />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={mongo} alt="html" />
                    <p className='my-4'>Mongo DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={node} alt="html" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={tailwind} alt="html" />
                    <p className='my-4'>Tailwind</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={mysql} alt="html" />
                    <p className='my-4'>MySQL</p>
                </div>      
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={fetch} alt="html" />
                    
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={json} alt="html" />
                   
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duartion-500'>
                    <img className='w-20 mx-auto'src={boot} alt="html" />
                    <p className='my-4'>Bootstrap</p>
                </div>   
                <div></div>        
            </div>
        </div>
    </div>
  )
}

export default Skills