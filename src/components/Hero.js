import React from 'react';
// import data
import { heroData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';
// import audio from './porc.mp3'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  // destructure hero data
  const { title, btnText, btnIcon, music } = heroData;
  
 

  

  return (
    <section className='bg-hero  bg-cover mx-auto min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px] max-w-[2000px] bg-center'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'show'}
        className='container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center '
      >
        {/* text & btn */}
        <div className='text-white text-center lg:text-right lg:max-w-[940px]  '>
          <motion.h1 variants={fadeIn('down')} className='h1'>
            {title}
          </motion.h1>
          
          {/* btn */}
          <motion.div variants={fadeIn('down')}>
            <a href={music} target="_blank" rel="noreferrer">
              <button className='btn btn-sm lg:btn-sm mx-auto lg:mx-0 text-white bg-black bg-opacity-80 hover:bg-opacity-100 mt-[30px]'>
                {btnText}
                <div className='text-xl'>{btnIcon}</div>
              </button>

            </a>
           
          </motion.div>
        </div>
        {/* outline text */}
        
      </motion.div>
    </section>
  );
};

export default Hero;
