import Image from 'next/image';
import React from 'react';
import loadingImg from 'public/loader.gif';

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image src={loadingImg} width={200} height={200} />
    </div>
  );
};

export default Loading;
