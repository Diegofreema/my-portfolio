'use client';

import AnimatedText from '@/components/AnimatedText';
import Container from '@/components/Container';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import myImg from 'public/myImg.png';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Transition from '@/components/Transition';

const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, []);

  return <span ref={ref}>{}</span>;
};
const About = () => {
  return (
    <main className="flex w-full flex-col dark:text-light items-center justify-center">
      <Transition />
      <Container className={'pt-16'}>
        <AnimatedText
          text={'Passion Fuels Purpose! '}
          className="mb-16 text-7xl lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 xl:col-span-4 flex md:col-span-8 md:items-center flex-col items-start md:order-2 justify-center">
            <h2 className="mb-4 font-bold dark:text-light text-lg uppercase text-dark/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I'm CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients'
              visions to life.
            </p>
            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.{' '}
            </p>
            <p className="font-medium mt-4">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="col-span-3 xl:col-span-4 md:col-span-8 relative h-max rounded-2xl md:order-1 border-2 border-solid border-dark bg-light p-8">
            <div className="absolute bg-dark top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]" />
            <Image
              src={myImg}
              alt="Diego freeman"
              className="w-[full] h-auto rounded-2xl"
              priority
              size="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3 flex flex-col items-end justify-between">
            <div className=" flex flex-col md:items-center  items-end justify-center">
              <span className="inline-block text-6xl md:text-5xl sm:text-4xl xs:text-3xl  font-bold">
                <AnimateNumbers value={20} />+
              </span>
              <h2 className="text-xl dark:text-light/75 capitalize font-medium text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-xs">
                satisfied clients
              </h2>
            </div>
            <div className=" flex flex-col items-end md:items-center  justify-center">
              <span className="inline-block text-6xl font-bold  md:text-5xl sm:text-4xl xs:text-3xl">
                <AnimateNumbers value={20} />+
              </span>
              <h2 className="text-xl dark:text-light/75 capitalize font-medium text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-xs">
                projects completed
              </h2>
            </div>
            <div className=" flex flex-col items-end md:items-center justify-center">
              <span className="inline-block text-6xl font-bold  md:text-5xl sm:text-4xl xs:text-3xl">
                <AnimateNumbers value={2} />+
              </span>
              <h2 className="text-xl capitalize font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-xs">
                years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
      </Container>
    </main>
  );
};

export default About;
