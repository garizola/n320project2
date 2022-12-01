// import images
import Logo from '../src/img/header/moby-doc-full-bg-copy-500x500.jpeg';

import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons

import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


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
  btnText: 'read more',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "Moby's Story:",
  p1:
    'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
  p2:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
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
