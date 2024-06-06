import React from 'react'
import triky from '../../assets/imgs/imagenrepo9.jpg'
import triki from '../../assets/imgs/newreact.png'

const Dynamicimport = () => {
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
                 Loops in Javascript ....
               </div>
             </div>
           <h1>Javascript loops</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={triky} alt="img" className="will-change hover:animate-pulse" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Brief"></span>
               <a href="#Brief" className="anchor text-current no-underline no-outline">Brief<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             <h2> For in Loop </h2>
             The loop will iterate over all enumerable properties of the object itself and those the object inherits from its prototype chain <code>properties of nearer prototypes take precedence over those of prototypes further away from the object in its prototype chain</code>.
             A <code>for...in</code> loop only iterates over enumerable, <code>non-symbol</code> properties. Objects created from <code>built_in</code> constructors like Array and Object have inherited <code>non_enumerable</code> properties from <code>Array.prototype</code> and <code>Object.prototype</code>, such as Array's <code>indexOf""</code> method or Object's <code>toString""</code> method, which will not be visited in the <code>for...in</code> loop.
             The traversal order, as of modern <code>ECMAScript</code> specification, is <code>well-defined</code> and consistent across implementations. Within each component of the prototype chain, all <code>non-negative</code> integer keys <code>those that can be array indices</code> will be traversed first in ascending order by value, then other string keys in ascending chronological order of property creation.
             The variable part of <code>for...in</code> accepts anything that can come before the<code> = </code>operator. You can use const to declare the variable as long as it's not reassigned within the loop body <code>it can change between iterations, because those are two separate variables</code>. Otherwise, you can use let. You can use destructuring or an object property like for <code>"x.y in iterable</code> as well.
             A legacy syntax allows var declarations of the loop variable to have an initializer. This throws a syntax error in strict mode and is ignored in <code>non_strict</code> mode.
             <h2> For of Loop </h2>
             The <code>for...of</code> statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of <code>built-ins</code> such as <code>Array</code>, <code>String</code>, <code>TypedArray</code>, <code>Map</code>, <code>Set</code>, <code>NodeList</code> and other <code>DOM collections</code>, as well as the arguments object, generators produced by generator functions, and <code>user-defined</code> iterables.
             A <code>for...of</code> loop operates on the values sourced from an iterable one by one in sequential order. Each operation of the loop on a value is called an iteration, and the loop is said to iterate over the iterable. Each iteration executes statements that may refer to the current sequence value.
             When a <code>for...of</code> loop iterates over an iterable, it first calls the iterable's <code> @@iterator""</code> method, which returns an iterator, and then repeatedly calls the resulting iterator's <code>next""</code> method to produce the sequence of values to be assigned to variable.
             A <code>for...of</code> loop exits when the iterator has completed "the iterator's next"" method returns an object containing done: true". You may also use control flow statements to change the normal control flow. break exits the loop and goes to the first statement after the loop body, while continue skips the rest of the statements of the current iteration and proceeds to the next iteration.
             If the <code>for...of</code> loop exited early <code>e.g. a break statement is encountered or an error is thrown</code>, the <code>return""</code> method of the iterator is called to perform any cleanup.
             The variable part of <code>for...of</code> accepts anything that can come before the <code> = </code> operator. You can use const to declare the variable as long as it's not reassigned within the loop body <code>it can change between iterations, because those are two separate variables</code>. Otherwise, you can use let.
             <h2><span className="subheading-anchor" id="While"></span>
             <a href="#While" className="anchor text-current no-underline no-outline"> While Loop <span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
             An expression evaluated before each pass through the loop. If this condition evaluates to true, statement is executed. When condition evaluates to false, execution continues with the statement after the <code>while loop</code>.
             statement
             An optional statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement to group those statements.
             Note: Use the break statement to stop a loop before condition evaluates to true.
             <h2> Do while Loop </h2>
             The <code>do...while</code> statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
             A statement that is executed at least once and is <code>re-executed</code> each time the condition evaluates to true. To execute multiple statements within the loop, use a block statement to group those statements.
             An expression evaluated after each pass through the loop. If condition evaluates to true, the statement is re-executed. When condition evaluates to false, control passes to the statement following the <code>do...while</code>.
             In some cases, it can make sense to use an assignment as a condition, but when you do, there's a right way to do it, and a wrong way; the while documentation has a Using an assignment as a condition section with an example showing a general best-practice syntax you should know about and follow.
             </p>
             <br></br>
             <h2>
               <span className="subheading-anchor" id="Conclusion"></span>
               <a href="#Conclusion" className="anchor text-current no-underline no-outline">Conclusion<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             In this article, we learned what a JavaScript loop is and looked at some examples.
             It is important to understand that there are many other types of loops, including the <code>while loop</code>, which is best used when you don't know the number of iterations. Otherwise, always use the for loop when you do know the number of iterations.
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={triki} alt="img" className="will-change" height="500" width="800" />
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
                   href='/Renderingintro'
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
                     href='#Brief'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Brief</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#While'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >While</a>
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

export default Dynamicimport
