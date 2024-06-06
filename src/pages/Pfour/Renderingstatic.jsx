import React from 'react'
import finalimg from '../../assets/imgs/imagenrepo10.webp'
import finalphoto from '../../assets/imgs/renderingtwo.jpg'

const Renderingstatic = () => {
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
                 Performance ....
               </div>
             </div>
           <h1>Web performance resources</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={finalimg} alt="img" className="will-change hover:animate-pulse" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Reasons"></span>
               <a href="#Reasons" className="anchor text-current no-underline no-outline">Reasons<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             There are many reasons why your website should perform as well as possible. Below is a quick review of best practices, tools, <code>APIs</code> with links to provide more information about each topic.
             <h2>
               <span className="subheading-anchor" id="Practices"></span>
               <a href="#Practices" className="anchor text-current no-underline no-outline">Best practices<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <li>Start with learning the critical rendering path of the browser. Knowing this will help you understand how to improve the performance of the site.</li>
             The Critical Rendering Path is the sequence of steps the browser goes through to convert the <code>HTML</code>, <code>CSS</code>, and <code>JavaScript</code> into pixels on the screen. Optimizing the critical <code>render</code> path improves render performance. The critical rendering path includes the <code>Document Object Model DOM</code>, <code>CSS Object Model CSSOM</code>, <code>render tree</code> and <code>layout</code>.
             The document object model is created as the HTML is <code>parsed</code>. The HTML may request JavaScript, which may, in turn, alter the DOM. The HTML includes or makes requests for styles, which in turn builds the <code>CSS object model</code>. The browser engine combines the two to create the <code>Render Tree</code>. <code>Layout</code> determines the size and location of everything on the page. Once layout is determined, pixels are painted to the screen.
             Optimizing the critical rendering path improves the time to first render. Understanding and optimizing the critical rendering path is important to ensure <code>reflows</code> and repaints can happen at 60 frames per second, to ensure performant user interactions, and to avoid <code>jank</code>.
             <li>Using resource hints such as <code>rel=preconnect</code>, <code>rel=dns-prefetch</code>, <code>rel=prefetch</code>, <code>rel=preload</code>.</li>
             <li>Keep the size of JavaScript to a minimum. Only use as much JavaScript as needed for the current page.</li>
             <li>CSS performance factors</li>
             <li>Use <code>HTTP/2</code> on your server or <code>CDN</code>.</li>
             <li>Use a <code>CDN</code> for resources which can reduce load times significantly.</li>
             <li>Compress your resources using <code>gzip</code>, <code>Brotli</code>, and <code>Zopfli</code>.</li>
             <li>Image optimization use <code>CSS animation</code>, or <code>SVG</code> if possible.</li>
             <li>Lazy loading parts of your application outside the viewport. If you do, have a backup plan for <code>SEO</code> e.g., render full page for <code>bot traffic</code>; for example, by using the loading attribute on the <code>img element</code> </li>
             <li>It is also crucial to realize what is really important to your users. It might not be absolute timing, but user perception.</li>
             <h2><span className="subheading-anchor" id="Wins"></span>
             <a href="#Wins" className="anchor text-current no-underline no-outline"> Quick Wins <span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <h3>CSS</h3>
             Web performance is all about user experience and perceived performance. As we learned in the critical rendering path document, linking <code>CSS</code> with a traditional <code>link tag</code> with <code>rel="stylesheet"</code> is synchronous and <code>blocks rendering</code>. Optimize the rendering of your page by removing <code>blocking CSS</code>.
             To load CSS asynchronously one can set the media type to print and then change to all once loaded. The following <code>snippet</code> includes an <code>onload</code> attribute, requiring JavaScript, so it is important to include a noscript tag with a traditional <code>fallback</code>.
             The downside with this approach is the flash of unstyled text <code>FOUT.</code> The simplest way to address this is by inlining CSS that is required for any content that is rendered above the fold, or what you see in the browser viewport before scrolling. These styles will improve perceived performance as the CSS does not require a file request.
             <h3>JavaScript</h3>
             Avoid JavaScript blocking by using the <code>async</code> or defer attributes, or link <code>JavaScript assets</code> after the page's <code>DOM elements</code>. JavaScript only block rendering for elements that appear after the script tag in the <code>DOM tree</code>.
             <h3>Web Fonts</h3>
             <code>EOT</code> and <code>TTF</code> formats are not compressed by default. Apply compression such as <code>GZIP</code> or <code>Brotli</code> for these file types. Use <code>WOFF</code> and <code>WOFF2</code>. These formats have compression built in.
             Within <code>@font-face</code> use <code>font-display: "swap"</code>. By using <code>font display swap</code> the browser will not block rendering and will use the <code>backup system fonts</code> that are defined. Optimize font weight to match the web font as closely as possible.
             <h3>Icon web fonts</h3>
             If possible avoid icon web fonts and use compressed <code>SVGs</code>. To further optimize inline your SVG data within HTML markup to avoid <code>HTTP requests</code>.
             </p>
             <br></br> 
             <h2><span className="subheading-anchor" id="Tools"></span>
             <a href="#Tools" className="anchor text-current no-underline no-outline"> Tools <span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             <h3>CSS</h3>
             <li>Learn how to use Dev tools in each browser</li>
             <li>PageSpeed Insights can analyze your page and give some general hints to improve performance.</li> 
             <li>Lighthouse can give you a detailed breakdown of many aspects of your site including performance, SEO and accessibility.</li>
             <li>Test your page's speed using <code>WebPageTest.org</code>, where you can use different real device types and locations.</li>
             <li>Try the <code>Chrome User Experience</code> Report which quantifies real user metrics.</li> 
             <li>Use the <code>Chrome DevTools</code> to analyze the performance of your site & Define a performance budget..</li>
             <h3><code>APIs</code></h3>
             <li>Gather user metrics using the <code>boomerang</code> library.</li>
             <li>Or directly gather with <code>window.performance.timing</code></li>
             <h3>Things not to do bad practices"</h3>
             <li>Download everything</li>
             <li>Use uncompressed media files</li>
              </p>            
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={finalphoto} alt="img" className="will-change hover:animate-pulse" height="500" width="800" />
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
                   title='Home'
                   href='/'
                   >📭 Home <svg
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
                     href='#Reasons'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     > Reasons </a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Practices'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Practices</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Wins'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Wins</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Tools'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Tools</a>
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

export default Renderingstatic
