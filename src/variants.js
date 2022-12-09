export const fadeIn = (direction) => {
  return {
    hidden: {
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 6,
        duration: 1.4,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };
};
