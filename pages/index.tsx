import Link from 'next/link';
import React from 'react';

const index = () => {
  return (
//     <section className="flex relative bg-[#f5f5f5] items-center justify-center">
//       <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 lg:py-32 max-w-7xl md:px-12">
//         <div>
//           <div className="text-center">
//             <span className="w-auto"><span className="font-semibold text-[#4354ff] text-sm uppercase">Open Source</span></span>
//             <p className="mt-8 text-3xl font-extrabold tracking-tight text-black md:text-5xl">
//              Nextra Docs <br /> Template
//             </p>
//             <p className="max-w-xl mx-auto mt-4 text-base lg:text-xl text-slate-500">
//               Bridging the gap between designers and coders with early access and early feedback.
//             </p>
//           </div>
//         </div>
//         <div className="max-w-lg mx-auto mt-24">
//           <ul className="space-y-3" role="list">
//             <li>
//               <div className="relative flex items-start p-4 space-x-3 bg-white shadow group rounded-2xl">
//                 <div className="flex-shrink-0">
//                   <span className="justify-center inline-flex items-center">
//                     {/* Your SVG code here */}

//                     <svg fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
//     <g filter="url(#filter0_d_22_710)">
//       <path d="M9.375 39.5625C9.375 28.8845 9.375 23.5455 11.486 19.4817C13.2649 16.0571 16.0572 13.2649 19.4817 11.486C23.5456 9.37497 28.8846 9.37497 39.5625 9.37497H60.4375C71.1155 9.37497 76.4544 9.37497 80.5183 11.486C83.9428 13.2649 86.7351 16.0571 88.514 19.4817C90.625 23.5455 90.625 28.8845 90.625 39.5625V60.4375C90.625 71.1154 90.625 76.4544 88.514 80.5182C86.7351 83.9428 83.9428 86.7351 80.5183 88.514C76.4544 90.625 71.1155 90.625 60.4375 90.625H39.5625C28.8846 90.625 23.5456 90.625 19.4817 88.514C16.0572 86.7351 13.2649 83.9428 11.486 80.5182C9.375 76.4544 9.375 71.1154 9.375 60.4375V39.5625Z" fill="#060A15"></path>
//     </g>
//     <mask height="82" id="mask0_22_710" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="82" x="9" y="9">
//       <rect fill="white" height="81.25" width="81.25" rx="18.675" x="9.375" y="9.37497"></rect>
//     </mask>
//     <g mask="url(#mask0_22_710)">
//       <mask height="100" id="mask1_22_710" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="100" x="0" y="0">
//         <rect fill="#DE6F8E" height="100" width="100"></rect>
//       </mask>
//       <g mask="url(#mask1_22_710)">
//         <path d="M0 0H100V100H0V0Z" fill="#F7D9FF"></path>
//         <path d="M95.2554 50C98.2794 65.537 121.689 92.9614 131.96 101.095L-3.85824 104.119L-1.77273 -4.90097C12.652 -4.51863 42.6233 -3.42333 44.2648 -0.260721C52.0854 14.8071 66.3712 11.0531 74.2439 16.2148C82.1167 21.3764 92.2314 34.4629 95.2554 50Z" fill="#FFB16B"></path>
//         <path d="M91.0322 51.3556C97.9144 65.3285 120.073 89.7463 130.292 100.209L-1.77277 101.825V-1.87694C10.636 -1.80742 36.3816 -1.293 40.0938 0.208568C44.734 2.08552 41.5015 10.8968 57.5077 16.2148C73.514 21.5329 82.4295 33.8895 91.0322 51.3556Z" fill="#FF8786"></path>
//         <path d="M129.458 100.104H0.0520859V0H12.9822C13.4862 0.45186 15.8289 2.34619 21.1678 6.30866C27.8414 11.2617 31.2304 19.4473 35.61 24.4004C39.9895 29.3535 50.4692 29.7185 63.3993 33.8895C76.3295 38.0605 86.0271 46.6632 91.1887 58.0813C95.318 67.2159 118.422 89.9027 129.458 100.104Z" fill="#FF677D"></path>
//         <path d="M-0.156456 100.104V13.5558C3.77125 15.902 13.3785 22.3775 20.3858 29.5099C29.1449 38.4255 37.6955 37.6955 59.9582 47.6017C82.221 57.5078 79.562 58.8113 87.5912 72.3149C94.0145 83.1178 114.981 95.3424 124.661 100.104H-0.156456Z" fill="#FB25DF"></path>
//         <path d="M-0.156456 100.678V35.8186C4.41428 43.0483 18.3941 49.1658 24.1918 53.1283C31.439 58.0814 56.0479 58.2899 65.3284 62.4609C74.6089 66.6319 79.4056 79.7706 83.7851 86.3921C87.2888 91.6893 102.868 98.1231 110.219 100.678H-0.156456Z" fill="#BE29FF"></path>
//         <path d="M-0.156456 57.6642V100.313H81.1261C74.5047 100.313 72.367 87.9562 63.6079 79.927C54.0356 71.1524 38.4775 68.7174 24.0354 68.7174C14.1787 68.7174 5.92627 63.9555 -0.156456 57.6642Z" fill="#7937FF"></path>
//         <path d="M-0.156456 85.6622V99.9479C13.1734 100.695 36.6006 99.9479 36.6006 99.9479C33.368 97.706 33.8894 93.4307 20.2294 92.7008C9.30131 92.1168 2.08546 87.7651 -0.156456 85.6622Z" fill="#5D22FF"></path>
//       </g>
//     </g>
//     <defs>
//       <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="89.0312" id="filter0_d_22_710" width="89.0312" x="5.48438" y="7.04059">
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha" result="hardAlpha"></feColorMatrix>
//         <feOffset dy="1.55625"></feOffset>
//         <feGaussianBlur stdDeviation="1.94531"></feGaussianBlur>
//         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
//         <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_22_710"></feBlend>
//         <feBlend in2="effect1_dropShadow_22_710" mode="normal" result="shape" in="SourceGraphic"></feBlend>
//       </filter>
//     </defs>
//   </svg>


//                   </span>
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="text-lg font-medium text-gray-900">
//                     <a className="flex justify-between w-full" href="#_">
//                       <span className="absolute inset-0" aria-hidden="true"></span> SVG Gradients
//                       <span className="font-medium bg-gray-100 inline-flex items-center px-2.5 py-0.5 rounded-full text-gray-800 text-xs">AI</span>
//                     </a>
//                   </div>
//                   <p className="mt-3 text-gray-500">
//                     Quick access to ChatGPT from any website, it's free and open source!
//                   </p>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div className="relative flex items-start p-4 space-x-3 bg-white shadow group rounded-2xl">
//                 <div className="flex-shrink-0">
//                 <span className="justify-center inline-flex items-center">
//   <svg fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
//     <g filter="url(#filter0_d_22_710)">
//       <path d="M9.375 39.5625C9.375 28.8845 9.375 23.5455 11.486 19.4817C13.2649 16.0571 16.0572 13.2649 19.4817 11.486C23.5456 9.37497 28.8846 9.37497 39.5625 9.37497H60.4375C71.1155 9.37497 76.4544 9.37497 80.5183 11.486C83.9428 13.2649 86.7351 16.0571 88.514 19.4817C90.625 23.5455 90.625 28.8845 90.625 39.5625V60.4375C90.625 71.1154 90.625 76.4544 88.514 80.5182C86.7351 83.9428 83.9428 86.7351 80.5183 88.514C76.4544 90.625 71.1155 90.625 60.4375 90.625H39.5625C28.8846 90.625 23.5456 90.625 19.4817 88.514C16.0572 86.7351 13.2649 83.9428 11.486 80.5182C9.375 76.4544 9.375 71.1154 9.375 60.4375V39.5625Z" fill="#060A15"></path>
//     </g>
//     <mask height="82" id="mask0_22_710" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="82" x="9" y="9">
//       <rect fill="white" height="81.25" width="81.25" rx="18.675" x="9.375" y="9.37497"></rect>
//     </mask>
//     <g mask="url(#mask0_22_710)">
//       <mask height="100" id="mask1_22_710" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="100" x="0" y="0">
//         <rect fill="#DE6F8E" height="100" width="100"></rect>
//       </mask>
//       <g mask="url(#mask1_22_710)">
//         <path d="M0 0H100V100H0V0Z" fill="#F7D9FF"></path>
//         <path d="M95.2554 50C98.2794 65.537 121.689 92.9614 131.96 101.095L-3.85824 104.119L-1.77273 -4.90097C12.652 -4.51863 42.6233 -3.42333 44.2648 -0.260721C52.0854 14.8071 66.3712 11.0531 74.2439 16.2148C82.1167 21.3764 92.2314 34.4629 95.2554 50Z" fill="#FFB16B"></path>
//         <path d="M91.0322 51.3556C97.9144 65.3285 120.073 89.7463 130.292 100.209L-1.77277 101.825V-1.87694C10.636 -1.80742 36.3816 -1.293 40.0938 0.208568C44.734 2.08552 41.5015 10.8968 57.5077 16.2148C73.514 21.5329 82.4295 33.8895 91.0322 51.3556Z" fill="#FF8786"></path>
//         <path d="M129.458 100.104H0.0520859V0H12.9822C13.4862 0.45186 15.8289 2.34619 21.1678 6.30866C27.8414 11.2617 31.2304 19.4473 35.61 24.4004C39.9895 29.3535 50.4692 29.7185 63.3993 33.8895C76.3295 38.0605 86.0271 46.6632 91.1887 58.0813C95.318 67.2159 118.422 89.9027 129.458 100.104Z" fill="#FF677D"></path>
//         <path d="M-0.156456 100.104V13.5558C3.77125 15.902 13.3785 22.3775 20.3858 29.5099C29.1449 38.4255 37.6955 37.6955 59.9582 47.6017C82.221 57.5078 79.562 58.8113 87.5912 72.3149C94.0145 83.1178 114.981 95.3424 124.661 100.104H-0.156456Z" fill="#FB25DF"></path>
//         <path d="M-0.156456 100.678V35.8186C4.41428 43.0483 18.3941 49.1658 24.1918 53.1283C31.439 58.0814 56.0479 58.2899 65.3284 62.4609C74.6089 66.6319 79.4056 79.7706 83.7851 86.3921C87.2888 91.6893 102.868 98.1231 110.219 100.678H-0.156456Z" fill="#BE29FF"></path>
//         <path d="M-0.156456 57.6642V100.313H81.1261C74.5047 100.313 72.367 87.9562 63.6079 79.927C54.0356 71.1524 38.4775 68.7174 24.0354 68.7174C14.1787 68.7174 5.92627 63.9555 -0.156456 57.6642Z" fill="#7937FF"></path>
//         <path d="M-0.156456 85.6622V99.9479C13.1734 100.695 36.6006 99.9479 36.6006 99.9479C33.368 97.706 33.8894 93.4307 20.2294 92.7008C9.30131 92.1168 2.08546 87.7651 -0.156456 85.6622Z" fill="#5D22FF"></path>
//       </g>
//     </g>
//     <defs>
//       <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="89.0312" id="filter0_d_22_710" width="89.0312" x="5.48438" y="7.04059">
//         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha" result="hardAlpha"></feColorMatrix>
//         <feOffset dy="1.55625"></feOffset>
//         <feGaussianBlur stdDeviation="1.94531"></feGaussianBlur>
//         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
//         <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_22_710"></feBlend>
//         <feBlend in2="effect1_dropShadow_22_710" mode="normal" result="shape" in="SourceGraphic"></feBlend>
//       </filter>
//     </defs>
//   </svg>
// </span>

//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="text-lg font-medium text-gray-900">
//                     <a className="flex justify-between w-full" href="#_">
//                       <span className="absolute inset-0" aria-hidden="true"></span> Onda backgrounds
//                       <span className="font-medium bg-gray-100 inline-flex items-center px-2.5 py-0.5 rounded-full text-gray-800 text-xs">SVG</span>
//                     </a>
//                   </div>
//                   <p className="mt-3 text-gray-500">
//                     Deliver the best experience to your Visitors &amp; turn them into Customers. Build your Website now!
//                   </p>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>





<section className="bg-gradient-to-l from-gray-300 to-white h-screen ">

<div className=" px-5 py-12 flex h-screen  md:px-12 lg:px-16 max-w-7xl mx-auto gap-8">
  <div className="flex w-full mx-auto">
    <div className="relative inline-flex items-center m-auto align-middle">
      <div className="relative max-w-6xl p-10 overflow-hidden border-t-2 border-orange-500 bg-white rounded-3xl lg:p-20 shadow-2xl">
        <div className="relative max-w-lg">
          <div><p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
Nextra Docs Template
</p>
<p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
You can create stunning documentation using Nextra, but the page structure and configuration can become convoluted at times. This template can serve as a convenient starting point.
</p>
</div>
          <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
            <Link href="Docs/introduction" className="items-center justify-center w-full px-4 py-2 text-center text-gray-200 duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
             Go to Docs 
            </Link>
            <Link target='_blank' href="https://nextra.site/" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
              Learn more
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>











  
</div>
{/* <p className='text-center text-xl font-semibold text-gray-600'>Happy Coding!</p> */}

</section>





  );
};

export default index;
