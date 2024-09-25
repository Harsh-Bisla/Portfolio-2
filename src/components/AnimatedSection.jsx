// AnimatedSection.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const AnimatedSection = ({ children, triggerHeight = 100 }) => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > triggerHeight) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
