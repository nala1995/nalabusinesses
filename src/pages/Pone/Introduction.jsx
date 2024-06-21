import React from 'react'
import picture from '../../assets/imgs/imagen1.jpg'
import intropic from '../../assets/imgs/imagen2.jpg'
import {CommandDialogDemo} from '../../components/CommandDialogDemo'

function Introduction() {
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
                 Introduction
               </div>
             </div>
           <h1>About this website!!</h1>
             <h2>
               <span className="subheading-anchor" id="Main"></span>
               <a href="#Main" className="anchor text-current no-underline no-outline">Main<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <div className='w-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'>
             <p>
             This Website is intended to be a guide for those who want to start their own ecommerce website or event a personal blog, also this website is meant to everyone who is learning about <code>software-programming.</code>
             In this website you can find my journey on build my own website and also you can find some tips and tricks that I have learned along the way. The tootls and technologies that I have used are mainly free and open source, so you can use them too.
             Having said that, I hope you enjoy this website and if you have any questions or suggestions, please feel free to contact me. 
             </p>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto">
                 <img src={picture} alt="img" className="will-change animate" height="auto" width="auto"/>
               </div>
             </div>
             </div>
             <br></br>
           <h1>Topics I will focus on</h1>
             <h2>
               <span className="subheading-anchor" id="Suggestion"></span>
               <a href="#Suggestion" className="anchor text-current no-underline no-outline">Suggestion<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <div className='w-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={intropic} alt="img" className="will-change" height="auto" width="auto" />
               </div>
             </div>
             <p>
             The languages and technologies that I've used are <code>HTML</code> and <code>CSS</code> for the frontend and <code>Javascript</code> for the backend as well as <code>React</code> as framework language, but I will also talk about other technologies that I have used to build this website with is built with React mainly but uses the technologies previously named.
             On the other hand I will also talk about the <code>E-business</code> and business initiative which is the creation of a brand called <code>Nala Business</code>, This brand is intended to be an online service to help a diverse groups who can be interested on build or be advised on ecommerce matters or developement matters.
             </p>
             <div className='hidden ...'>
             <CommandDialogDemo />
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
                   title='Next'
                   href='/Firstproject'
                   >💻 eCommerce <svg
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
                     href='#Main'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Main</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Suggestion'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Suggestion</a>
                 </li>
               </ul>
               <div className='nextra-toc-meta border-t mt-8 pt-8 shadow-[0_-12px_16px_white] dark:shadow-[0_-12px_16px_#111] bg-white dark:bg-dark sticky pb-8 bottom-0 dark:border-neutral-800'> 
               </div>
               </div>
             </div>
        </article>
    </React.Fragment>
  )
}

export default Introduction
