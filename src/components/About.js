import React from 'react';
// import about data
import { aboutData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

const About = () => {
  // destructure about data
  const { title, p1, p2, btnText, btnIcon, anchor } = aboutData;
  return (
    <section id="about" className='lg:py-16 xl:pb-[160px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
          {/* numbers */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            // viewport={{ once: false, amount: 0.7 }}
            className='flex flex-col lg:flex-row flex-1'
          >
            <div className='  bg-about bg-no-repeat bg-contain bg-center h-[700px] w-[700px]'>
              
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            // viewport={{ once: false, amount: 0.6 }}
            className='flex-1 h-full xl:mt-48'
          >
            <h2 className='h2'>{title}</h2>
            <div className='flex flex-col items-end'>
              <div className='max-w-[530px] text-grey'>
                <p className='mb-6'>{p1}</p>
                <p className='mb-9'>{p2}</p>
                <a href={anchor} target="_blank" rel="noreferrer">
                  <button className='btn btn-lg btn-link'>
                    {btnText}
                    <div className='text-xl'>{btnIcon}</div>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
