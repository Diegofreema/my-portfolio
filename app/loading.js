import Image from 'next/image';
import React from 'react';
import loadingImg from 'public/loading.gif';

const Loading = () => {
  return (
    <div className="w-full h-screen">
      <Image
        src={loadingImg}
        className="w-full absolute top-0 bottom-0 left-0 right-0 h-screen"
      />
    </div>
  );
};

export default Loading;
