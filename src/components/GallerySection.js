import React from 'react';
// import data
import { galleryData } from '../data';
// import photo album & lightbox
import PhotoAlbum from 'react-photo-album';

// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';


const GallerySection = () => {
 
  // destructure gallery data
  const { title, btnText, btnIcon, images } = galleryData;
  return (
    <section id="gallery" className='bg-white py-[20px] lg:py-[80px] relative mt-[40px] lg:mt-0'>
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          // incountered a weird thing where the animation would spaz when at the top/bottom of viewport
          // the below helped with that 
          viewport={{ once: false, amount: 0.8 }}
          className='h2 max-w-[570px] lg:mb-20'
        >
          {title}
        </motion.h2>
      </div>
      {/* photo album */}
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='mb-8 lg:mb-20 ml-10 mr-10'
      >
        {/* this is the best react package ever it automatically makes your imgs responsive after setting a pixel ratio (in data) */}
        <PhotoAlbum
          layout='rows'
          photos={images}
        />
        
      </motion.div>
      {/* btn */}
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='flex justify-center'
      >


          <a href="https://www.google.com/search?q=moby&rlz=1C5MACD_enUS1017US1020&sxsrf=ALiCzsYakF5EZ76TnDJngQI7GTZvYdKmkQ:1670451354345&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi1hdycxOj7AhU-lGoFHZluB0kQ_AUoAXoECAEQAw&biw=1710&bih=826&dpr=2" target="_blank" rel="noreferrer">
            <button className='btn btn-lg btn-dark' >
              {btnText}
            <div className='text-xl'>
              {btnIcon}
            </div>
          </button>

          </a>
        
      </motion.div>
    </section>
  );
};

export default GallerySection;