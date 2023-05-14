import AnimatedText from '@/components/AnimatedText';
import Container from '@/components/Container';
import HireMeBtn from '@/components/HireMeBtn';
import { LinkArrow } from '@/components/Icon';
import Transition from '@/components/Transition';
import Image from 'next/image';
import Link from 'next/link';
import imgAi from 'public/dv.png';
import lightBulb from 'public/miscellaneous.svg';
import resume from 'public/resume.pdf';
export default function Home() {
  return (
    <>
      <main className="flex items-center relative text-dark w-full min-h-screen dark:text-light">
        <Transition />
        <Container className={'pt-0 md:pt-16 sm:pt-8'}>
          <div className="flex items-center lg:flex-col dark:text-light justify-between w-full">
            <div className="w-1/2 md:w-full">
              <Image
                src={imgAi}
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                alt="ai image"
                priority
                size="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-5xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects, showcasing my expertise in app and web development.
              </p>
              <div className="flex items-center self-start mt-2 space-x-3 lg:self-center">
                <Link
                  href={resume}
                  target={'_blank'}
                  download={true}
                  className="bg-dark text-light text-center p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-black transition-all flex dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light  duration-300 border border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className={'!w-6 ml-1'} />
                </Link>
                <Link
                  className="ml-4 text-lg dark:text-light font-medium capitalize text-dark underline md:text-base"
                  href="mailto:diegofreeman78@gmail.com"
                  target={'_blank'}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <HireMeBtn />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={lightBulb}
            className="w-full h-full lg:hidden"
            alt="bulb"
          />
        </div>
      </main>
    </>
  );
}
