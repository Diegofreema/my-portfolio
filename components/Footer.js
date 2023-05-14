import React from 'react';
import Container from './Container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-lg">
      <Container
        className={
          '!py-8 flex items-center justify-between lg:flex-col lg-py-6'
        }
      >
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="text-center lg-py-2">
          Build With{' '}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>{' '}
          <Link
            href="mailto:diegofreeman78@gmail.com"
            target={'_blank'}
            className="underline underline-offset-2"
          >
            Diego Freeman
          </Link>
        </div>
        <Link href="mailto:diegofreeman78@gmail.com" target={'_blank'}>
          Says hello
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
