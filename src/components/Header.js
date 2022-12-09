import React, { useState, useEffect } from 'react';
// import header data
import { headerData } from '../data';
// import components
import Nav from './Nav';
import NavMobile from './NavMobile';
import { motion } from 'framer-motion';

// import icons
import { TiThMenuOutline } from 'react-icons/ti';

const Header = () => {
  // destructure header data
  const { logo } = headerData;
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  // scroll event listener and if the window is scrolled over 50 px then set active to true invoking the 
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
    // collapses once past 50px using the use effect above
      className={`
      ${
        isActive ? 'h-[100px] lg:h-[110px] shadow-xl bg-opacity-40' 
                : 'h-[100px] lg:h-[134px]'
      }
        
          bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`
        }
        //the is active class is dependent on the state is active and the rest of the header nav is above
        // determines the size of the header nav and the opacity and a little animation once the opacity changes
    >
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
        {/* logo */}
        <motion.div drag >
        <a href='/'>
          <img className='w-[90px] h-[90px]' src={logo} alt='' />
        </a>
        </motion.div>
        
        {/* nav - initially is hidden - show on desktop*/}
        <div className='hidden xl:flex'>
          <Nav />
        </div>
        {/* nav menu btn - is showing by default - hidden on desktop mode */}
        {/* every time the nave mobile icon is hit it sets the state to the opposite (boolean) */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          //xl is determined in the tailwind.config.js as a variable. The navmobile menu icon "below" is hidden until it gets pas that xl threshold
          className='xl:hidden absolute right-[5%] bg-dark p-2 rounded-md cursor-pointer'
        >
          <TiThMenuOutline className='text-3xl text-white' />
        </div>
        {/* nav mobile - is showing by default - hidden on desktop mode */}
        <div
        //if the state navMobile is true take up the whole screen if not its hidden
          className={`${navMobile ? 'max-h-full' : 'max-h-0 overflow-hidden'} ${
            isActive
              ? 'top-[100px] lg:top-[110px]'
              : 'top-[100px] lg:top-[134px]'
          } fixed left-0 -z-10 w-full h-full bg-white transition-all duration-300`}
          //above is just the styling for the nav menu. if active its just letting the whole header to how big to max the nav menu that takes up the whole screen and a little animation once the opacity changes
        >
          <NavMobile />
        </div>
        
      </div>
    </header>
  );
};

export default Header;
