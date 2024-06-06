import React from 'react'
import profileimg from '../../assets/imgs/fm-logo.png'

const Thirdproject =()=> {
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
                 Profile
               </div>
             </div>
             <h1>Professional Profile</h1>
             <div className='w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8'>
               <div className='w-auto grid grid-cols-1'>
                 <img src={profileimg} alt='' className='will-change' height='10' width='300'/>
               </div>
             </div>
             <h2>
               <span className='subheading-anchor' id='Profile'></span>
               <a
                 href='#Profile'
                 className='anchor text-current no-underline no-outline'
                 >Career Background<span
                   className='anchor-icon'
                   aria-hidden='true'
                   >#</span></a>
             </h2>
             <p>
              The main object for this section is to show you all my professional background and the different sort of experiences I have had in the past, I hope you enjoy it. 
               <a
                 target='_blank'
                 rel='noreferrer'
                 href='https://nala1995.github.io/ferprofile/' > It's a plesure to tell you a little bit about myself, you can click on here to find out more!!</a>
                 , Professional in <code>Foreign Trade & International Business</code> at Colombian School of Industrial Careers University and Certified as <code>FrontEnd Developer</code> at Devf Mexico City Academy.
             </p>
             <div className='grid grid-cols-1 gap-3 my-12'>
               <div className='flex items-center space-x-4'>
                 <div>
                   <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                     aria-hidden='true'
                     className='block w-8 h-8'
                     style={{'height': '24px' , 'width': '24px'}}
                   >
                     <path
                       stroke-linecap='round'
                       stroke-linejoin='round'
                       stroke-width='2'
                       d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                     ></path>
                   </svg>
                 </div>
                 <div>
                   <div className='my-0 font-small dark:text-white'>
                     SAP ERP / Warehouse modules inbound / Microsoft Tools Advanced / Power Bi  
                   </div>
                 </div>
               </div>
               <div className='flex items-center space-x-4'>
                 <div>
                   <svg
                     xmlns='http://brayve.net/blog/2020/01/09/8-html-tags-you-need-to-be-using-and-5-to-avoid/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                     aria-hidden='true'
                     className='block w-8 h-8'
                     style={{'height': '24px' , 'width': '24px'}}
                   >
                     <path
                       stroke-linecap='round'
                       stroke-linejoin='round'
                       stroke-width='2'
                       d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                     ></path>
                     <path
                       stroke-linecap='round'
                       stroke-linejoin='round'
                       stroke-width='2'
                       d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                     ></path>
                   </svg>
                 </div>
                 <div>
                   <div className='my-0 font-small dark:text-white'>
                     HTML / Css / Sass / Javascript / ESC6 / Frameworks as Bootstrap or tailwind and More ui & ux
                   </div>
                 </div>
               </div>
               <div className='flex items-center space-x-4'>
                 <div>
                   <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                     aria-hidden='true'
                     className='block w-8 h-8'
                     style={{'height': '24px' , 'width': '24px'}}
                   >
                     <path
                       stroke-linecap='round'
                       stroke-linejoin='round'
                       stroke-width='2'
                       d='M13 10V3L4 14h7v7l9-11h-7z'
                     ></path>
                   </svg>
                 </div>
                 <div>
                   <div className='my-0 font-small dark:text-white'>
                     React js / Node js  / API calls / Supabase 
                   </div>
                 </div>
               </div>
             </div>
             <p>
               With a background in the supply chain and logistic industry, I've worked with the biggest companies in the world, such as Johnson & Johnson Medical Devices and With the largest Ecommerce in Latin America Mercado Libre. 
               <a
                 target='_blank'
                 rel='noreferrer'
                 href='https://www.jnj.com/innovation/how-johnson-johnsons-supply-chain-made-strides-in-2016'
                 > JnJ Medical Supply chain </a>
                  And 
               <a
                 target='_blank'
                 rel='noreferrer'
                 href='https://investor.mercadolibre.com/about-us/'
                 > Mercado Libre LATAM </a> 
               - On the other hand as I got my Developer certification I've been working in the ecommerce sector as well as the frontend, Handling different activities which are related to managing platforms, such as <code>Vitex,</code> <code>Shopify,</code> Also related to build from scratch websites with all the frontend technologies as HTML css javascript and making it work in a react app.
               <a
                 target='_blank'
                 rel='noreferrer'
                 href='https://devf.la/'
                 > Certification issued by Dev.f Mexico </a>
             </p>
             <hr />
             <p>
               With all the years that I've got working and studying I have learnt how to implement these two pathways, software skills always will help you improve different processes and make your life easier, In adition the ecommerce is starting to be a big part of the world economy, so it's important to know how to handle it and build or modify each process managed in the web-platforms. 
             </p>
             <div className='mt-16'></div>
             <div
               className='nextra-navigation-links pt-8 mb-8 border-t dark:border-neutral-800 flex flex-row items-center justify-between'
             >
               <div className='flex-1 min-w-0'></div>
               <div className='flex-1 min-w-0 text-right'>
                 <a
                   className='w-full text-lg font-medium p-4 -m-4 no-underline transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-primary-500 hover:text-primary-500 inline-flex items-center justify-end rounded ml-2'
                   title='Next'
                   href='/Fourproject'
                   > Aesthetics <svg
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
                     href='#Profile'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Profile</a>
                 </li>
               </ul>
               <div
                 className='nextra-toc-meta border-t mt-8 pt-8 shadow-[0_-12px_16px_white] dark:shadow-[0_-12px_16px_#111] bg-white dark:bg-dark sticky pb-8 bottom-0 dark:border-neutral-800'
               >
                 <a
                   className='text-xs font-medium no-underline block text-gray-500 mb-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                   href='https://github.com/shuding/nextra/blob/main/pages/index.mdx'
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

export default Thirdproject
