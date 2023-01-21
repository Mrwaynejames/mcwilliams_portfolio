import React from 'react'
import tmb2 from '../assets/tmb2.png'
import invest from '../assets/invest.png'
import password from '../assets/password.png'
import schedule from '../assets/schedule.png'
import network from '../assets/network.png'

const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 pt-20 mt-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#edff00]'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

        {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* work card */}
                <div style={{backgroundImage:`url(${tmb2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Trademark Beauty
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://shoptrademarkbeauty.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duartion-500'>Website</button>
                                </a>
                                <a href="https://gist.github.com/Mrwaynejames/f1aacdf09efa310f04bd50f1b90e4f36">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duartion-500'>Github</button>
                                </a>

                            </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${invest})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Investor Rest
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://investorrest.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duartion-500'>Website</button>
                                </a>
                                <a href="https://github.com/shwethareddy0/investorrest">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duartion-500'>Github</button>
                                </a>

                            </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${password})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Password Generator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://mrwaynejames.github.io/password-generator/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duartion-500'>Website</button>
                                </a>
                                <a href="https://github.com/Mrwaynejames/password-generator">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duartion-500'>Github</button>
                                </a>

                            </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${schedule})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Work Schedule
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://mrwaynejames.github.io/schedule/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duartion-500'>Website</button>
                                </a>
                                <a href="https://github.com/Mrwaynejames/schedule">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duartion-500'>Github</button>
                                </a>

                            </div>
                    </div>
                </div><div style={{backgroundImage:`url(${network})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Backend Network
                            </span>
                            <div className='pt-8 text-center'>
                            <a href="https://drive.google.com/file/d/137N2O902JhPZf2Kl1DxTHB46jC613s5r/view">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duartion-500'>Video</button>
                                </a>
                                <a href="https://github.com/Mrwaynejames/Network_API">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duartion-500'>Github</button>
                                </a>

                            </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work