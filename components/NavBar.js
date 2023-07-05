'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from './Icon';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const MotionLink = motion(Link);

const CustomLink = ({ href, title, className }) => {
  const pathName = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={` ${
          pathName === href ? 'w-full' : 'w-0'
        }   h-1 inline-block  group-hover:w-full dark:bg-light duration-300 ease transition-[width] bg-dark absolute left-0 -bottom-1.5`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const router = useRouter();
  const [mode, setMode] = useThemeSwitcher();
  console.log(mode);
  useEffect(() => {
    localStorage.setItem('theme', 'light');
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const mobileLinkHandler = (link) => {
    router.push(link);
    setIsOpen((prev) => !prev);
  };

  const CustomMobileLink = ({ link, title, className }) => {
    const pathName = usePathname();
    return (
      <button
        onClick={mobileLinkHandler.bind(this, link)}
        className={`${className} relative group text-light dark:text-dark my-3`}
      >
        {title}
        <span
          className={` ${
            pathName === link ? 'w-full' : 'w-0'
          }   h-1 inline-block  group-hover:w-full dark:bg-dark  bg-light duration-300 ease transition-[width]  absolute left-0 -bottom-1.5`}
        >
          &nbsp;
        </span>
      </button>
    );
  };

  return (
    <header className="w-full relative lg:px-16 md:px-12 sm:px-8 z-10  px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <button
        className=" flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={` ${
            isOpen ? 'rotate-45 translate-y-1 ' : '-translate-y-0.5'
          } bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out `}
        ></span>
        <span
          className={` ${
            isOpen ? 'opacity-0' : 'opacity-100'
          } bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out `}
        ></span>
        <span
          className={` ${
            isOpen ? '-rotate-45 -translate-y-1 ' : 'translate-y-0.5'
          } bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out `}
        ></span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="min-w-[70vw] hidden lg:flex flex-col fixed justify-between z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink link="/" title={'Home'} />
            <CustomMobileLink link="/About" title={'About'} />

            <CustomMobileLink link="/Project" title={'Projects'} />
          </nav>

          <nav className="flex space-x-3">
            <MotionLink
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              className="w-6 "
              href="https://twitter.com/Diegofreeman78"
              target={'_blank'}
            >
              <TwitterIcon />
            </MotionLink>
            <MotionLink
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              className="w-6 "
              href="https://www.linkedin.com/in/diego-eke-557721280"
              target={'_blank'}
            >
              <LinkedInIcon />
            </MotionLink>
            <MotionLink
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              className="w-6 dark:bg-dark bg-light h-fit rounded-full "
              href="https://github.com/Diegofreema"
              target={'_blank'}
            >
              <GithubIcon className={'dark:fill-dark fill-light'} />
            </MotionLink>

            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`${
                mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
              } ml-3 flex items-center justify-center rounded-full p-1 -translate-y-1 `}
            >
              {mode === 'dark' ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href={'/'} title={'Home'} className={'mr-4'} />
          <CustomLink href={'/About'} title={'About'} className={'mx-4'} />

          <CustomLink href={'/Project'} title={'Projects'} className={'ml-4'} />
        </nav>

        <nav className="flex space-x-3">
          <MotionLink
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            className="w-6 "
            href="https://twitter.com/Diegofreeman78"
            target={'_blank'}
          >
            <TwitterIcon />
          </MotionLink>
          <MotionLink
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            className="w-6 "
            href="https://www.linkedin.com/in/diego-eke-557721280"
            target={'_blank'}
          >
            <LinkedInIcon />
          </MotionLink>
          <MotionLink
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            className="w-6 "
            href="https://github.com/Diegofreema"
            target={'_blank'}
          >
            <GithubIcon />
          </MotionLink>

          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`${
              mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
            } ml-3 flex items-center justify-center rounded-full p-1 -translate-y-1 `}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
