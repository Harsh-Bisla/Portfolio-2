import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Footer() {
    const [ref, inView] = useInView();

    return (
        <section className="footer">
            <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y:-50 }}
            transition={{ duration: 0.5 }}
            >Contact <span>Me</span></motion.h2>
            <p>I am Harsh Bisla this is my personal website.</p>
            <motion.div
             ref={ref}
             initial={{ opacity: 0, y: 50 }}
             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y:50 }}
             transition={{ duration: 0.5 }}
            className='footer-icons'>
                <a href="https://www.linkedin.com/in/harshbisla78" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/Harsh-Bisla" target="_blank"> <i className="fa-brands fa-github"></i></a>
                <i className="fa-brands fa-instagram"></i>
            </motion.div>

            <div className='copyright'>
                <p>&#169;<span>2024</span> All right reserved. Made by Harsh Bisla.</p>
            </div>
        </section>
    )
}

export default Footer