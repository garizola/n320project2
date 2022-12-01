// import images
import Logo from '../src/img/header/moby-doc-full-bg-copy-500x500.jpeg';

import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '/', name: 'About' },
    { href: '/', name: 'Gallery' },
    { href: '/', name: 'Articles' },
    { href: '/', name: 'Contact' },
  ],
};



export const heroData = {
  title: 'history of moby',
  subtitle:
    'a true musician',
  btnText: 'idk yet',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "Moby's Story:",
  p1:
    'Richard Melville Hall, known professionally as Moby, is an American musician, songwriter, singer, producer, and animal rights activist. He has sold 20 million records worldwide.',
  p2:
    "Moby found commercial and critical success with his fifth album Play (1999) which, after receiving little recognition, became an unexpected global hit in 2000 after each track was licensed to films, television shows, and commercials. It remains his highest selling album with 12 million copies sold",
  btnText: 'more',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: '',
  btnText: '',
  btnIcon: <IoMdArrowForward />,
  images: [
    
  ],
};





export const footerData = {
  about: {
    title: 'History of Moby',
    subtitle:
      'a true musician',
    
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/', name: 'About Moby' },
      { href: '/', name: 'Gallery' },
      { href: '/', name: 'Articles' },
      { href: '/', name: 'Contact' },
    ],
  },
  
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};
