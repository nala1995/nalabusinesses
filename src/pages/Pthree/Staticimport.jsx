import React from 'react'
import oblivion from '../../assets/imgs/imagenrepo13.webp'
import obliviontwo from '../../assets/imgs/imagenrepo2.webp'

const Staticimport = () => {
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
                 Js PATTERNS ....
               </div>
             </div>
           <h1>Javascript Arrays</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={oblivion} alt="img" className="will-change hover:animate-pulse" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Array"></span>
               <a href="#Array" className="anchor text-current no-underline no-outline">Deep into it<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             JavaScript is one of the most important scripting languages that is used mainly for improving a user's interaction with a web page. With this programming language, you can make your website more lively, robust, and interactive. Today, JavaScript is being used widely in game development and mobile application development. 
             <h2> 
              <span className="subheading-anchor" id="More"></span> 
              <a href="#More" className="anchor text-current no-underline no-outline">What Are Arrays in JavaScript about? <span className="anchor-icon" aria-hidden="true">#</span></a> 
             </h2>
             <code>Arrays</code> in JavaScript are the data type used to store a list of values. JavaScript array objects can be stored in <code>variables</code> and dealt with in the same way you deal with any other data type. The difference is that we can access each value inside the list individually, and perform various activities, such as <code>looping</code> over it.
             <h2> Creation of Arrays </h2>
             The items in an array are enclosed within square brackets. For this example, we'll imagine that we are looking at a list of cars. 
             <code>let cars = "bmw", "volvo", "honda";</code>
             The array above is only holding integer values, but arrays are capable of holding multiple values of different data types.
             <h2>How to access Array Elements</h2>
             Takining in consideration that The notation for accessing the elements inside an <code>array</code> is also square brackets. Every element in the array is assigned with an <code>index</code>. By default, the first index of an array is zero. To retrieve a specified element from an array, a pair of square brackets enclosing the index value is used, <code>i.e., cars[0]</code>. To avoid any confusion, think of the index as the number of items to skip, counting from the start of the array. 
             on the other hand we've got the array length property, which returns the number of elements in the array.
            <h2><span className="subheading-anchor" id="Add"></span>
              <a href="#Add" className="anchor text-current no-underline no-outline">How to Add Elements to an Array <span className="anchor-icon" aria-hidden="true">#</span></a>
            </h2>
            The <code>push method</code> is used to add new elements to the end of an <code>array</code>. The <code>unshift method</code> is used to add new elements to the beginning of an array.
            <h2>Loop Over the Array Items</h2> 
            You can also <code>loop</code> over an array in case you need to access multiple elements from the array at once. We use the <code>forEach method</code> for this, which calls a function once for each element in an array. 
            <h2>The main Methods</h2>
            Now that you know more about creating and accessing arrays, we'll cover the various array methods. There are several <code>built-in methods</code> to use in arrays, and we will go over a few of the most commonly used ones
            <h2> toString Method </h2> 
            The <code>toString method</code> returns a <code>string</code> relating to the number. The only parameter it takes is the base <code>index</code>. 
            <h2> Push Method </h2>
            The <code>push method</code> is used to push the elements into an existing array. The <code>push method</code> mutates the array. 
            <code>cars.push"Audi";</code>
            <code>console.logcars;</code>
            The new array element <code>Audi</code> is pushed at the end of the array. 
            <h2><span className="subheading-anchor" id="Unshift"></span>
            <a href="#Unshift" className="anchor text-current no-underline no-outline">Unshift Method <span className="anchor-icon" aria-hidden="true">#</span></a> 
            </h2>
            This method is used to add elements to the front of the array and increases the index of every element by one.
            <code>cars.unshift"Toyota"</code>
            <code>console.log"cars";</code>
            <h2> Pop Method</h2>
            This method is used to pop the last element from the array. 
            <code>cars.pop""</code>
            <code>console.log"cars";</code>
            As per the above logic, the last element <code>Audi</code> is deleted from the array.
            <h2> Shift Method </h2>
            This method is the opposite of <code>unshift</code>, and it removes the first element of the array. This method shifts all the elements, reducing the indexes of every element by one.
            <code>cars.shift"";</code>
            <code>console.log"cars";</code>
            The code above must return our original array with three elements. 
            <h2>Slice Method</h2>
            The <code>slice method</code> cuts the array and returns a shallow copy of a portion of an array into a new array object. It takes in two parameters: <code>begin</code> and <code>end</code>. The array is sliced from the index specified as begin till the end index end index excluded. The original array will not be modified.
            If the end parameter is unspecified, the entire array from the begin index is sliced. 
            <h2><span className="subheading-anchor" id="Concat"></span>
            <a href="#Concat" className="anchor text-current no-underline no-outline">Concat Method <span className="anchor-icon" aria-hidden="true">#</span></a> 
            </h2>
            The concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
            <h2>Sort Method</h2>
            The <code>sort method</code> is used to sort the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the <code>elements</code> into <code>strings</code>, then comparing their sequences of <code>UTF-16</code> code units values.
            <h2>Reverse Method</h2>
            The <code>reverse method</code> is used to reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.
            To reverse the order of elements in an array, we use the <code>reverse method</code>. When reverse is used after the <code>sort method</code>, you get the values in descending order.   
            <h2>Map Method</h2>
            Some of the most powerful JavaScript array <code>methods are map</code>, <code>reduce</code>, and <code>filter</code>. Let's go over these.
            method is used to create a new array from an existing one by applying a function to each of the elements of the first array. It does not change the original array 
            Here, the <code>map method</code> ensures that the function double is applied to each element in the array, thus multiplying the elements by two and storing them in the new array <code>num2</code>.
            <h2>Filter Method</h2>
            The filter method takes each element from an array and applies a conditional statement against it. If this condition is true, the element gets pushed to the output array. If the condition is false, the element does not get pushed to the output array. 
            All array elements greater than the conditional will be pushed on to the output array final array.
            <h2>Reduce Method</h2>
            The <code>reduce method</code> reduces an array of values to just one value. The reduce function is run on each element of the array to get the single output value. This method does not reduce the original array.
             </p>
             <br></br>
           <h1>Another importnt JS Method is filter</h1>
           <p>
           The filter method will filter out the elements of an array based on the specified test condition. It will iterate through all the elements and imply the test condition on them. It will then return a new array of elements that will pass the condition.
           </p>
             <h2>
               <span className="subheading-anchor" id="Loops"></span>
               <a href="#Loops" className="anchor text-current no-underline no-outline">Talking about loops in JS<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             When you interact with a <code>web page</code>, <code>mobile application</code>, or an <code>online game</code>, there's a good chance that it was built with JavaScript. If you are looking to learn how to code with it, you've come to the right place! Here, we will go over one of the most commonly used tools in this programming language - <code>JavaScript loops</code>. 
             <code>Loops</code> are programming constructs that facilitate the execution of a set of instructions of code repeatedly, as long as a certain condition is met.  
             First, we'll go through the introduction of a loop, including their classifications. 
             A loop is a programming construct that repeatedly executes a piece of code. Loops are simple, yet extremely powerful. 
             Loops are broadly divided into two categories:
             <li> Entry Controlled Loops </li>
             These control the entry to the loop. They check for a condition and the control is transferred inside the <code>loop if</code>, and only <code>if</code>, the condition is true. These loops are used when checking for a condition before execution is mandatory. Examples include <code>for</code> and <code>while loops</code>. 
             <li> Exit Controlled Loops </li>
             An exit control loop controls the exit. The exit control loop checks the condition for an exit. If the given condition for exit is true, control will exit from the loop body, or else control will enter again into the loop. An example of an exit controlled loop is a <code>do-while loop</code>.
             <h2>The For Loop</h2>
             The <code>flowchart</code> above shows the simple JavaScript for <code>loop logic</code>. As mentioned earlier, a for loop is an entry controlled loop and tests the condition before entering the loop. 
             We can find the for loop in the following syntax:
             <code>For in</code> loop is used to iterate over the properties of an object. It is used to iterate over the enumerable properties of an object.
             <code>For each</code> loop is used to iterate over the elements of an array. It is used to iterate over the elements of an array.
             <code>While </code> loop is used to iterate over a block of code as long as a given condition is true. It is used to iterate over a block of code as long as a given condition is true.
             <code>Do while</code> loop is used to iterate over a block of code as long as a given condition is true. It is used to iterate over a block of code as long as a given condition is true.
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={obliviontwo} alt="img" className="will-change hover:animate-pulse" height="500" width="800" />
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
                   href='/Dynamicimport'
                   >💊 Next <svg
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
                     href='#Array'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Js Arrays</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#More'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >More</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Add'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Add</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Unshift'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Unshift</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Concat'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Concat</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Loops'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >JS Loops</a>
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

export default Staticimport
