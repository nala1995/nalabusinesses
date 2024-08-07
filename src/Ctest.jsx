import React from 'react';
import { MouseEnterProvider } from './components/3d-card';
import { CardContainer, CardBody, CardItem } from './components/3d-card';

export function ThreeDCardDemo({ title, description, imageUrl, price, buttonText, link, currency, onClick, id }) {
  return (
    <MouseEnterProvider>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.5] bg-transparent dark:border-white/[0.1]   w-auto sm:w-[30rem] h-auto rounded-xl p-6 border backdrop-blur-3xl">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 text-black-950">
            {title}
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-900">
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={imageUrl}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem translateZ={20} as="a" href={link} target="_blank" className="px-4 py-2 rounded-xl text-xs font-normal text-sky-300">
              {currency}
              {price}
            </CardItem>
            <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-xs font-bold text-neutral-900" onClick={onClick}>
              {buttonText}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </MouseEnterProvider>
  );
}