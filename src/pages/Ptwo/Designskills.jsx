import React from 'react'
import repoimg from '../../assets/imgs/imagenrepo9.jpg'
import reactslog from '../../assets/imgs/Reactslogan.png'

const Designskills = () => {
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
                 React as Framework
               </div>
             </div>
           <h1>What we need to know about React To start</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={reactslog} alt="img" className="will-change animate" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Language"></span>
               <a href="#Language" className="anchor text-current no-underline no-outline">About the language<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             To start talking about the framework, I would like to start telling you that React is a popular JavaScript library for building user interfaces. One of the key features of React is its reconciliation mechanism, which is the process by which React updates the user interface <code>UI</code> in response to changes in data. In this article, we'll take a closer look at how this mechanism works and how it can be used to build efficient and performant applications.
             <h4>We must to talk about the its process!!</h4>
             <h5>Reconciliation process!</h5>
             Reconciliation is the process by which React updates the <code>UI</code> in response to changes in data. It is a key feature of React that enables developers to build applications that are <code>fast</code>, <code>responsive</code>, and <code>maintainable</code>.
             The reconciliation process begins when a component's state or props change. When this happens, React will compare the current version of the component with the previous version and make the necessary updates to the UI. This comparison is done using a heuristic algorithm, which is a <code>general-purpose</code> method that can be applied to a wide range of problems.
             In addition React reconciliation works by comparing the <code>virtual DOM</code> with the current state of the application. When a change occurs, React determines what, if any, updates need to be made to the <code>virtual DOM</code> to reflect the <code>new state</code>. This process is efficient because React only updates the parts of the <code>DOM</code> that have changed, rather than <code>re-rendering</code> the entire page.
             </p>
             <br></br>
           <h1>Getting into it</h1>
             <h2>
               <span className="subheading-anchor" id="Document"></span>
               <a href="#Document" className="anchor text-current no-underline no-outline">React Documentation<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial. React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple <code>HTML page</code>, or start a complex <code>React-powered</code> app, the links in this section will help you get started.  
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={repoimg} alt="img" className="will-change" height="500" width="800" />
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
                   href='/Firstdesign'
                   > Next <svg
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
                     href='#Language'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Language</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Document'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Documentation</a>
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

export default Designskills
