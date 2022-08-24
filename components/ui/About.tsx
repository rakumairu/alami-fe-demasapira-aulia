import React from 'react'


const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 text-zinc-900 mb-5 md:mb-10'>
            <div className="bg-gray-100 py-6 px-8 flex flex-col">
                <h2 className='text-lg md:text-xl font-semibold mb-3 text-center'>
                    About 1
                </h2>
                <div className="h-full flex items-center flex-shrink-1">
                    <p className='text-sm md:text-base'>
                        Lorem ipsum dolor sit amet, consectetur adiplycinstlita tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                </div>
            </div>
            <div className="col-span-2 bg-gray-300 py-6 px-8">
                <h2 className='text-lg md:text-xl font-semibold mb-3 text-center'>
                    About 2
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5 md:gap-10">
                    <p className='text-sm md:text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                    <p className='text-sm md:text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                    <p className='text-sm md:text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                    <p className='text-sm md:text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
