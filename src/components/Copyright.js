import React from 'react';
// import motion
import { motion } from 'framer-motion';

const Copyright = () => {
  return (
    <div className='bg-dark py-6 border-t border-[#2B2B2B] text-[#DBDBDB]'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: false, amount: 0 }}
          className='tracking-[0.02em] text-base'
        >
         
          <span className='font-semibold text-white'>Giovanni Arizola </span>
          Project 2 N320
        </motion.div>
      </div>
    </div>
  );
};

export default Copyright;
