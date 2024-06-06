import React from 'react'
import Newsection from '../../assets/imgs/Newsection.jpg'
import Newsect from '../../assets/imgs/Newsectiontwo.jpg'

const Fourdesign = () => {
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
                 State ....
               </div>
             </div>
           <h1>State and Lifecycle Subject</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={Newsection} alt="img" className="will-change" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Lifecycle"></span>
               <a href="#Lifecycle" className="anchor text-current no-underline no-outline">Lifecycle in a React component<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Taking in Consideration the ticking clock example from one of the previous sections. In Rendering Elements, we have only learned one way to <code>update the UI</code>. We call <code>root.render</code> to change the rendered output
             In this section, we will can to learn how to make the <code>Clock component</code> truly <code>reusable</code> and <code>encapsulated</code>. It will set up its own timer and update itself every second.
             However, it misses a crucial requirement: the fact that the <code>Clock</code> sets up a timer and updates the <code>UI</code> every second should be an implementation detail of the Clock.
             Ideally we want to write this once and have the Clock update itself, To implement this, we need to add “state” to the Clock component
             State is similar to <code>props</code>, but it is private and fully controlled by the component.             
             </p>
           <h1>Using State Correctly</h1>
             <h2>
               <span className="subheading-anchor" id="State"></span>
               <a href="#State" className="anchor text-current no-underline no-outline">Do Not Modify State Directly<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             There are three things you should know about setState.
              <li>Do Not Modify State Directly</li>
              <li>State Updates May Be Asynchronous</li>
              <li>State Updates are Merged</li>
             Therefore, the only way to assign or update the state is to call <code>this.setState</code>. It accepts an <code>object</code> or a <code>function</code> as an argument, and it will merge the object or return <code>value</code> into the current <code>state</code>.
             Also Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or a <code>class</code>.
             This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
             </p>
             <br></br>
           <h1>React Only Updates What's Necessary</h1>
             <h2>
               <span className="subheading-anchor" id="Data"></span>
               <a href="#Data" className="anchor text-current no-underline no-outline">The data<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Other thing to take in consideration, In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={Newsect} alt="img" className="will-change" height="500" width="800" />
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
                   href='/Fivedesign'
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
                     href='#Lifecycle'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Lifecycle </a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#State'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >State</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Data'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Data</a>
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

export default Fourdesign
