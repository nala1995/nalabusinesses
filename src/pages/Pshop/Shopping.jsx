import React, { useState} from 'react'
import whatsapp from '../../assets/imgs/whatsapp1.png'
import {CarouselPlugin} from '../../components/CarouselPlugin'
import {ThreeDCardDemo} from '../../Ctest'
import migration from '../../assets/imgs/migracion.jpeg'
import PaypalLogic from '../../Paypalogic'
import optimization from '../../assets/imgs/optimization.jpeg'
import maintenance from '../../assets/imgs/maintenance.jpeg'
import ebusiness from '../../assets/imgs/ebusiness.jpeg'
import automation from '../../assets/imgs/automation.jpeg'
import sketchs from '../../assets/imgs/sketch.jpeg'
import foreign from '../../assets/imgs/Foreign.jpeg'
import marketing from '../../assets/imgs/marketing.jpeg'
import supplych from '../../assets/imgs/supplych.jpeg'
import CardPopup from '../../components/CardPopup'

const cardData = [
  {
    id: 1,
    title: "Ecommerce & Migrations",
    description: "We build your Ecommerce and website at the same time that We help you to migrate to different platforms.",
    imageUrl: migration,
    price: "3500",
    currency: "USD",
    priceCOP: "1376214000",
    currencyCOP: "COP",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji",
    stripeProductId: 'price_1P1v3DBL3mxlGG1nHOoNYabk'
  },
  {
    id: 2,
    title: "Setup & Optimization",
    description: "We help you to maintain your website and optimize it for better performance if you need a small or large improvement we stand out for you.",
    imageUrl: optimization,
    price: "250",
    currency: "USD",
    priceCOP: "98301000",
    currencyCOP: "COP",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji",
    stripeProductId: 'price_1P21pIBL3mxlGG1nojIP7kGj'
  },
  {
    id: 3,
    title: "Active support & Maintenance ",
    description: "We provide you with active support and maintenance for your website and Ecommerce. We are always here for you when when maintenance is needed no matter wich problem.",
    imageUrl: maintenance,
    price: "500",
    currency: "USD",
    priceCOP: "196602000",
    currencyCOP: "COP",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji",
    stripeProductId: 'price_1P21sHBL3mxlGG1nJCzklD73'
  },
  {
    id: 4,
    title: "E-Business consulting ",
    description: "Contract our E-Business consulting services and we will help you to grow your business ideas with our tailored solutions for your entrepreneurial company.",
    imageUrl: ebusiness,
    price: "250",
    currency: "USD",
    priceCOP: "98301000",
    currencyCOP: "COP",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji",
    stripeProductId: 'price_1P229HBL3mxlGG1ndvxcpsps'
  },
  {
    id: 5,
    title: "Digital Diagnosis & Automation",
    description: "Adcquire our Digital Diagnosis & Automation services and we will help you to automate the most essencial and relevant aspects of your business processes.",
    imageUrl: automation,
    price: "400",
    currency: "USD",
    priceCOP: "157281600",
    currencyCOP: "COP",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji",
    stripeProductId: 'price_1P22CeBL3mxlGG1ndW22fVuv'
  },
  {
    id: 6,
    title: "Sketchs & Designs",
    description: "If you need a sketch or design for your website or Ecommerce we are here for you. We will provide you with the best designs for your business and with the best technics and latest trends on this one.",
    imageUrl: sketchs,
    price: "300",
    currency: "USD",
    priceCOP: "117961200",
    currencyCOP: "COP",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji",
    stripeProductId: 'price_1P22FrBL3mxlGG1nX4yOzkpR'
  },
  {
    id: 7,
    title: "Foreign Trade Advisory",
    description: "We can help you to expand your business and to reach new markets with our Foreign Trade Advisory services. We will help you to reach new markets and to expand your business worldwide by helping you understand the Impo and Expo processes and help you get in to it with your business.",
    imageUrl: foreign,
    price: "1500",
    currency: "USD",
    priceCOP: "589806000",
    currencyCOP: "COP",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji",
    stripeProductId: 'price_1P22MBBL3mxlGG1nW9pGzOdD'
  },
  {
    id: 8,
    title: "Marketing Research",
    description: "We provide you with the best Marketing Research services. We will help you to understand your market and to reach your target audience with the best strategies and the best marketing research services by using the latest technics in the field in order to get profitable margins.",
    imageUrl: marketing,
    price: "1400",
    currency: "USD",
    priceCOP: "550485600",
    currencyCOP: "COP",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji",
    stripeProductId: 'price_1P22dbBL3mxlGG1noGaLoXcb'
  },
  {
    id: 9,
    title: "Supply Chain for Ecommerce",
    description: "We provide you with the best Supply Chain services for your Ecommerce. We will help you to manage your supply chain and contract the best services and planne the best strategies for your Ecommerce. We will help you to manage your supply chain and to get the best results for your Ecommerce.",
    imageUrl: supplych,
    price: "2150",
    currency: "USD",
    priceCOP: "845388600",
    currencyCOP: "COP",
    buttonText: "Buy now",
    link: "https://twitter.com/mannupaaji",
    stripeProductId: 'price_1P22hBBL3mxlGG1nsLA9bQg4'
  },
  // you can add more cards here hello there
];

const Shopping = ()=> {

  const [selectedCard, setSelectedCard] = useState(null);


  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };


  


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
             <h2>
               <span className="subheading-anchor" id="Services"></span>
               <a href="#Services" className="anchor text-current no-underline no-outline">Sercives<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
              Buy our services and undertake a journey to the future of commerce. 
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
               {cardData.map((card) => (
                  <ThreeDCardDemo
                   key={card.id}
                   id={card.id}
                   title={card.title}
                   description={card.description}
                   imageUrl={card.imageUrl}
                   currency={card.currency}
                   price={card.price}
                   currencyCOP={card.currencyCOP}
                   priceCOP={card.priceCOP}
                   buttonText={card.buttonText}
                   link={card.link}
                   stripeProductId={card.stripeProductId}
                   onClick={() => { handleCardClick(card);}} />
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
                     href='#Pick-up'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Pick-up</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Services'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Services</a>
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
             <a href="https://api.whatsapp.com/send?phone=3143468608" class="whatsapp-icon">
                <img height="51px" width="51px" src={whatsapp} alt="WhatsApp"/>
              </a>
           </div>
        </article>
        {selectedCard && (
        <CardPopup
          id={selectedCard.id}
          title={selectedCard.title}
          description={selectedCard.description}
          imageUrl={selectedCard.imageUrl}
          price={selectedCard.price}
          currency={selectedCard.currency}
          priceCOP={selectedCard.priceCOP}
          currencyCOP={selectedCard.currencyCOP}
          stripeProductId={selectedCard.stripeProductId}
          onClose={closePopup}>
          <PaypalLogic
            productId={selectedCard.id}
            productQuantity={1} // Puedes definir la cantidad según tus necesidades
            price={selectedCard.price}
            currency={selectedCard.currency}
          />
        </CardPopup>
        )}
    </React.Fragment>
  )
}

export default Shopping