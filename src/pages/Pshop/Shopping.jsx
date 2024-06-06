import React from 'react'
/* import pictureone from '../../assets/imgs/isometricroom.jpg' */
import {CarouselPlugin} from '../../components/CarouselPlugin'
import {ThreeDCardDemo} from '../../Ctest'

const cardData = [
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "USD 500",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji"
  },
  {
    title: "Card 2",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "USD 600",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji"
  },
  {
    title: "Card 3",
    description: "Description for card 3",
    imageUrl: "https://example.com/image3.jpg",
    price: "USD 700",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji"
  },
  {
    title: "Card 4",
    description: "Description for card 3",
    imageUrl: "https://example.com/image3.jpg",
    price: "USD 700",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji"
  },
  {
    title: "Card 5",
    description: "Description for card 3",
    imageUrl: "https://example.com/image3.jpg",
    price: "USD 700",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji"
  },
  {
    title: "Card 6",
    description: "Description for card 3",
    imageUrl: "https://example.com/image3.jpg",
    price: "USD 700",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji"
  },
  {
    title: "Card 7",
    description: "Description for card 3",
    imageUrl: "https://example.com/image3.jpg",
    price: "USD 700",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji"
  },
  // Añade más objetos de tarjeta según sea necesario
];

const Shopping = ()=> {
  return (
    <React.Fragment>
      <article className='nextra-body relative pb-8 w-full max-w-full flex min-w-0 pr-[calc(env(safe-area-inset-right)-1.5rem)] nextra-body-typesetting-default'>
           <main className='changeame mx-auto max-w-4xl px-6 md:px-8 pt-4 z-10 min-w-0 w-full'>
             <div className='nextra-breadcrumb text-sm font-normal flex mt-2.5 text-gray-500 transition-colors cursor-default overflow-hidden'>
               <div className='transition-colors hover:text-gray-900 dark:hover:text-gray-200 text-ellipsis whitespace-nowrap overflow-hidden min-w-[24px]'>
                 All Articles
               </div>
               <span className='mx-2 select-none'>/</span>
               <div className='transition-colors hover:text-gray-900 dark:hover:text-gray-200 text-gray-600 dark:text-gray-400 active'>
                 Shopping Center
               </div>
             </div>
           <h1>Buy & Trade!!</h1>
             <h2>
               <span className="subheading-anchor" id="Pick-up"></span>
               <a href="#Pick-up" className="anchor text-current no-underline no-outline">Pick up a Product pick up An Idea of Business<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Pick up any product, more than a product that may be your idea of business as We will bring to you the products to you supporting you with our Import and Export Services. 
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-full flex justify-center">
                <CarouselPlugin />
                {/*  <img src={pictureone} alt="img" className="will-change" height="50" width="800"/> */}
               </div>
             </div>
             </p>
             <br></br>
           <h1>Services</h1>
             <h2>
               <span className="subheading-anchor" id="Facts"></span>
               <a href="#Facts" className="anchor text-current no-underline no-outline">The Facts<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
              Buy our services and undertake a journey to the future of commerce. 
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
               {cardData.map((card, index) => (
                 <ThreeDCardDemo
                     key={index}
                     title={card.title}
                     description={card.description}
                     imageUrl={card.imageUrl}
                     price={card.price}
                     buttonText={card.buttonText}
                     link={card.link}
                 />
                ))}
               </div>
             </div>
             <div className='mt-16'></div>
             <div
               className='nextra-navigation-links pt-8 mb-8 border-t dark:border-neutral-800 flex flex-row items-center justify-between'
             >
               <div className='flex-1 min-w-0'></div>
               <div className='flex-1 min-w-0 text-right'>
                 <a
                   className='w-full text-lg font-medium p-4 -m-4 no-underline transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-primary-500 hover:text-primary-500 inline-flex items-center justify-end rounded ml-2'
                   title=' Next '
                   href='/Fiveproject'
                   > Design & More <svg
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                     height='24'
                     className='transform inline flex-shrink-0 ml-1'
                   >
                     <path
                       stroke-linecap='round'
                       stroke-linejoin='round'
                       stroke-width='2'
                       d='M9 5l7 7-7 7'
                     ></path></svg></a>
               </div>
             </div> 
           </main>
           <div className='nextra-toc w-64 hidden xl:block text-sm px-4'>
             <div
               className='nextra-toc-content overflow-y-auto pr-4 -mr-4 sticky max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] top-16 pt-8'
             >
               <ul>
                 <p className='font-semibold tracking-tight mb-4'>
                   On This Page
                 </p>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Design'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Design</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Facts'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Facts</a>
                 </li>
               </ul>
               <div
                 className='nextra-toc-meta border-t mt-8 pt-8 shadow-[0_-12px_16px_white] dark:shadow-[0_-12px_16px_#111] bg-white dark:bg-dark sticky pb-8 bottom-0 dark:border-neutral-800'
               >
                 <a
                   className='text-xs font-medium no-underline block text-gray-500 mb-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                   href='https://github.com/orgs/EarnMarket'
                   target='_blank'
                   rel='noreferrer'
                   >Edit this page</a>
               </div>
             </div>
           </div>
        </article>
    </React.Fragment>
  )
}

export default Shopping