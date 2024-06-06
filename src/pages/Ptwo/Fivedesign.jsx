import React from 'react'
import lastimg from '../../assets/imgs/lastimg.jpg'
import lasting from '../../assets/imgs/lasting.jpg'
import newasset from '../../assets/imgs/newrender.mp4'

const Fivedesign =() => {
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
                 Events & More ....
               </div>
             </div>
           <h1>Last React topic 'Handling Events'</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={lastimg} alt="img" className="will-change" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Tricks"></span>
               <a href="#Tricks" className="anchor text-current no-underline no-outline">Tips and Tricks<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             When you are handling events with React elements is very similar to handling events on <code>DOM elements</code>. There are some syntax differences like, <code>React events</code> are named using <code>camelCase</code>, rather than <code>lowercase</code>, and with JSX you pass a function as the <code>event handler</code>, rather than a <code>string</code>.
             Another difference is that you cannot return false to prevent default behavior in React. You must call <code>preventDefault</code> explicitly. For example, with plain <code>HTML</code>, to prevent the default form behavior of submitting, take that in consideration.
             When using React, you generally don't need to call <code>addEventListener</code> to add <code>listeners</code> to a <code>DOM element</code> after it is created. Instead, just provide a listener when the element is initially <code>rendered</code>, I want to remaind you that you use <code>onclick</code> in remplace of <code>event</code>.
             </p>
           <h1>Passing Arguments to Event Handlers</h1>
             <h2>
               <span className="subheading-anchor" id="Events"></span>
               <a href="#Events" className="anchor text-current no-underline no-outline">Passing events<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Inside a <code>loop</code>, it is common to want to pass an extra parameter to an <code>event handler</code>. For example, if id is the <code>row ID</code>, either of the following would work.
             The below two lines are equivalent, and use arrow functions and <code>Function.prototype.bind</code> respectively.
             In both cases, the e argument representing the React event will be passed as a second argument after the <code>ID</code>. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.
             </p>
             <img src={lasting} alt="img" className="will-change" height="500" width="800"/>
             <br></br>
           <h1>Useful tools where you can find an entire world about tech and learn a lot</h1>
             <h2>
               <span className="subheading-anchor" id="Trends"></span>
               <a href="#Trends" className="anchor text-current no-underline no-outline">Daily dev as a resource to be acurate about tech trends<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
              You can find a lot of resources about tech and learn a lot, I recommend you to visit this website, it's very useful and you can find a lot of information about tech and you can learn a lot, the <code>aim</code> to hightligh this <code>resource</code> is to show you that you can find several things for free and impro everyday then just take the initiative to to it I bet you will achieve it.
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
               <video src={newasset} alt='video/mp4' className='will-change' autoPlay='autoplay' loop='loop' muted='muted' playsInline='playsinline' height='500' width='800' style={{position:'relative'}}/>
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
                   href='/Performancepatterns'
                   > Next Section <svg
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
                     href='#Tricks'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     > Tricks </a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Events'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Events</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Trends'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Trends Tools</a>
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

export default Fivedesign
