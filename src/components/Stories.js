import React from 'react';
// import data
import { storiesData } from '../data';


// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';


const Stories = () => {
   // destructure articles data
   const { title, btnText, btnIcon, anchor } = storiesData;
  
  return (
    <motion.section
    id='stories'
    variants={fadeIn('up')}
    initial='hidden'
    whileInView={'show'}
  
    className='py-[20px] lg:py-[80px] bg-skills bg-no-repeat bg-cover bg-center lg:h-[812px] mt-[80px]'
  >
    <div className='container mx-auto h-full'>
      <div className='flex flex-col justify-center h-full'>
        <div className='flex flex-col items-start max-w-[880px]'>
          <motion.h3
            variants={fadeIn('down')}
            className='text-infared text-[60px] lg:text-[110px] leading-tight font-primary capitalize font-extrabold mb-8'
          >
            {title}
          </motion.h3>
          {/* btn */}
          <motion.div variants={fadeIn('down')}>
            <a href={anchor} target="_blank" rel="noreferrer">
                <div className='text-white flex items-center gap-x-5 cursor-pointer hover:opacity-80 transition'>
                {/* border */}
                <div className='w-[70px] h-[70px] lg:w-[91px] lg:h-[91px]  text-dark p-[5px] lg:p-[8px]'>
                  {/* inner */}
                  <div className='bg-white w-full h-full  flex justify-center items-center'>
                    <div className='pl-1'>{btnIcon}</div>
                  </div>
                </div>
                {/* btn text */}
                <div className='font-primary uppercase tracking-[0.1em]'>
                  {btnText}
                </div>
              </div>
            </a>
          </motion.div>
        
        
        </div>
      </div>
    </div>
  </motion.section>
  )
}

export default Stories