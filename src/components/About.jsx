

import PropTypes from 'prop-types'; // Importa PropTypes

import React, { useState, useEffect } from 'react';

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion.js';
import { SectionWrapper } from '../hoc';

const PhotoCard = ({ index, title, icon }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Definir el umbral de pantalla móvil (768px es común)
    };

    window.addEventListener('resize', handleResize);
    
    // Ejecutar al cargar la página
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)} 
        className="w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-primary rounded-[20px] py-2 px-2 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className={`object-cover align-middle ${isMobile ? 'rounded-[40px] w-64 h-76' : 'rounded-[20px]'}`} />
        </div>
      </motion.div> 
    </Tilt>
  );
};

// Define las propTypes para el componente PhotoCard
PhotoCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText }>Hello, I'm <span className="text-[#35693f]" > Felipe Garcia</span></h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} 
          className="mt-4 text-secondary text-[30px] max-w-3xl leading-[30px]"
        >
          Analytical, creative, decisive and goal-oriented profesional. Graduated in 2013 from the telecommunications computer engineering degree by Diego Portales University. With 8 years of experience as SAP/ABAP developer in incident management, projects and improvements.
          Certified in 2024 in full-stack application development with JavaScript by Desafio Latam and Talento Digital.
          In search of projects and challenges in which to contribute with the knowledge and skills acquired.
        </motion.p>

        <div className="flex flex-wrap gap-10">
          {services.map((service, index) => (
            <PhotoCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
