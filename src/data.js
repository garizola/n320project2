// import images
import Logo from '../src/img/header/moby-doc-full-bg-copy-500x500.jpeg';
import GalleryImg1 from '../src/img/gallery/gal1.jpeg';
import GalleryImg2 from '../src/img/gallery/gal2.webp';
import GalleryImg3 from '../src/img/gallery/gal3.webp';
import GalleryImg4 from '../src/img/gallery/gal4.jpg';

import { IoMdArrowForward } from 'react-icons/io';


export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '#about', name: 'About' },
    { href: '#gallery', name: 'Gallery' },
    { href: '#stories', name: 'Stories' },
    { href: '#achievements', name: 'Achievements' },
  ],
};



export const heroData = {
  title: 'history of moby',
  subtitle:
    'a true musician',
  btnText: '"Porcelain" Music Video',
  btnIcon: <IoMdArrowForward />,
  music: "https://www.youtube.com/watch?v=IJWlBfo5Oj0",
};

export const aboutData = {
  title: "Moby's Story:",
  p1:
    'Richard Melville Hall, known professionally as Moby, is an American musician, songwriter, singer, producer, and animal rights activist. He has sold 20 million records worldwide.',
  p2:
    "Moby found commercial and critical success with his fifth album Play (1999) which, after receiving little recognition, became an unexpected global hit in 2000 after each track was licensed to films, television shows, and commercials. It remains his highest selling album with 12 million copies sold",
  btnText: 'more',
  btnIcon: <IoMdArrowForward />,
  anchor: "https://en.wikipedia.org/wiki/Moby"
};

export const galleryData = {
  title: "Moby's Mugs:",
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 405,
      height: 540,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 495,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 425,
      height: 540,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 425,
      height: 540,
    },
    
    
  ],
};


export const storiesData = {
  title:
    'There are a lot of stories about Moby',
  btnText: "How Moby's Most Popular Album Was Created",
  btnIcon: <IoMdArrowForward />,
  anchor: "https://medium.com/12edit/moby-play-story-behind-the-album-739efeaedf44",
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
      { href: '/', name: 'Home' },
      { href: '#about', name: 'About' },
      { href: '#gallery', name: 'Gallery' },
      { href: '#stories', name: 'Stories' },
      { href: '#achievements', name: 'Achievements' },
    ],
  },
  

};

export const achievementsData = {
  title: "Moby's Legacy:",
  p1:
    "Moby has won 27 accredited music awards during his career and has been nominated for far more. These nominations include 6 Grammy's, an iHeartRadio nomination, 8 MTV awards, and 2 Teen Choice awards. ",
  p2:
    "Some of these awards came form video and film as well. Melville had a passion for all things art and continues to create high level art to this day. Below is a list of all nominations and awards.",
  btnText: 'more',
  btnIcon: <IoMdArrowForward />,
  anchor: "https://www.imdb.com/name/nm0005240/awards"
};
