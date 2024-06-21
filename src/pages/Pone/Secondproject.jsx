import React from 'react'
import Brandslogan from '../../assets/imgs/BrandSlogan.PNG'
import whatsapp from '../../assets/imgs/whatsapp1.png'
import videon2 from '../../assets/imgs/nala-add.mp4'
import {AccordionDemo} from '../../components/Accordion'
import {SelectForm} from '../../components/SelectForm'
import { Toaster } from "../../components/ui/toaster";
import { CommandDialogDemo } from '../../components/CommandDialogDemo'

function Secondproject({ children }) {
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
                 Ecommerce
               </div>
             </div>
             <h1>What is Nala Business?</h1>
             <div className='w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8'>
               <div className='w-auto grid grid-cols-1'>
               <video src={videon2} alt="video" class="will-change videox" autoplay="" loop playsinline=""  style={{position: 'relative', borderRadius: '20px'}}></video>
               </div>
             </div>
             <h2>
               <span className='subheading-anchor' id='Services'></span>
               <a
                 href='#Services'
                 className='anchor text-current no-underline no-outline'
                 >Services Provided<span
                   className='anchor-icon'
                   aria-hidden='true'
                   >#</span></a>
             </h2>
             <p>
              Nala Business is a brand and business that provides <code>E-commerce</code> & <code>E-business</code> as well as <code>Softare development</code> & <code>Foreign Trade advisory</code>services to companies or start-ups and entrepreneurials who are migrating their business to the digital world or building a project or marketplace from the ground up. We provide services such as:
               <div className='w-auto grid grid-cols-1 sm:grid-cols-2 gap-4 p-4'> 
                <div>
                <li>🧰 Web Design</li>
                <li>🛠 Web Development</li>
                <li>🏛 Web Hosting</li>
                <li>⚙ Web Maintenance</li>
                <li>📚 Web Marketing as E-commerce</li>
                <li>🔐 Web Security</li>
                <li>🛒 Web Optimization</li>
                <li>📊 Web Analytics as E-commerce</li>
                <li>🎮 Web Content</li>
                </div>
                <img src={Brandslogan} alt="Brandslogan" className='w-auto h-auto' style={{height: '310px' , width:'320px' , borderRadius: '13px'}} />
               </div>  
               <a
                 target='_blank'
                 rel='noreferrer'
                 href='https://github.com/' >Here you are going to find the Developmet repository from Nala Business here all the projects or ideas like sketchs and designs for ecommerces and Blogs and all pages and designs in Front-End technologies.</a>
                 ,At the same time, Here you will find the different technologies that we use for the FrontEnd
                 as well as the BackEnd and the different tools that we use for the development of the projects.
             </p>
             <div className='hidden ...'>
             <CommandDialogDemo />
             </div>
            <h3>Software development Technologies Implemented to build your digital dreams:</h3>
             <div className='grid grid-cols-1 gap-3 my-12'>
              <AccordionDemo />
             </div>
             <h2>eCommerce Services</h2>
             <p>
               Along the ecommerce voyage, you will encounter a variety of tools and platforms that can help you build your online store. Here are some of the most popular ones to consider and that we might help you migrate in:
             </p>
             <hr />
             <div>
                <SelectForm />
             </div>
             <Toaster />
             <div className='mt-16'></div>
             <div
               className='nextra-navigation-links pt-8 mb-8 border-t dark:border-neutral-800 flex flex-row items-center justify-between'
             >
               <div className='flex-1 min-w-0'></div>
               <div className='flex-1 min-w-0 text-right'>
                 <a
                   className='w-full text-lg font-medium p-4 -m-4 no-underline transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-primary-500 hover:text-primary-500 inline-flex items-center justify-end rounded ml-2'
                   title='Next'
                   href='/Thirdproject'
                   > Profile <svg
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
               </ul>
               <div
                 className='nextra-toc-meta border-t mt-8 pt-8 shadow-[0_-12px_16px_white] dark:shadow-[0_-12px_16px_#111] bg-white dark:bg-dark sticky pb-8 bottom-0 dark:border-neutral-800'
               >
                 <a
                   className='text-xs font-medium no-underline block text-gray-500 mb-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                   href='https://github.com/'
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
    </React.Fragment>
  )
}

export default Secondproject
