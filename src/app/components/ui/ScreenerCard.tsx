import React from 'react';
import Image from 'next/image';

const Card = ({ iconSrc, title, description }:any) => {
  return (
    <div className="bg-white p-6 rounded-xl ">
      <div className="mb-4">
        <Image src={iconSrc} alt={title} width={40} height={40} />
      </div>
      <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default Card;
