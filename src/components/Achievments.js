import React from 'react';
// import about data
import { achievementsData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';
const Achievements = () => {
  // destructure about data
  const { title, p1, p2, btnText, btnIcon, anchor } = achievementsData;
  return (
    <section id="achievements" className='lg:py-16 xl:pb-[160px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
        
          
          {/* text */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            // viewport={{ once: false, amount: 0.6 }}
            className='flex-1 h-full xl:mt-48'
          >
            <h2 className='text-[40px] xl:text-[85px] text-dark uppercase font-primary max-w-[236px] leading-none mb-[38px]'>{title}</h2>
            <div className='flex flex-col items-end'>
              <div className='max-w-[530px] text-grey'>
                <p className='mb-6'>{p1}</p>
                <p className='mb-9'>{p2}</p>
                <a href={anchor} target="_blank" rel="noreferrer">
                  <button className='btn mh-[67px] px-0 h-auto text-dark hover:text-dark/90 transition-all'>
                    {btnText}
                    <div className='text-xl'>{btnIcon}</div>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            className='flex flex-col lg:flex-row flex-1'
          >
            <div className='  bg-achievements bg-no-repeat bg-contain bg-center h-[700px] w-[700px]'>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements