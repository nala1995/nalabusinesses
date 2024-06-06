

const spam = document.querySelector('.irvin1');
const delte = document.querySelector('.openn');
spam.addEventListener('click', ()=>{
delte.classList.remove('openn')
spam.addEventListener('click', ()=>{
  delte.classList.toggle('openn')
});
});

const spam2 = document.querySelector('.irvin');
const delte2 = document.querySelector('.closed');
spam2.addEventListener('click', ()=>{
delte2.classList.remove('closed')
spam2.addEventListener('click', ()=>{
  delte2.classList.toggle('closed')
});
});

const spam3 = document.querySelector('.irvin3');
const delte3 = document.querySelector('.closed3');
spam3.addEventListener('click', ()=>{
delte3.classList.remove('closed3')
spam3.addEventListener('click', ()=>{
  delte3.classList.toggle('closed3')
});
});

const spam4 = document.querySelector('.irvin4');
const delte4 = document.querySelector('.closed4');
spam4.addEventListener('click', ()=>{
delte4.classList.remove('closed4')
spam4.addEventListener('click', ()=>{
  delte4.classList.toggle('closed4')
});
});


//* Here we are goint to interact with the rotation button *//
  
  const rotate = document.querySelector('.ml-2');
const rotatefinal = document.querySelector('.irvin1')
rotatefinal.addEventListener('click', () => {
rotate.classList.toggle('rotate-90')
});

const rotate2 = document.querySelector('.type2');
const rotatefinal2 = document.querySelector('.irvin')
rotatefinal2.addEventListener('click', () => {
rotate2.classList.toggle('rotate-90')
});

const rotate3 = document.querySelector('.type3');
const rotatefinal3 = document.querySelector('.irvin3')
rotatefinal3.addEventListener('click', () => {
rotate3.classList.toggle('rotate-90')
});

const rotate4 = document.querySelector('.type4');
const rotatefinal4 = document.querySelector('.irvin4')
rotatefinal4.addEventListener('click', () => {
rotate4.classList.toggle('rotate-90')
});

//? here we controle the dark or light modes  /
const pancracio = document.querySelector('.lini');
const latam = document.querySelector('.nene');
pancracio.addEventListener('click',()=>{
  latam.classList.remove('HIDDENN');
  pancracio.addEventListener('click',()=>{
    latam.classList.toggle('HIDDENN');
  });
});

//! Menu burguer to handle with the states of the lateral-navbar  /

/* function animate (){  */
  const burguer = document.querySelector('.nextra-menu-icon'); 
  const bodys = document.querySelector('body');
  const navi = document.querySelector('.nextra-nav-container');
  const sidebar = document.querySelector('.nextra-sidebar-container');
  burguer.addEventListener('click',()=>{
    bodys.classList.toggle('overflow-hidden');
    bodys.classList.toggle('md:overflow-hidden');
    navi.classList.toggle('active');
    sidebar.classList.toggle('open');
    burguer.addEventListener('click',()=>{
      bodys.classList.remove('overflow-hidden');
      bodys.classList.remove('md:overflow-hidden');
      navi.classList.remove('active');
      sidebar.classList.remove('open');
      burguer.addEventListener('click',()=>{
        bodys.classList.toggle('overflow-hidden');
        bodys.classList.toggle('md:overflow-hidden');
        navi.classList.toggle('active');
        sidebar.classList.toggle('open');
      })
    })
  });
 /*  }
  document.querySelector('.nextra-menu-icon').onclick = function() {
    animate();
  }; */
  
//? functionality array simbol /

/* const Newrota1 = document.querySelector('.rota1');
const rota1 = document.querySelector('.denk1')
rota1.addEventListener('click', () => {
Newrota1.classList.toggle('rotate-90')
}); */
const Newrota2 = document.querySelector('.rota2');
const rota2 = document.querySelector('.denk2')
rota2.addEventListener('click', () => {
Newrota2.classList.toggle('rotate-90')
});
const Newrota3 = document.querySelector('.rota3');
const rota3 = document.querySelector('.denk3')
rota3.addEventListener('click', () => {
Newrota3.classList.toggle('rotate-90')
});
const Newrota4 = document.querySelector('.rota4');
const rota4 = document.querySelector('.denk4')
rota4.addEventListener('click', () => {
Newrota4.classList.toggle('rotate-90')
});
const Newrota5 = document.querySelector('.rota5');
const rota5 = document.querySelector('.denk5')
rota5.addEventListener('click', () => {
Newrota5.classList.toggle('rotate-90')
});

//* buttons and functionality in the burger menu   */

const hamburg2 = document.querySelector('.denk2');
const suprime2 = document.querySelector('.hd2');
hamburg2.addEventListener('click', ()=>{
suprime2.classList.toggle('openn')
hamburg2.addEventListener('click', ()=>{
  suprime2.classList.remove('openn')
  hamburg2.addEventListener('click', ()=>{
    suprime2.classList.toggle('openn')
  });
});
});

const hamburg3 = document.querySelector('.denk3');
const suprime3 = document.querySelector('.hd3');
hamburg3.addEventListener('click', ()=>{
suprime3.classList.toggle('closed')
hamburg3.addEventListener('click', ()=>{
  suprime3.classList.remove('closed')
  hamburg3.addEventListener('click', ()=>{
    suprime3.classList.toggle('closed')
  });
});
});

const hamburg4 = document.querySelector('.denk4');
const suprime4 = document.querySelector('.hd4');
hamburg4.addEventListener('click', ()=>{
suprime4.classList.toggle('closed4')
});

const hamburg5 = document.querySelector('.denk5');
const suprime5 = document.querySelector('.hd5');
hamburg5.addEventListener('click', ()=>{
suprime5.classList.toggle('closed4')
hamburg5.addEventListener('click', ()=>{
  suprime5.classList.remove('closed4')
  hamburg5.addEventListener('click', ()=>{
    suprime5.classList.toggle('closed4')
  });
});
});


//? Here we are going to place the yellow light active style in each box or button /

const boxy = document.querySelectorAll('li.active');
boxy.forEach((boxy) => {
boxy.addEventListener('click', () => {
  boxy.classList.toggle('active');
});
});

//! here we are going to add the box researcher funtionality and all /

/* when it isn't in the research
<ul class='absolute z-20 px-0 py-2.5 m-0 mt-2 top-full rounded-xl overflow-hidden overscroll-contain shadow-xl list-none'>
  <span class='block p-8 text-center text-gray-400 text-sm select-none'>No results found.</span>
</ul> */

/* when the research is in the box we display 
<div class='nextra-search-section mx-2.5 px-2.5 pb-1.5 mb-2 mt-6 first:mt-0 font-semibold uppercase text-xs text-gray-500 select-none dark:text-gray-300'>
Introduction
</div>
 <a class='block no-underline' href='/'>
  <li class='active'>
   <div class='font-semibold dark:text-white leading-5'><span class='highlight'>Introduction</span>
</div>
<div class='excerpt mt-1 text-gray-600 text-sm leading-[1.35rem] dark:text-gray-400'>
   <span class='highlight'>Introduction
    </span>
</div>
</li>
</a>
*/

const researched = [
  { title: 'Introduction', excerpt: 'Introduction', url: '/Introduction', link: '/Introduction#Main', paragraph: 'This Website is intended to be a guide for those who want to start their own ecommerce website or event a personal blog, also this website is meant to everyone who is learning about software-programming. In this website you can find my journey on build my own website and also you can find some tips and tricks that I have learned along the way. The tootls and technologies that I have used are mainly free and open source, so you can use them too. Having said that, I hope you enjoy this website and if you have any questions or suggestions, please feel free to contact me.' },
  { title: 'Ecommerce', excerpt: 'Ecommerce', url: '/Firstproject', link: '/Firstproject#Summary', paragraph: 'The ecommerce is one of the most common React web application a developer can be asked to build. Here is why knowing how to properly craft an ecommerce application from the ground up can be considered a crucial skill. Over the last few years, several libraries have been built to help developers reach this goal effortlessly. Specifically, Snipcart is the solution you are looking for. Not only does it allow you to set up an ecommerce in a few minutes, but it is also a secure, reliable, and advanced solution. Read this article instead, if you want to build a Next.js ecommerce.' },
  { title: 'Earn Market', excerpt: 'EarnMrket', url: '/Secondproject', link: '/Secondproject#Services', paragraph:'Earn Market is a brand and business that provides E-commerce & E-business services to companies or start-ups which are migrating their business to the digital world. We provide services.' },
  { title: 'Profile', excerpt: 'Profile', url: '/Thirdproject', link: '/Thirdproject#Profile', paragraph: 'The main object for this section is to show you all my professional background and the different sort of experiences I have had in the past, I hope you enjoy it. It is a plesure to tell you a little bit about myself you can click on here to find out more Proffesional in Foreign Trade & International Business at Colombian School of Industrial Careers University and Certified like FrontEnd Developer at Devf Mexico City Academy.' },
  { title: 'Aesthetics', excerpt: 'Aesthetics', url: '/Fourproject', link: '/Fourproject#Design', paragraph: 'Web design is an important factor when it comes to websites, and even more so for eCommerce websites. A successful eCommerce web design can help give customers a better experience and potentially lead to more sales. In this page, we will talk through a few ideas on how you can make eCommerce web design improvements on your website.' },
  { title: 'Ux', excerpt: 'UxDesign', url: '/Fiveproject', link: '/Fiveproject#DesignUX', paragraph: 'UX design is the process of creating products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function.' },
  { title: 'Performance', excerpt: 'Performance', url: '/Finalmodule', link: '/Finalmodule#SpeedTesting', paragraph: 'Performance is a key factor in the success of any website. It is important to make sure that your website is fast and responsive. This is especially true for eCommerce websites, as a slow website can lead to a poor user experience and lost sales. In this page, we will talk through a few ideas on how you can improve the performance of your eCommerce website.' },
  { title: 'Introduction to react', excerpt: 'React', url: '/Designskills', link: '/Designskills#Languages', paragraph: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.' },
  { title: 'JX language', excerpt: 'language', url: '/Firstdesign', link: '/Firstdesign#Syntax', paragraph: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins.' },
  { title: 'Rendering', excerpt: 'Rendering', url: '/Secondesign', link: '/Secondesign#Updates', paragraph: 'Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements. We call this a “root” DOM node because everything inside it will be managed by React DOM. Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like. To render a React element, first pass the DOM element to ReactDOM.createRoot, then pass the React element to root.render.'},
  { title: 'Components', excerpt: 'Components', url: '/Thirdesign', link: '/Thirdesign#Components', paragraph: 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.' },
  { title: 'State', excerpt: 'State', url: '/Fourdesign', link: '/Fourdesign#State', paragraph: 'Other thing to take in consideration, In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.' },
  { title: 'Events', excerpt: 'Events', url: '/Fivedesign', link: '/Fivedesign#Events', paragraph: 'When you are handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences like, React events are named using camelCase, rather than lowercase, and with JSX you pass a function as the event handler, rather than a string. Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, take that in consideration. When using React, you generally donot need to call addEventListener to add listeners to a dOM element after it is created. Instead just provide a listener when the element is initially rendered I want to remaind you that you use onclick in remplace of event.' },
  { title: 'Starting', excerpt: 'Starting', url: '/Performancepatterns', link: '/Performancepatterns#Starting', paragraph: 'The JavaScript framework is used in various fields from the web to servers, and here is a quick list of the significant areas it is used on for instance to build Web Applications: As JavaScript is used for adding interactivity and automation to websites. So, if you want your web application to be anything more than just a static page of contents, you will probably need to do some JavaScript Also to build the Back-end Web Development: JavaScript has traditionally been used for developing the front-end parts of a web application. However, with the introduction of NodeJS, a prevalent back-end JavaScript framework, things have changed. And now, JavaScript is used for developing the back-end structure also.' },
  { title: 'JS Topics', excerpt: 'Topics', url: '/Staticimport', link: '/Staticimport#Array', paragraph: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins.' }, 
  { title: 'JS Arrays', excerpt: 'Arrays', url: '/Dynamicimport', link: '/Dynamicimport#While', paragraph: 'In this article, we learned what a JavaScript loop is and looked at some examples. It is important to understand that there are many other types of loops, including the while loop, which is best used when you dont know the number of iterations Otherwise always use the for loop when you do know the number of iterations.' },
  { title: 'Web performance', excerpt: 'Objects', url: '/Renderingintro', link: '/Renderingintro#Abstract', paragraph: 'To summarize, many features impact performance including latency, application size, the number of DOM nodes, the number of resource requests made, JavaScript performance, CPU load, and more. It is important to minimize the loading and response times, and add additional features to conceal latency by making the experience as available and interactive as possible, as soon as possible, while asynchronously loading in the longer tail parts of the experience.' },
  { title: 'Rendering', excerpt: 'Rendering', url: '/Renderingclient', link: '/Renderingclient#Rendering', paragraph: 'To effectively understand web performance, the issues behind it, and the major topic areas we mentioned above, you really should understand some specifics about how browsers work.' },
  { title: 'Recomendations', excerpt: 'Recomendations', url: '/Renderingstatic', link: '/Renderingstatic#Reasons', paragraph: 'There are many reasons why your website should perform as well as possible. Below is a quick review of best practices, tools, APIs with links to provide more information about each topic.' },
]

const formulario = document.querySelector('.formulario');
const button = document.querySelector('.btn');
const result = document.querySelector('.Result');

const filtrar = () => {
  result.innerHTML = '';
  const text = formulario.value.toLowerCase();
  for (let research of researched){
    let title = research.title.toLowerCase();
    if(title.indexOf(text) !== -1){
        result.innerHTML += `
<div class='nextra-search-section mx-2.5 px-2.5 pb-1.5 mb-2 mt-6 first:mt-0 font-semibold uppercase text-xs text-gray-500 select-none dark:text-gray-300'>${research.title} </div>
 <a class='block no-underline' href='${research.url}'>
  <li class='active:hover'>
   <div class='font-semibold dark:text-white leading-5'>
   <span class='highlight'>${research.excerpt}</span>
   </div>
   <div class='excerpt mt-1 text-gray-600 text-sm leading-[1.35rem] dark:text-gray-400'>
   <span class='highlight'>${research.excerpt}</span>
   </div>
  </li>
 </a>
  <a class='block no-underline' href='${research.link}'>
   <li class='active:hover'>
    <div class='font-semibold dark:text-white leading-5'>
      <span class='highlight'>${research.title}</span>
    </div>
      <div class='excerpt mt-1 text-gray-600 text-sm leading-[1.35rem] dark:text-gray-400'>${research.paragraph}
      </div>
   </li>
  </a>
         `
    }
  }

   if(result.innerHTML === ''){
    result.innerHTML += `
    <span class='block p-5 text-center text-gray-400 text-sm select-none'>No results found</span>
    `
  } 
}

button.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);
button.addEventListener('click', () => {
  button.classList.toggle('focus-visible');
  result.classList.toggle('HIDDENN');
});

window.addEventListener('click', function (e) {
  if (e.target !== formulario && e.target !== button) {
    result.classList.add('HIDDENN');
  }
});


//* part of mini version */
const researched1 = [
  { title: 'Introduction', excerpt: 'Introduction', url: '/Introduction', link: '/Introduction#Main', paragraph: 'This Website is intended to be a guide for those who want to start their own ecommerce website or event a personal blog, also this website is meant to everyone who is learning about software-programming. In this website you can find my journey on build my own website and also you can find some tips and tricks that I have learned along the way. The tootls and technologies that I have used are mainly free and open source, so you can use them too. Having said that, I hope you enjoy this website and if you have any questions or suggestions, please feel free to contact me.' },
  { title: 'Ecommerce', excerpt: 'Ecommerce', url: '/Firstproject', link: '/Firstproject#Summary', paragraph: 'The ecommerce is one of the most common React web application a developer can be asked to build. Here is why knowing how to properly craft an ecommerce application from the ground up can be considered a crucial skill. Over the last few years, several libraries have been built to help developers reach this goal effortlessly. Specifically, Snipcart is the solution you are looking for. Not only does it allow you to set up an ecommerce in a few minutes, but it is also a secure, reliable, and advanced solution. Read this article instead, if you want to build a Next.js ecommerce.' },
  { title: 'Earn Market', excerpt: 'EarnMrket', url: '/Secondproject', link: '/Secondproject#Services', paragraph:'Earn Market is a brand and business that provides E-commerce & E-business services to companies or start-ups which are migrating their business to the digital world. We provide services.' },
  { title: 'Profile', excerpt: 'Profile', url: '/Thirdproject', link: '/Thirdproject#Profile', paragraph: 'The main object for this section is to show you all my professional background and the different sort of experiences I have had in the past, I hope you enjoy it. It is a plesure to tell you a little bit about myself you can click on here to find out more Proffesional in Foreign Trade & International Business at Colombian School of Industrial Careers University and Certified like FrontEnd Developer at Devf Mexico City Academy.' },
  { title: 'Aesthetics', excerpt: 'Aesthetics', url: '/Fourproject', link: '/Fourproject#Design', paragraph: 'Web design is an important factor when it comes to websites, and even more so for eCommerce websites. A successful eCommerce web design can help give customers a better experience and potentially lead to more sales. In this page, we will talk through a few ideas on how you can make eCommerce web design improvements on your website.' },
  { title: 'Ux', excerpt: 'UxDesign', url: '/Fiveproject', link: '/Fiveproject#DesignUX', paragraph: 'UX design is the process of creating products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function.' },
  { title: 'Performance', excerpt: 'Performance', url: '/Finalmodule', link: '/Finalmodule#SpeedTesting', paragraph: 'Performance is a key factor in the success of any website. It is important to make sure that your website is fast and responsive. This is especially true for eCommerce websites, as a slow website can lead to a poor user experience and lost sales. In this page, we will talk through a few ideas on how you can improve the performance of your eCommerce website.' },
  { title: 'Introduction to react', excerpt: 'React', url: '/Designskills', link: '/Designskills#Languages', paragraph: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.' },
  { title: 'JX language', excerpt: 'language', url: '/Firstdesign', link: '/Firstdesign#Syntax', paragraph: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins.' },
  { title: 'Rendering', excerpt: 'Rendering', url: '/Secondesign', link: '/Secondesign#Updates', paragraph: 'Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements. We call this a “root” DOM node because everything inside it will be managed by React DOM. Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like. To render a React element, first pass the DOM element to ReactDOM.createRoot, then pass the React element to root.render.'},
  { title: 'Components', excerpt: 'Components', url: '/Thirdesign', link: '/Thirdesign#Components', paragraph: 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.' },
  { title: 'State', excerpt: 'State', url: '/Fourdesign', link: '/Fourdesign#State', paragraph: 'Other thing to take in consideration, In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time. You can use stateless components inside stateful components, and vice versa.' },
  { title: 'Events', excerpt: 'Events', url: '/Fivedesign', link: '/Fivedesign#Events', paragraph: 'When you are handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences like, React events are named using camelCase, rather than lowercase, and with JSX you pass a function as the event handler, rather than a string. Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, take that in consideration. When using React, you generally donot need to call addEventListener to add listeners to a dOM element after it is created. Instead just provide a listener when the element is initially rendered I want to remaind you that you use onclick in remplace of event.' },
  { title: 'Starting', excerpt: 'Starting', url: '/Performancepatterns', link: '/Performancepatterns#Starting', paragraph: 'The JavaScript framework is used in various fields from the web to servers, and here is a quick list of the significant areas it is used on for instance to build Web Applications: As JavaScript is used for adding interactivity and automation to websites. So, if you want your web application to be anything more than just a static page of contents, you will probably need to do some JavaScript Also to build the Back-end Web Development: JavaScript has traditionally been used for developing the front-end parts of a web application. However, with the introduction of NodeJS, a prevalent back-end JavaScript framework, things have changed. And now, JavaScript is used for developing the back-end structure also.' },
  { title: 'JS Topics', excerpt: 'Topics', url: '/Staticimport', link: '/Staticimport#Array', paragraph: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins.' }, 
  { title: 'JS Arrays', excerpt: 'Arrays', url: '/Dynamicimport', link: '/Dynamicimport#While', paragraph: 'In this article, we learned what a JavaScript loop is and looked at some examples. It is important to understand that there are many other types of loops, including the while loop, which is best used when you dont know the number of iterations Otherwise always use the for loop when you do know the number of iterations.' },
  { title: 'Web performance', excerpt: 'Objects', url: '/Renderingintro', link: '/Renderingintro#Abstract', paragraph: 'To summarize, many features impact performance including latency, application size, the number of DOM nodes, the number of resource requests made, JavaScript performance, CPU load, and more. It is important to minimize the loading and response times, and add additional features to conceal latency by making the experience as available and interactive as possible, as soon as possible, while asynchronously loading in the longer tail parts of the experience.' },
  { title: 'Rendering', excerpt: 'Rendering', url: '/Renderingclient', link: '/Renderingclient#Rendering', paragraph: 'To effectively understand web performance, the issues behind it, and the major topic areas we mentioned above, you really should understand some specifics about how browsers work.' },
  { title: 'Recomendations', excerpt: 'Recomendations', url: '/Renderingstatic', link: '/Renderingstatic#Reasons', paragraph: 'There are many reasons why your website should perform as well as possible. Below is a quick review of best practices, tools, APIs with links to provide more information about each topic.' },
]

const formulario1 = document.querySelector('.formulario1');
const button1 = document.querySelector('.btn1');
const result1 = document.querySelector('.Result1');

const filtrar1 = () => {
  result1.innerHTML = '';
  const text1 = formulario1.value.toLowerCase();
  for (let research1 of researched1){
    let title1 = research1.title.toLowerCase();
    if(title1.indexOf(text1) !== -1){
        result1.innerHTML += `
<div class='nextra-search-section mx-2.5 px-2.5 pb-1.5 mb-2 mt-6 first:mt-0 font-semibold uppercase text-xs text-gray-500 select-none dark:text-gray-300'>${research1.title} </div>
 <a class='block no-underline' href='${research1.url}'>
  <li class='active:hover'>
   <div class='font-semibold dark:text-white leading-5'>
   <span class='highlight'>${research1.excerpt}</span>
   </div>
   <div class='excerpt mt-1 text-gray-600 text-sm leading-[1.35rem] dark:text-gray-400'>
   <span class='highlight'>${research1.excerpt}</span>
   </div>
  </li>
 </a>
  <a class='block no-underline' href='${research1.link}'>
   <li class='active:hover'>
    <div class='font-semibold dark:text-white leading-5'>
      <span class='highlight'>${research1.title}</span>
    </div>
      <div class='excerpt mt-1 text-gray-600 text-sm leading-[1.35rem] dark:text-gray-400'>${research1.paragraph}
      </div>
   </li>
  </a>
         `
    }
  }

   if(result1.innerHTML === ''){
    result1.innerHTML += `
    <span class='block p-5 text-center text-gray-400 text-sm select-none'>No results found</span>
    `
  } 
}

button1.addEventListener('click', filtrar1);
formulario1.addEventListener('keyup', filtrar1);
button1.addEventListener('click', () => {
  button1.classList.toggle('focus-visible');
  result1.classList.toggle('HIDDENN');
});

window.addEventListener('click', function (e) {
  if (e.target !== formulario1 && e.target !== button1) {
    result1.classList.add('HIDDENN');
  }
});

