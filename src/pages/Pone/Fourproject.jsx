import React from 'react'
import pictureone from '../../assets/imgs/aesthetic1.jpg'
import picturetwo from '../../assets/imgs/aesthetic2.jpg'
import {CommandDialogDemo} from '../../components/CommandDialogDemo'

const Fourproject = ()=> {
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
                 Design & Aesthetics
               </div>
             </div>
           <h1>The Aesthetic Design matters!!</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img className="rounded-s-full will-change" src={pictureone} alt="img" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Design"></span>
               <a href="#Design" className="anchor text-current no-underline no-outline">Design<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Web design is an important factor when it comes to websites, and even more so for eCommerce websites. A successful eCommerce web design can help give customers a better experience and potentially lead to more sales. In this page, we will talk through a few ideas on how you can make eCommerce web design improvements on your website. 
             <h4>First impression is key!!</h4>
             <h5>You never get another chance to make a first impression, so make it count!</h5>
             Much like a shop in real life, if you stepped in for the first time and saw a messy, disorganised floor, you would probably have a negative opinion and leave. This is the same as an online store. Imagine if you landed on a webpage that had a messy layout and low-quality imagery or mismatched fonts, what would your opinion be? 
             So keep this in mind when designing. Take a look at competitors and see how they lay things out. Make sure to keep things clean and professional. Use <code>high-quality</code> imagery and make sure they have similar styling to keep everything consistent.
             </p>
             <br></br>
           <h1>User Experience Design</h1>
             <h2>
               <span className="subheading-anchor" id="Facts"></span>
               <a href="#Facts" className="anchor text-current no-underline no-outline">The Facts<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
              UX Design is becoming the main factor when designing a website. It is something we have discussed in our previous blogs about user experience.
              It is important to make sure a website is user friendly to allow for a fluid journey from start to finish. The last thing you want is for a customer to go on your website and not know where they are going and have to search for it. Make sure everything is easy to find and it is in a way that it flows. This includes simple navigation, CTAs that show where a customer can go next, clear links for information pages such as FAQs and the contact page.
              Being mobile friendly is important, so a responsive website is another point to consider when thinking about UX and eCommerce web design. You need to make sure that when your website is seen on mobile and tablet devices, it looks good. Remember the website will be seen on a smaller screen, so include large <code>CTAs</code> that are easy to click, clear and concise writing and a condensed menu to save space, such as using a burger menu and icons for cart and account pages.
             </p>
            <div className='hidden ...'>
             <CommandDialogDemo />
            </div>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={picturetwo} alt="img" className="rounded-r-full will-change" height="500" width="800" />
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

export default Fourproject
