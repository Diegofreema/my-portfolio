import React from 'react';

const Container = ({ children, className }) => {
  return (
    <div
      className={`${className} w-full h-full inline-block z-0 bg-light p-32 pt-0 dark:bg-dark  xl:p-24 lg:16 md:p-12 sm:p-8 `}
    >
      {children}
    </div>
  );
};

export default Container;
