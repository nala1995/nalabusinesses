import React from 'react'
import express from '../../assets/imgs/imagerepo1.webp'
import expresstwo from '../../assets/imgs/imagenrepo4.webp'

const Performancepatterns = () => {
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
                 Introduction to Javascript ....
               </div>
             </div>
           <h1>What is Javascript?</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={express} alt="img" className="will-change hover:animate-pulse" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Description"></span>
               <a href="#Description" className="anchor text-current no-underline no-outline">Description<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             It is a pleasure to introduce to you this useful and marvellous programming language which is <code>JavaScript</code>, This one is an <code>open-source</code> programming language designed for creating <code>web-centric</code> applications. It is <code>lightweight</code> and interpreted which makes it much faster than other languages and is integrated with <code>HTML</code> making it easier to implement in web applications.
             In this Introduction section to JavaScript article, you will learn all about <code>JavaScript</code>, the backbone of web development, and understand what exactly this language is and why and how this language is used across various fields.
             On the other hand let me tell you that JavaScript is critical for web development, and if you've ever thought about choosing that career path, you'd surely have come across this language. And probably, that's why you are here in the first place in order to improve or get more approach to it.
             To start we've got to get approach to the basic concepts of JavaScript as follows:
             <li> <code>DOM</code> and handle it </li>
             <li> <code>Arrays</code> </li>
             <li> <code>Loops</code> </li>
             <li> <code>Functions</code> </li>
             <li> <code>Events</code> in the DOM </li>
             <li> <code>Objects</code>, <code>this</code>, <code>Promises</code> and <code>then</code> conditionals like <code>if</code> </li>
             </p>
             <br></br>
           <h1>Why and how to get deep in to JavaScript</h1>
           <p>
            JavaScript is a scripting language that is used to create and manage <code>dynamic web pages</code>, basically anything that moves on your screen without requiring you to refresh your browser. It can be anything from animated graphics to an automatically generated <code>Facebook timeline</code>.
            The majority learning this language is interested in web development and must to start with this language or at least I recomend it, In some cases, they start with good old <code>HTML</code> and <code>CSS</code>. From there, they move on to JavaScript, which makes sense, because, these three elements together form the backbone of web development.
            firsly <code>HTML</code> is the structure of your page like the <code>headers</code>, the body text, any images you want to include. It basically defines the contents of a web page.
            Secondly <code>CSS</code> controls how that page looks. It's what you'll use to customize <code>fonts</code>, <code>background</code> colors, etc.
            and finally JavaScript is what makes your page interactive. It's what you'll use to add animations, make your page respond to user <code>input</code>, and so on, then Once you've created your structure <code>HTML</code> and your aesthetic vibe <code>CSS</code>, <code>JavaScript</code> makes your site dynamic <code>automatically updateable</code>.
           </p>
             <h2>
               <span className="subheading-anchor" id="Starting"></span>
               <a href="#Starting" className="anchor text-current no-underline no-outline">Starting with HTML<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             The JavaScript framework is used in various fields from the web to servers, and here's a quick list of the significant areas it's used in, for instance
             to build Web Applications: As JavaScript is used for adding interactivity and automation to websites. So, if you want your web application to be anything more than just a static page of contents, you'll probably need to do some <code>JavaScript's</code>
             Also to build the <code>Back-end</code> Web Development: JavaScript has traditionally been used for developing the <code>front-end</code> parts of a web application. However, with the introduction of <code>NodeJS</code>, a prevalent <code>back-end</code> JavaScript framework, things have changed. And now, JavaScript is used for developing the back-end structure also.
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={expresstwo} alt="img" className="will-change hover:animate-bounce" height="500" width="800" />
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
                   href='/Staticimport'
                   >🧪 Next <svg
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
                     href='#Description'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Js Description</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Starting'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Starting</a>
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

export default Performancepatterns