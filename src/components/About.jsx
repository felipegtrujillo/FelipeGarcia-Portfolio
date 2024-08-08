

import PropTypes from 'prop-types'; // Importa PropTypes

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion.js';
import { SectionWrapper } from '../hoc';

const PhotoCard = ({ index, title, icon }) => {
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
          <img src={icon} alt={title} className="object-cover rounded-[20px] align-middle " />
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
          Analytical, creative, decisive and goal-oriented person. Graduated in 2013 from the telecommunications computer engineering degree taught by Diego Portales University. With 8 years of experience as a consultant and SAP ABAP developer, both in incident management, projects and improvements.
          Certified in 2024 in full-stack application development with JavaScript, taught by Desafio Latam and Digital Talent.
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
