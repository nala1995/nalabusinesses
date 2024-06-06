import React from 'react'
import repone from '../../assets/imgs/React.png'
import repotwo from '../../assets/imgs/imagenrepo14.webp'

const Firsdesign = () => {
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
                 React
               </div>
             </div>
           <h1>Introducing JSX</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={repone} alt="img" className="will-change animate" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Syntax"></span>
               <a href="#Syntax" className="anchor text-current no-underline no-outline">Syntax in the language<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             It is called <code>JSX</code> when you see in a constant html labels to be rendered, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the <code>UI</code> should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
             JSX produces React <code>elements</code>. We will explore rendering them to the <code>DOM</code> in the next section. Below, you can find the basics of JSX necessary to get you started.
             </p>
           <h1>Why JSX?</h1>
             <h2>
               <span className="subheading-anchor" id="Documentation"></span>
               <a href="#Documentation" className="anchor text-current no-underline no-outline">According to the React Documentation<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             React embraces the fact that rendering logic is inherently coupled with other <code>UI logic</code>: how events are handled, how the state changes over time, and how the data is prepared for display.
             Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called <code>components</code> that contain both. We will come back to components in a further section, but if you're not yet comfortable putting markup in <code>JS</code>, this talk might convince you otherwise.
             React doesn't require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
             </p>
             <br></br>
           <h1>JSX is an Expression Too</h1>
             <h2>
               <span className="subheading-anchor" id="Atribute"></span>
               <a href="#Atribute" className="anchor text-current no-underline no-outline">Specifying Attributes with JSX<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
             This means that you can use JSX inside of if statements and <code>for loops</code>, assign it to variables, accept it as arguments, and return it from <code>functions</code>.
             Also You may use quotes to specify <code>string literals</code> as <code>attributes</code>, as well as use curly braces to embed a JavaScript expression in an attribute. Don't put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes <code>for string values</code> or curly braces <code>for expressions</code>, but not both in the same attribute.
             Another importat thing to take in consideration is, that If a tag is empty, you may close it immediately with <code> / </code>, like <code>XML</code>, although JSX tags may contain children. By default, <code>React DOM</code> escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a <code>string</code> before being rendered. This helps prevent <code>XSS</code> <code>cross-site-scripting</code> attacks.
             On the other hand, <code>Babel</code> compiles <code>JSX down</code> to <code>React.createElement</code> calls. This performs a few <code>checks</code> to help you write <code>bug-free</code> code but essentially it creates an object These objects are called <code>React elements</code>. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the <code>DOM</code> and keep it up to date.
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={repotwo} alt="img" className="will-change" height="500" width="800" />
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
                   href='/Secondesign'
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
                     href='#Syntax'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Syntax</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Documentation'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Documentation</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Atribute'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Attributes</a>
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

export default Firsdesign
