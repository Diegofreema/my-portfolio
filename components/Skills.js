import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className="flex items-center cursor-pointer justify-center rounded-full font-semibold dark:bg-light dark:text-dark bg-dark text-light py-3 px-6 shadow-dark absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 text-center w-full lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mt-32">
        SKills
      </h2>
      <div className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:bg-circularDarkSm   ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center cursor-pointer dark:bg-light dark:text-dark  justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
        >
          Web
        </motion.div>
        <Skill name={'Nextjs'} x="-20vw" y="-15vw" />
        <Skill name={'CSS'} x="-5vw" y="-10vw" />

        <Skill name={'React Native'} x="-20vw" y="2vw" />
        <Skill name={'Tailwind CSS'} x="18vw" y="18vw" />
        <Skill name={'Javascript'} x="20vw" y="6vw" />
        <Skill name={'Typescript'} x="0vw" y="12vw" />
        <Skill name={'Firebase'} x="0vw" y="-20vw" />
        <Skill name={'Mongoose'} x="15vw" y="-12vw" />
        <Skill name={'Nodejs'} x="32vw" y="-5vw" />
        <Skill name={'Mantine'} x="-25vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
