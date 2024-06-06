import React from 'react'
import newreact from '../../assets/imgs/newreact.png'
import imagenrepo from '../../assets/imgs/imagenrepo5.webp'

const Secondesign =()=> {
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
                 Rendering React ....
               </div>
             </div>
           <h1>Rendering Elements</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={newreact} alt="img" className="will-change" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Rendering"></span>
               <a href="#Rendering" className="anchor text-current no-underline no-outline">Rendering an Element into the DOM<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Unlike browser <code>DOM elements</code>, React elements are <code>plain objects</code>, and are cheap to create. <code>React DOM</code> takes care of <code>updating the DOM</code> to match the React elements. We call this a <code>root</code> <code>DOM node</code> because everything inside it will be managed by <code>React DOM</code>.
             Applications built with just React usually have a single <code>root DOM node</code>. If you are integrating React into an existing <code>app</code>, you may have as many isolated <code>root DOM nodes</code> as you like.
             To render a React element, first pass the DOM element to <code>ReactDOM.createRoot</code>, then pass the React element to <code>root.render</code>.
             </p>
           <h1>Updating the Rendered Element</h1>
             <h2>
               <span className="subheading-anchor" id="Unmutable"></span>
               <a href="#Unmutable" className="anchor text-current no-underline no-outline">Unmutable elements<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             React elements are <code>immutable</code>. Once you create an element, you can't change its children or attributes. An element is like a single frame in a movie: it represents the <code>UI</code> at a certain point in time.
             With our knowledge so far, the only way to <code>update the UI</code> is to create a new element, and pass it to <code>root.render</code>.
             <code>React DOM</code> compares the element and its children to the previous one, and only applies the <code>DOM updates</code> necessary to bring the <code>DOM to the desired state</code>.
             </p>
             <br></br>
           <h1>React Only Updates What's Necessary</h1>
             <h2>
               <span className="subheading-anchor" id="Updates"></span>
               <a href="#Updates" className="anchor text-current no-underline no-outline">According with the documentation<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Even though we create an element describing the whole <code>UI tree</code> on every <code>tick</code>, only the <code>text node</code> whose contents have changed gets updated by <code>React DOM</code>.
             In our experience, thinking about how the <code>UI</code> should look at any given moment, rather than how to change it over time, eliminates a whole class of <code>bugs</code>.
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={imagenrepo} alt="img" className="will-change" height="500" width="800" />
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
                   href='/Thirdesign'
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
                     href='#Rendering'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Rendering DOM</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Unmutable'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Unmutable</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Updates'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Updates</a>
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

export default Secondesign
