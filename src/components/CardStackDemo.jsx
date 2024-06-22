import React from 'react';
import { CardStack } from '../CardStack';
import { cn } from '../utils/cn'; 

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold text-emerald-700 bg-transparent px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        I recommend all technologies used here, <Highlight>Perfonally I use them all the time</Highlight> in my projects. Don't doubt to contract the services provided here... 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Mr Chunk",
    designation: "Senior Ethical Hacker",
    content: (
      <p>
        I don't contract external services to implement an ecommerce, <Highlight>I prefer to build an independant one as Nala offer</Highlight> because will have freedom to use what you want.<Highlight>My company stand out for companies like this one</Highlight> so don't hesitate and do it with them.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of <Highlight>Creativity</Highlight> is that you feel the fresh to star your oun stuff<Highlight>With free frmeworks</Highlight> your potential will be boosted, go Ahed with Nala.
      </p>
    ),
  },
];
