import React from 'react'
import videon from '../assets/imgs/Nala.mp4'
import { BentoGridThirdDemo } from "../components/BentoGridThirdDemo";
import { CardStackDemo } from "../components/CardStackDemo";
import whatsapp from '../assets/imgs/whatsapp1.png'

function Home() {
  return (
    <React.Fragment>
      <article className='nextra-body relative pb-8 w-full max-w-full flex min-w-0 pr-[calc(env(safe-area-inset-right)-1.5rem)] nextra-body-typesetting-default'>
           <main className='changeame mx-auto max-w-4xl px-6 md:px-8 pt-4 z-10 min-w-0 w-full'>
             <div className='nextra-breadcrumb text-sm font-normal flex mt-2.5 text-gray-500 transition-colors cursor-default overflow-hidden'>
               <div className='transition-colors hover:text-gray-900 dark:hover:text-gray-200 text-ellipsis whitespace-nowrap overflow-hidden min-w-[24px]'>
                 Welcome
               </div>
               <span className='mx-2 select-none'>/</span>
               <div className='transition-colors hover:text-gray-900 dark:hover:text-gray-200 text-gray-600 dark:text-gray-400 active'>
                 Home
               </div>
             </div>
       <h1>Welcome to Nala Business </h1>
                   <div className='w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8'>
                    <div className="w-auto grid grid-cols-1">
            	              <video src={videon} alt="video" class="will-change videox" autoplay="" loop playsinline="" height="500" width="800" style={{position: 'relative', borderRadius: '15px'}}></video>
            		              <h1 className="capa mr-4 hidden md:inline-block"  value="Web Development" style={{color: 'grey'}}>E-business Design </h1>
            		              <h2 className="capa1 mr-4 hidden md:inline-block"  value="Web Development" style={{color: 'grey'}}> Nala's Web </h2>
                    </div>
                   </div>
             <h2>
               <span className='subheading-anchor' id='Services'></span>
               <a href='#Services' className='anchor text-current no-underline no-outline'>Our Services<span className='anchor-icon' aria-hidden='true'>#</span></a>
             </h2>
             <p>
             This website is intended to show an entrepreneural e-business called <code>Nala</code> which is a website to promote an e-business company and brand that helps other businesses, get in to the e-business and new platforms to make trades and transactions as well as migrate any kind of business in to a website.
             Besides, This website is about the <code>React</code> library and other <code>code languages</code> and useful code things for who is learning from scratch, as an empirical front-end developer I wanted to make this website to show that everyone who is interested in learn new technologies, have access to all sort of code material on internet for free then just you've got to have <code>willingness</code> to learn.
             </p>
             <p>
             We invite you to create a powerful online presence with <code>Nala's</code> web development services. Enhance your business with a custom <code>website</code>, <code>e-commerce solutions</code>, and <code>SEO</code>, also you can find products or entrepreneurial ideas to <code>import</code> and start selling only that product. Contact us at do not be shy and get started.
             </p>
             <br>
             </br>
            <h1>Invest in your ideas, Invest in digitalization, Invest in you, rely in your potential</h1>
             <h2>
               <span className='subheading-anchor' id='Testimony'></span>
               <a href='#Testimony' className='anchor text-current no-underline no-outline'>Boost your ideas with us<span className='anchor-icon' aria-hidden='true'>#</span></a>
             </h2>
             <BentoGridThirdDemo />
             <CardStackDemo />
             <div
               className='nextra-navigation-links pt-8 mb-8 border-t dark:border-neutral-800 flex flex-row items-center justify-between'
             >
               <div className='flex-1 min-w-0'></div>
               <div className='flex-1 min-w-0 text-right'>
                 <a
                   className='w-full text-lg font-medium p-4 -m-4 no-underline transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-primary-500 hover:text-primary-500 inline-flex items-center justify-end rounded ml-2'
                   title='START'
                   href='/Introduction'
                   > Start the trip <svg
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
                     href='#Services'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Services</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Testimony'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Testimony</a>
                 </li>
               </ul>
               <div className='nextra-toc-meta border-t mt-8 pt-8 shadow-[0_-12px_16px_white] dark:shadow-[0_-12px_16px_#111] bg-white dark:bg-dark sticky pb-8 bottom-0 dark:border-neutral-800'> 
               </div>
               </div>
               <a href="https://api.whatsapp.com/send?phone=3143468608" class="whatsapp-icon">
                  <img style={{height:'51px', width:'51px'}} src={whatsapp} alt="WhatsApp"/>
                </a>
             </div>
        </article>
    </React.Fragment>
  )
}

export default Home
