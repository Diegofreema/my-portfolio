'use client';
import AnimatedText from '@/components/AnimatedText';
import Container from '@/components/Container';
import { GithubIcon } from '@/components/Icon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import medium from 'public/medium.png';
import vote from 'public/vote.png';
import blog from 'public/blog.png';
import photo from 'public/photo.png';
import restaurant from 'public/restaurant.png';
import website from 'public/website.png';
import { motion } from 'framer-motion';
import Transition from '@/components/Transition';

const FramerImage = motion(Image);
const Featured = ({ type, title, summary, link, github, img }) => {
  return (
    <article
      className="w-full lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs-p-4 flex items-center justify-between rounded-3xl border border-solid dark:border-light
dark:bg-dark  border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl gap-y-32"
    >
      <div className="absolute xs:-right-2 sm:h-[102%] xs-w-full xs:rounded-[1.5rem] bg-dark dark:bg-light top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl" />

      <Link
        href={link && link}
        target="_blank"
        className="w-1/2 lg:w-full h-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt="title"
          className="w-full h-full"
          priority
          size="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 md:-mt-20 lg:-mt-16 sm:-mt-32">
        <span className="text-primary dark:text-primaryDark font-medium xs:text-base text-xl">
          {type}
        </span>
        <Link
          href={link && link}
          target="_blank"
          className="hover:underline hover:dark:text-light underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl dark:text-light sm:text-sm   font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium dark:text-light text-dark sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon className={'dark:fill-light'} />{' '}
          </Link>
          <Link
            href={link && link}
            className="ml-4 sm:px-4 sm:text-base  rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold"
            target="_blank"
          >
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ title, type, img, link, github }) => {
  return (
    <article className="w-ful flex items-center justify-center rounded-2xl dark:border-light dark:bg-dark border border-solid border-light bg-light p-6 relative flex-col xs:p-4">
      <div className="absolute bg-dark dark:bg-light top-0 md:-right-2 md:w-[100%] xs:h-[102%] xs:rounded-[1.5rem] -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]" />

      <Link
        href={link && link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt="title"
          className="w-full h-auto"
          priority
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary lg:text-lg md:text-base dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link && link}
          target="_blank"
          className="hover:underline hover:dark:text-light underline-offset-2"
        >
          <h2 className="my-2 w-full lg:text-2xl dark:text-light text-left text-3xl font-bold">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center md:text-base justify-between w-full">
          <Link
            href={link && link}
            className=" underline dark:text-light   text-lg font-semibold"
            target="_blank"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon className={'dark:fill-light'} />{' '}
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Transition />
      <Container className={'pt-16'}>
        <AnimatedText
          text="Imagination Trumps Knowledge!"
          className="mb-16  lg:!text-6xl sm:!text-5xl xs:!text-4xl"
        />
        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
            {' '}
            <Featured
              title="Medium Clone"
              link="https://medium-clone-ebon-rho.vercel.app/"
              github={'https://github.com/Diegofreema/medium-clone'}
              summary={
                'This is a clone of medium , where i replicated the core functionalities of medium using Nextjs for the front and sanity for the backend.'
              }
              img={medium}
              type={'Blog'}
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Projects
              title="E-Vote"
              link="https://e-vote-app.vercel.app/"
              github={'https://github.com/Diegofreema/vote-app-frontend'}
              img={vote}
              type={'Poll'}
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Projects
              title="Graph-Blog"
              link="https://blog-beige-phi.vercel.app/"
              github={'https://github.com/Diegofreema/blog'}
              img={blog}
              type={'Blog'}
            />
          </div>
          <div className="col-span-12">
            {' '}
            <Featured
              title="FOTOGRAFI"
              link="https://diegofreema.github.io/photography/"
              github={'https://github.com/Diegofreema/photography'}
              summary={
                'This is a Portfolio website , which advertises the gallery of a photographer who sees the world in a unique way through her lenses.'
              }
              img={photo}
              type={'Portfolio'}
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Projects
              title="GERICHT"
              link="https://diegofreeman.netlify.app/"
              github={'https://diegofreeman.netlify.app/'}
              img={restaurant}
              type={'Advertisement'}
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Projects
              title="Portfolio"
              link="https://mywebsite-ka3wbmclz-diegofreema.vercel.app/"
              github={'https://github.com/Diegofreema/mywebsite'}
              img={website}
              type={'Portfolio'}
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Project;
