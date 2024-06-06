import React from 'react'
import pictureinvented from '../../assets/imgs/lionessnew.jpeg'
import pictureinventedtwo from '../../assets/imgs/colombian.jpeg'

const Finalmodule = () => {
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
                 Performance
               </div>
             </div>
           <h1>WHY DO WE NEED PERFORMANCE TESTING FOR ECOMMERCE WEBSITE?</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={pictureinvented} alt="img" className="will-change animate-pulse" height="300" width="700"/>
               </div>
             </div>
             <p>Like one of the most important attributes of an ecommerce website, slow loading speed even leaves more damage e.g. ,<code> customers tell others about the bad experience or reach your competitors to shop instead, your web pages are underrated by Google and miss high ranks on search engine result pages</code>. But consequently, your sales will likely decrease as the download time increases.</p>
             <h2>
               <span className="subheading-anchor" id="SpeedTesting"></span>
               <a href="#SpeedTesting" className="anchor text-current no-underline no-outline">Speed Testing<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             First of all, speed is the initial factor in which every store owner should pay much attention. If you still wonder why after the above statistics, please put yourself on customer shoes and decide what you would do when facing a sluggish website the first time you reach it. 
             It's concluded! Slow page speed is such a foe of ecommerce that stills potential customers away from stores. Whenever you realize your website is running slow, don't delay to review and fix it as soon as possible.
             If your website was built on Magento, the experienced service team from BSS Commerce could give you a hand if Magento speed test and optimization are not your areas.   
             </p>
             <h2>
               <span className="subheading-anchor" id="LoadTesting"></span>
               <a href="#LoadTesting" className="anchor text-current no-underline no-outline">Load Testing<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             The purpose of load testing is to check how many users can work on your website at the same time. In other words, the test identifies the maximum operating capacity of your website, any breaking points, and the element degradation.   
             Thanks to load testing, you can check whether the website performs as expected under normal and anticipated peak load conditions as well. All system lags, page load issues can be easily detected in the testing environment. 
             Besides, passing functional tests does not mean that all the functions can perform the same under any stress of user load. This is another point that explains the importance of load testing. 
             </p>
             <h2>
               <span className="subheading-anchor" id="ScalabilityTesting"></span>
               <a href="#ScalabilityTesting" className="anchor text-current no-underline no-outline">SCALABILITY TESTING<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Scalability testing is checking how well your website handles the increasing surge of user load. This is one of the most critical conditions for a web application's success, but many newcomers don't think about some problems they may encounter someday. For example, the surge in the number of visitors or the expansion of the product range can negatively impact your website performance and slow down your page speed. 
             Thus, scalability testing is performed to determine how and when the website reacts with increasing user load. If you don't understand your website from this point of view, you cannot make sure it can handle an unusual amount of traffic when you offer flash sales, promotion campaigns, or peak seasons.
             </p>
             <h2>
               <span className="subheading-anchor" id="StressTesting"></span>
               <a href="#StressTesting" className="anchor text-current no-underline no-outline">STRESS TESTING <span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             More traffic brings more customers and more sales. However, could you imagine what will happen if your campaigns succeed far beyond your expectation? When this scenario happens out of the blue, it brings a surge of traffic, causing your website to slow down or even crash. 
             Stress testing comes to check what happens when your website reaches the extreme capacity. Also, it determines whether your website can recover without serious damages and the customer database is kept intact after the workload decreases. 
             Stress testing is necessary before important events such as Black Friday or other big promotion campaigns. This allows you to prepare for unexpected traffic spikes and saves you more time and resources to fix the bottlenecks. 
             </p>
             <h2>
               <span className="subheading-anchor" id="EnduranceTesting"></span>
               <a href="#EnduranceTesting" className="anchor text-current no-underline no-outline">ENDURANCE TESTING<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Endurance testing means testing your website with a heavy load over a significant period of time to check how it behaves under sustained use. In many cases, a website may perform exactly as expected when tested for 1 hour, but when it is tested for 2 hours, problems such as memory leaks cause the system to fail or behave randomly.
             The goal of endurance testing is to ensure that the throughput and response times after long periods of sustained activity are as good or better than at the beginning of the test.
             </p>
             <h2>
               <span className="subheading-anchor" id="VolumeTesting"></span>
               <a href="#VolumeTesting" className="anchor text-current no-underline no-outline">VOLUME TESTING<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Ultimately, volume testing is to review the systems response to different volumes <code>amounts</code> of the database, also known as flood testing. <code>Amount</code> can be the database size or the size of an interface file which is the subject of the test. 
             <h3>Why do we need to test this respect in ecommerce website performance testing?</h3> 
             Lets think about the first hours of Black Friday sales when the number of records is low and your system runs fast. But the database keeps expanding with every new order, so the system rejects processing new ones and fails to handle anticipated amounts of data.
             </p>
             <br></br>
           <h1>HOW TO KNOW IF YOUR WEBSITE PERFORMS WELL?</h1>
             <h2>
               <span className="subheading-anchor" id="HighVisuals"></span>
               <a href="#HighVisuals" className="anchor text-current no-underline no-outline">High-quality visuals<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             Online performance testing tools like Web Page <code>Test</code>, <code>LoadNinja</code>, <code>NeoLoad</code> or <a href="https://bsscommerce.com/blog/top-free-magento-2-page-speed-test-tools/">5+ Free Page Speed Testing Tools</a> are what you can use for these purposes. Those tools will finally return the result of pivotal metrics that give you the insights of performance on your website like page load time, request per second, peak response time, First Contentful Paint <code>FCP</code>, Time to First Byte <code>TTFB</code>, etc.
             <li>Simplify the language and funtionality when it can be possible </li>
              <li>if you are using frameworks and packages you must to optimaze all the application components</li>
              <li>When you are about to deploy you website choose the right service to do this a wonderful tool is <code>Vercel</code> or you can seek for more.</li>
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={pictureinventedtwo} alt="gif" className="will-change animate-pulse" height="500" width="800" />
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
                   href='/Designskills'
                   > Next Module <svg
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
                     href='#SpeedTesting'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Speed Testing</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#LoadTesting'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Load Testing</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#ScalabilityTesting'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Scalability Testing</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#StressTesting'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Stress Testing</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#EnduranceTesting'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Endurance Testing</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#VolumeTesting'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Volume Testing</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#HighVisuals'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >High Visual</a>
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


export default Finalmodule
