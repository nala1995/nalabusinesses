import React from 'react'
import newthre from '../../assets/imgs/renderingimg.jpg'
import newestimg from '../../assets/imgs/renderingthree.jpg'

const Renderingclient = () => {
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
                 Rendering in Websites ....
               </div>
             </div>
           <h1>How content is rendered</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={newthre} alt="img" className="will-change hover:animate-pulse" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Rendering"></span>
               <a href="#Rendering" className="anchor text-current no-underline no-outline">Rendering<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             To effectively understand web performance, the issues behind it, and the major topic areas we mentioned above, you really should understand some specifics about how browsers work. This includes:
             <li>How the browser works. When you request a URL and hit <code>Enter</code> / <code>Return</code> , the browser finds out where the server is that holds that website's files, establishes a connection to it, and requests the files. See Populating the page: how the browser works for a detailed overview.</li>
             <li>Source order. Your <code>HTML index</code> file's source order can significantly affect performance. The download of additional assets linked to from the index file is generally sequential, based on source order, but this can be manipulated and should definitely be optimized, realizing that some resources block additional downloads until their content is parsed and executed.</li>
             <li>The critical path. This is the process that the browser uses to construct the web document once the files have been downloaded from the server. The browser follows a <code>well-defined</code> set of steps, and optimizing the critical rendering path to prioritize the display of content that relates to the current user action will lead to significant improvements in content rendering time. See Critical rendering path for more information.</li>
             <li>The document object model. The document object model, or <code>DOM</code>, is a tree structure that represents the content and elements of your <code>HTML</code> as a <code>tree of nodes</code>. This includes all the HTML attributes and the relationships between the <code>nodes</code>. Extensive <code>DOM manipulation</code> after the pages has loaded e.g., <code>adding</code>, <code>deleting</code>, or moving of <code>nodes</code> can affect performance, so it is worth understanding how to DOM works, and how such issues can be mitigated. Find out more at <code>Document Object Model</code>.</li>
             <li>Latency. We mention this briefly earlier on, but in brief, latency is the time it takes for your website assets to travel from the server to a user's computer. There is overhead involved in establishing <code>TCP</code> and <code>HTTP connections</code>, and some unavoidable latency in pushing the request and response bytes back and forth across the network, but there are certain ways to reduce latency e.g. reducing the number of <code>HTTP request</code> you make by downloading fewer files, using a <code>CDN</code> to make your site more universally performant across the world, and using <code>HTTP/2</code> to serve files more efficiently from the server. You can read all about this topic at Understanding Latency.</li>
             <h2><span className="subheading-anchor" id="Conclusion"></span>
             <a href="#Conclusion" className="anchor text-current no-underline no-outline"> Conclusion <span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             That's it for now; we hope our brief overview of the web performance topic helped you to get an idea of what it is all about, and made you excited to learn more. Next up we'll look at perceived performance, and how you can use some clever techniques to make some unavoidable performance hits appear less severe to the user, or disguise them completely.
             </p>
             <br></br>             
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={newestimg} alt="img" className="will-change hover:animate-pulse" height="500" width="800" />
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
                   href='/Renderingstatic'
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
                     href='#Rendering'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Main idea </a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Conclusion'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Conclusion</a>
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

export default Renderingclient
