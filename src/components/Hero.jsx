

import { motion } from 'framer-motion';

import { Tilt } from 'react-tilt';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      <div className={ ` ${styles.paddingX} absolute inset-0 top-[7.5rem]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}> 
         <div className="flex flex-col justify-center items-center mt-5">

           <div className=" w-5 h-5 rounded-full bg-[#1d6d2d]"/>
           <div className="w-1 sm:h-80 h-40 green-gradient" />
         </div>
         <div>
    <motion.h1
      className={`${styles.heroHeadText} text-[#d36333]`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      Full-stack<span className="text-[#35693f]"> Developer</span>
    </motion.h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A passionate software developer and creative engineer with a strong interest in Full-stack Development.
              8 years as a SAP/ABAP consultant. In these days with a mayor interest in open techonogys and sustainable development. 
            </p>
         </div>
         
      </div>

      <ComputersCanvas />

      <div className ="absolute xs:bottom-10 bottom-32
        w-full flex justify-center items-center">
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4
             border-secondary flex justify-center items-start p-2'>
         <motion.div
            animate={{y:[0, 24,0]}}
            transition={{
            duration:1.5, 
            repeat:Infinity,
            repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
         />
            </div>
          </a>
      </div>

    </section>
  )
}

export default Hero