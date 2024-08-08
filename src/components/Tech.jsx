


import ProgressBar from "@ramonak/react-progress-bar";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { BallCanvas } from "./canvas";

import { textVariant } from '../utils/motion.js';

import { motion } from 'framer-motion'

import { styles } from '../styles';

const Tech = () => {
  return (
    <> 
    <motion.div variants={textVariant()} className="mb-9">
    <p className={styles.sectionSubText} >
       Technologys and languajes so far </p>
     <h2 className={styles.sectionHeadText} >
       Technicals Skills. </h2>
    </motion.div>
    
    
    <div className="flex flex-row flex-wrap justify-center gap-10">
  {technologies.map((technology) => (
    <div className="flex flex-row items-center w-full max-w-md" key={technology.name}>
      <div className="flex-shrink-0">
        <BallCanvas icon={technology.icon} width={100} height={100} />
      </div>

      {/* ProgressBar component */}
      <div className="ml-4 flex-grow">
        <ProgressBar completed={technology.progress} bgColor={technology.color} />
      </div>
    </div>
  ))}
</div>
    </>
  );
};

export default SectionWrapper(Tech, "");


