import React from 'react';
// import footer data
import { footerData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  // destructure footer data
  const { about, links } = footerData;
  return (
    <footer className='bg-dark py-[20px] lg:py-[80px]'>
      <div className='container mx-auto'>
        {/* grid */}
        <motion.div
          variants={staggerContainer}
          initial={'hidden'}
          whileInView={'show'}
          className='flex flex-col lg:flex-row lg:justify-between text-white gap-x-2 gap-y-14'
        >
          {/* about */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col gap-y-6'
          >
            {/* title */}
            <div className='font-primary text-xl uppercase tracking-[0.08em]'>
              {about.title}
            </div>
            {/* subtitle */}
            <div className='leading-relaxed text-[#DBDBDB]'>
              {about.subtitle}
            </div>
           
          </motion.div>
          {/* links */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col xl:items-center'
          >
            <div>
              <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
                {links.title}
              </div>
              <ul className='flex flex-col gap-y-4 text-[#DBDBDB]'>
                {links.items.map((item, index) => {
                  // destructure item
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a className='hover:text-white transition' href={href}>
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
         
          {/* <motion.div variants={fadeIn('up')} className='flex-1'>
            <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
              {newsletter.title}
            </div>
            <div className='leading-relaxed mb-9 text-[#DBDBDB]'>
              {newsletter.subtitle}
            </div>
            <form className='flex  justify-between items-start border-b border-[#B6B6B6]'>
              <input
                className='outline-none placeholder:text-base italic placeholder:capitalize  bg-transparent pb-2'
                type='text'
                placeholder={newsletter.form.placeholder}
              />
              <button type='submit' className='text-2xl cursor-pointer'>
                {newsletter.form.icon}
              </button>
            </form>
          </motion.div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
