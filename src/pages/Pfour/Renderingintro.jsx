import React from 'react'
import otherimg from '../../assets/imgs/imagenrepo14.webp'
import anyimg from '../../assets/imgs/imagenrepo12.webp'

const Renderingintro = () => {
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
                 Performance in Websites ....
               </div>
             </div>
           <h1>What is web performance?</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={otherimg} alt="img" className="will-change hover:animate-pulse" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Abstract"></span>
               <a href="#Abstract" className="anchor text-current no-underline no-outline">Abstract<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Web performance is all about making websites fast, including making slow processes seem fast. Does the site load quickly, allow the user to start interacting with it quickly, and offer reassuring feedback if something is taking time to load e.g. a <code>loading spinner</code> Are scrolling and animations smooth? This article provides a brief introduction to objective, measurable <code>web performance</code>, looking at what technologies, techniques, and tools are involved in web optimization.
             <h2> 
              <span className="subheading-anchor" id="Aims"></span>
               <a href="#Aims" className="anchor text-current no-underline no-outline">Main Aims <span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             Web performance is the objective measurement and perceived user experience of a website or application. This includes the following major areas:
             <li>Reducing overall load time: How long does it take the files required to render the website to download on to the user's computer? This tends to be affected by latency, how big your files are, how many files there are, and other factors besides. A general strategy is to make your files as small as possible, reduce the number of <code>HTTP requests</code> made as much as possible, and employ clever loading techniques <code>such as preload</code> to make files available sooner.</li>
             <li>Making the site usable as soon as possible: This basically means loading your website assets in a sensible order so that the user can start to actually use it really quickly. Any other assets can continue to load in the background while the user gets on with primary tasks, and sometimes we only load assets when they are actually needed this is called <code>lazy loading</code>. The measurement of how long it takes the site to get to a usable start after it has started loading is called time to interactive.</li>
             <li>Smoothness and interactivity: Does the application feel reliable and pleasurable to use? Is the scrolling smooth? Are buttons clickable? Are <code>pop-ups</code> quick to open up, and do they animate smoothly as they do so? There are a lot of best practices to consider in making apps feel smooth, for example using <code>CSS animations</code> rather than <code>JavaScript for animation</code>, and minimizing the number of repaints the <code>UI requires</code> due to changes in the <code>DOM</code>.</li>
             <li>Perceived performance: How fast a website seems to the user has a greater impact on user experience than how fast the website actually is. How a user perceives your performance is as important, or perhaps more important, than any objective statistic, but it's subjective, and not as readily measurable. Perceived performance is user perspective, not a metric. Even if an operation is going to take a long time <code>because of latency or whatever</code>, it is possible to keep the user engaged while they wait by showing a loading spinner, or a series of useful hints and tips <code>or jokes, or whatever else you think might be appropriate</code>. Such an approach is much better than just showing nothing, which will make it feel like it is taking a lot longer and possibly lead to your users thinking it is broken and giving up.</li>
             <li>Performance measurements: Web performance involves measuring the actual and perceived speeds of an application, optimizing where possible, and then monitoring the performance, to ensure that what you've optimized stays optimized. This involves a number of metrics <code>measurable indicators that can indicate success or failure</code> and tools to measure those metrics, which we will discuss throughout this module.</li>
             <h2><span className="subheading-anchor" id="Summarize"></span>
             <a href="#Summarize" className="anchor text-current no-underline no-outline"> Summarize <span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             To summarize, many features impact performance including latency, application size, the number of <code>DOM nodes</code>, the number of resource requests made, <code>JavaScript performance</code>, <code>CPU load</code>, and more. It is important to minimize the loading and response times, and add additional features to conceal latency by making the experience as available and interactive as possible, as soon as possible, while asynchronously loading in the longer tail parts of the experience.
             </p>
             <br></br>             
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={anyimg} alt="img" className="will-change hover:animate-pulse" height="500" width="800" />
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
                   href='/Renderingclient'
                   >💡 Next <svg
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
                     href='#Abstract'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Abstract</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Aims'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Aims</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Summarize'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Summarice</a>
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

export default Renderingintro
