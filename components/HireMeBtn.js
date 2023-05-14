import React from 'react';
import { CircularText } from './Icon';
import Image from 'next/image';
import hireMe from 'public/dev.png';
import Link from 'next/link';
const HireMeBtn = () => {
  return (
    <div
      className="fixed md:absolute  left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:-top-[4.5rem] md:bottom-auto sm:right-0
sm:-top-[4.8rem] "
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText className="object-contain fill-dark animate-spin-slow dark:fill-light" />
        <Link
          className="absolute left-1/2 -top-.1 bg-dark text-light border border-dark w-20 h-20 leading-[5rem] dark:bg-light md:w-12 md:h-12 md:text-[10px] dark:text-dark rounded-full flex items-start justify-center font-semibold hover:bg-light md:leading-[3rem] hover:text-dark transition-colors duration-300 -translate-x-1/2"
          href="mailto:diegofreeman78@gmail.com"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMeBtn;
