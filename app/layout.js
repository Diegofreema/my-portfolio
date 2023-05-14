import NavBar from '@/components/NavBar';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';
import Script from 'next/script';
import Transition from '@/components/Transition';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export async function generateMetadata({ params }) {
  return {
    title: params.pathname,
    description: 'Portfolio for Diego Freeman',
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} font-mont`}>
      <body className="bg-light w-full min-h-screen dark:bg-dark ">
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
        </Script>
        <main className="dark:bg-dark relative">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
