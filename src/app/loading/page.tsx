// import Navbar from "../components/nav"
// function loading() {
//     return (
//         <>
//             <Navbar />  
//             <div className="grid bg-white/50 items-center justify-items-center h-screen">
//                 <div className="flex flex-col items-center gap-5"><span className="px-10 loading loading-ring loading-lg">

//                 </span>
//                 <div className="w-full text-center">Data transfering</div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default loading
"use client"

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
                <h2>NextJs Carousel - GeeksforGeeks</h2>
                <Carousel>
                    <div id="1" className="bg-white rounded-[30px]  snap-center w-[25rem]  sm:w-[48rem] px-6 py-10 gap-5 h-[15rem] shadow-xl flex  items-center justify-items-center">
                        <div className="overflow-hidden rounded-[20px] h-48"><img className="object-cover h-full" src="https://www.choomcham.com/assets/images/0374f75c.png" alt="" /></div>
                        <div className="grid ">
                            <div className="text-xl font-bold">title</div>
                            <div>laksdfajs</div>
                            <div className="flex flex-end"><button className="bg-[#17A78ABA] px-3 py-1 rounded-md hover:bg-[#17a78ae5] ">ซื้อคอร์ส</button></div>
                        </div>
                    </div>
                    <div id="2" className="bg-white rounded-[30px]  snap-center w-[25rem]  sm:w-[48rem] px-6 py-10 gap-5 h-[15rem] shadow-xl flex  items-center justify-items-center">
                        <div className="overflow-hidden rounded-[20px] h-48"><img className="object-cover h-full" src="https://www.choomcham.com/assets/images/0374f75c.png" alt="" /></div>
                        <div className="grid ">
                            <div className="text-xl font-bold">title</div>
                            <div>laksdfajs</div>
                            <div className="flex flex-end"><button className="bg-[#17A78ABA] px-3 py-1 rounded-md hover:bg-[#17a78ae5] ">ซื้อคอร์ส</button></div>
                        </div>
                    </div>
                    <div id="3" className="bg-white rounded-[30px]  snap-center w-[25rem]  sm:w-[48rem] px-6 py-10 gap-5 h-[15rem] shadow-xl flex  items-center justify-items-center">
                        <div className="overflow-hidden rounded-[20px] h-48"><img className="object-cover h-full" src="https://www.choomcham.com/assets/images/0374f75c.png" alt="" /></div>
                        <div className="grid ">
                            <div className="text-xl font-bold">title</div>
                            <div>laksdfajs</div>
                            <div className="flex flex-end"><button className="bg-[#17A78ABA] px-3 py-1 rounded-md hover:bg-[#17a78ae5] ">ซื้อคอร์ส</button></div>
                        </div>
                    </div>
                   
                </Carousel>
            </div>
        );
    }
};
