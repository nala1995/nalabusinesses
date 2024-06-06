import React from 'react'
import pagethree from '../../assets/imgs/repothree.png'
import pagethrees from '../../assets/imgs/reactexample.png'

const Thirdesign=()=> {
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
                React Components ....
               </div>
             </div>
           <h1>Components and Props</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={pagethree} alt="img" className="will-change animated-pulse" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Conceptually"></span>
               <a href="#Conceptually" className="anchor text-current no-underline no-outline">Conceptually, components are like JavaScript functions "They accept arbitrary inputs called “props” and return React elements describing what should appear on the screen"<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             <code>Components</code> let you split the <code>UI</code> into <code>independent</code>, <code>reusable</code> pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.
             </p>
           <h1>🕹 Rendering Components</h1>
             <h2>
               <span className="subheading-anchor" id="Elements"></span>
               <a href="#Elements" className="anchor text-current no-underline no-outline">React elements in the DOM<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Previously in the documentation, we only encountered React elements that represent <code>DOM tags</code>, However, elements can also represent <code>user-defined</code> components, When React sees an element representing a <code>user-defined</code> component, it passes JSX attributes and children to this component as a single object. We call this object <code>props</code>.
             Then Let's recap what happens in this example:
             <li>It is important to notice that always start component names with a capital letter. </li>
             React treats components starting with lowercase letters as <code>DOM tags</code>. For example, <code>div</code>  represents an <code>HTML div tag</code>, but <code>Welcome</code>  represents a component and requires <code>Welcome</code> to be in <code>scope</code>.
             </p>
             <br></br>
           <h1>🛒 Composing Components</h1>
             <h2>
               <span className="subheading-anchor" id="Components"></span>
               <a href="#Components" className="anchor text-current no-underline no-outline">Rendering Components<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A <code>button</code>, a <code>form</code>, a <code>dialog</code>, a screen: in React apps, all those are commonly expressed as components.
             Typically, new React apps have a single App component at the very top. However, if you integrate React into an existing app, you might start <code>bottom-up</code> with a small component like Button and gradually work your way to the top of the view hierarchy.
             </p>
              <br></br>
            <h1>⛏ Extracting Components</h1>
              <h2>
                <span className="subheading-anchor" id="Extracting"></span>
                <a href="#Extracting" className="anchor text-current no-underline no-outline">Extracting Components<span className="anchor-icon" aria-hidden="true">#</span></a>
              </h2>
              <p>
              Remember Don't be afraid to split components into smaller components.
              Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times <code>Button, Panel, Avatar</code>, or is complex enough on its own <code>App, FeedStory, Comment</code>, it is a good candidate to be extracted to a separate component.
              </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={pagethrees} alt="img" className="will-change animated-pulse" height="500" width="800" />
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
                   href='/Fourdesign'
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
                     href='#Conceptually'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Conceptually</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Elements'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Elements</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Components'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Components</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Extracting'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Extracting</a>
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

export default Thirdesign
