"use client"
import Navbar from "../components/nav";
import Footer from '../components/footer';
import Head from "next/head";
import { Button, Image } from "@nextui-org/react";
import { useState } from "react";
import Script from 'next/script';
import NavigationBar from "../components/navbar";
import { motion } from "framer-motion";





const bussiness = [
    { id: '0', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '1', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '2', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '3', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '4', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '5', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '6', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
    { id: '7', title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, dolor.' },
]



function Service() {


    return <>
        {/* bg-[url('https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb')]  */}
        <div className=" fixed z-20">
            <NavigationBar current="0" />
        </div>

        <section className="bg-gradient-to-l from-white via-white via-20% to-[#F2E6D7] sm:py-28 pt-20 relative">

            <div className="flex sm:flex-row gap-5 flex-col sm:justify-around items-center text-white">
                <div className="relative">
                    <Image src="/images/kruEve_image4.jpg" className=" sm:w-[450px] w-[30vw]" alt="Description" width={1780} height={1280} />

                    <div className="absolute top-0 z-10 opacity-100">
                        <Image src="/images/sulmanservices/icon 1.png" className="xl:w-[300px] w-[50px] " alt="Description" width={500} height={500} />
                    </div>
                </div>
                <div className="sm:w-[35%] sm:h-[80%] p-10 rounded-2xl shadow-2xl relative bg-[--pink]">

                    <p className="text-[--yellow] pl-5 xl:pb-6 font-bold xl:text-5xl text-lg">ชุ่มฉ่ำ Mindful Circle</p>
                    <p className=" pl-5 font-normal xl:text-2xl text-base text-wrap">
                        สังคมกัลยาณมิตรธุรกิจ <br className="xl:hidden" />
                        ไปด้วยกัน ไปได้ไกลฉ่ำ
                    </p>
                    <div className="text-center text-black xl:pt-2 underline underline-offset-8  xl:mt-5 xl:mb-5 ">
                        <p className="xl:leading-[50px] text-[#17A78A]  font-bold xl:text-xl text-sm">ปัญหาของตัวจริงไม่มีที่ยืน</p>
                    </div>
                    <div className=" pl-5 xl:text-xl text-sm mb-5 mt-5" >
                        <div className="flex gap-2 mb-3 mt-3">
                            <span className="text-black font-bold">01</span>
                            <span className="">ไม่มั่นใจในคอนเทนต์ของตัวเอง</span>
                        </div>
                        <div className="flex gap-2 mb-3 mt-3">
                            <span className="text-black font-bold">02</span>
                            <span className="">เครียดง่ายเวลาเจอปัญหายอดตก</span>
                        </div>
                        <div className="flex gap-2 mb-3 mt-3">
                            <span className="text-black font-bold">03</span>
                            <span className="">ไม่มีเพื่อนคุณภาพ อยากหา Connection
                                <br />เพิ่มเติมเพื่อต่อยอด</span>
                        </div>
                        <div className="flex gap-2 mb-3 mt-3">
                            <span className="text-black font-bold">03</span>
                            <span className="">ไม่มีไอเดีย รู้สึกตันๆกับตัวเอง</span>
                        </div>
                    </div>
                    <Button className=" bg-[--yellow] btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-xl xl:w-[200px] w-[120px] xl:text-xl text-xs " ><p className="text-black">สอบถามเพิ่มเติม</p></Button>
                    <div className=" absolute -bottom-5 sm:-right-24 -right-5">
                        <Image src="/images/sticker19.png" className="xl:w-[20vw] w-[30vw]  " alt="Description" width={1780} height={1280} />
                    </div>
                </div>
            </div>


            <div className="block md:hidden w-full h-10"></div>

        </section >

        <section className="p-8 grid gap-3">
            <div className="flex justify-around py-10 h-auto w-[100%] bg-[--sky-blue] glass border-5 border-black  rounded-3xl ">

                {/* <button className="btn bg-black w-[200px] h-10 text-white text-center text-lg rounded-3xl"><p>สำหรับงานโปรดักชั่น</p></button> */}
                {/* <button className="btn bg-black w-[200px] h-10 text-white text-center text-lg rounded-3xl"><p>คอร์สออนไลน์ </p></button> */}
                <div className="grid gap-4 p-4">
                    <p className="xl:text-3xl text-lg font-bold bg-black sm:w-[30vw] w-[50vw] text-white text-center rounded-full p-2">
                        {/* <button className="btn bg-black w-[200px] h-10 text-white text-center text-lg rounded-3xl"><p>หลักสูตรเจ้าของธุรกิจ</p></button> */}
                        ชุ่มฉ่ำ Circle คือ
                    </p>
                    <span className="text-[#070814] xl:text-2xl text-base">
                        กิจกรรม Mini Workshop เจอตัวประจำเดือน <br className="xl:hidden" /> ให้นักธุรกิจตัวจริงมาเจอกัน<br className="xl:hidden" />
                        เพื่อฝึกสติให้ชุ่มฉ่ำจะได้สร้างแบรนด์สำเร็จอย่างมีความสุข <br />
                        ช่วยเหลือแบ่งปันเพื่อนธุรกิจให้สร้างแบรนด์ส่งต่อคุณค่าได้เพิ่มขึ้น
                    </span>
                </div>
            </div>

            <div className="w-[75vw] flex justify-around h-auto py-10 bg-[--dark-blue] glass rounded-2xl border-5 border-black  relative">
                <div className="p-8 grid gap-3">
                    <span className="xl:text-2xl text-base">
                        ชุ่มฉ่ำอยากให้คุณสร้างแบรนด์ได้สำเร็จอย่างยั่งยืน
                        ระหว่างทางจึงสำคัญไม่แพ้การตั้งเป้าหมาย<br className="lg:hidden" />
                        การสร้างแบรนด์ให้สำเร็จเป็นการเดินทางไกล
                        เพื่อส่งต่อคุณค่าในระยะยาว
                        มีเพื่อนที่ดีจะทำให้คุณไม่หลงทาง
                    </span>
                </div>
                <div className="absolute bottom-0 right-0 ">
                    <Image src="/icon.svg" className="xl:w-[10vw] w-[30vw] rounded-xl " alt="Description" width={1780} height={1280} />
                </div>
            </div>


        </section >

        <section className="p-8 bg-[--dark-blue] ">


            <div className="flex sm:flex-row flex-col items-center gap-10">

                <div className="">
                    <Image src="/images/kruEve_image3.jpg" className="xl:w-[20vw]  rounded-full w-[200px] " alt="Description" width={1780} height={1280} />
                </div>

                <div className="xl:w-[95vw] w-[80vw] bg-white border-2 border-black rounded-2xl shadow-lg xl:z-0 z-10 relative overflow-hidden">
                   
                    <div className="sm:text-2xl p-10">
                        <div>
                            <p className="font-bold text-3xl text-[--green]">รายละเอียด</p>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">1</p>
                            <span> กิจกรรม Workshop Mindfulness & Branding</span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">2</p>
                            <span >ตั้งวงพูดคุย สะท้อน ให้เพื่อนช่วยแชร์ไอเดีย คอมเมนต์ให้แบรนด์
                                คุณส่งต่อคุณค่าได้ผลลัพธ์ชัดเจนขึ้น
                            </span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">3</p>
                            <p>ฝึก Mindfulness สติกับการทำธุรกิจ</p>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">4</p>
                            <span>กิจกรรมระยะเวลา 2-3 ชม. สอบถามตารางการจัดได้ที่ Admin
                                น้องฉ่ำใน LINE : @choomchambranding </span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">5</p>
                            <p>วันเสาร์ เวลา 14.00-17.00 น.</p>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">6</p>
                            <span>สถานที่ :  ชุ่มฉ่ำ Branding รังสิต คลองสาม</span>
                        </div>

                        <div className="bg-[--pink]  rounded-full w-10 h-10  sm:-right-10 sm:p-20 p-72 absolute -z-1"></div>
                        <div className="bg-[--green] rounded-full w-10 h-10 sm:-top-5 sm:-right-10 sm:p-20 p-40 absolute -z-1"></div>
                        <div className="bg-[--yellow] right-20 rounded-full sm:-left-10 sm:p-20 w-10 h-10 p-56 absolute -z-1"></div>
                    </div>
                </div>



            </div>




        </section>

        <section className="bg-slate-200">
            <div className="relative xl:bg-cover xl:bg-center xl:flex xl:justify-around xl:pt-20 xl:pb-10 " >


                <div className="xl:w-[25vw] xl:h-[250px] shadow-xl xl:shadow-none m-2 bg-slate-100 glass rounded-2xl ">
                    <div className="text-xl text-balance text-start pl-10 p-2 xl:pt-10">
                        <p className="font-bold text-2xl text-[--green]">เหมาะกับใครบ้าง? </p>
                        <a>- เจ้าของธุรกิจที่เพิ่งเริ่ม</a><br />
                        <a>- เจ้าของธุรกิจที่ต้องการหา Connection</a><br />
                        <a>- เจ้าของธุรกิจที่สำเร็จแล้วอยากแบ่งปัน</a>
                    </div>

                </div>
                <div className="flex justify-center pt-5 " >
                    <Image src="/images/sulmanservices/Rectangle 48.svg" className="sm:w-[20vw] w-[40vw] block md:hidden" alt="Description" width={1780} height={1280} />
                </div>

                <div className="absolute hidden md:block top-[20.5%] left-[43%] ">
                    <Image src="/images/sulmanservices/Rectangle 48.svg" className="w-[250px] " alt="Description" width={1780} height={1280} />
                </div>

                <div className="xl:w-[25vw] xl:h-[250px] shadow-xl xl:shadow-none m-2 bg-slate-100 rounded-2xl ">
                    <div className="text-xl  text-balance text-start gap-3 pl-10 p-2 xl:pt-10">
                        <p className="font-bold text-2xl  text-[--yellow]">คุณสมบัติผู้เข้าร่วม</p>
                        <div className="flex gap-3" >
                            <p className="font-bold">-</p>
                            <span>ธุรกิจของคุณไม่ขัดกับศีลธรรม</span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">-</p>
                            <span>รักการเรียนรู้และการพัฒนาตัวเอง </span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">-</p>
                            <span>พร้อมแบ่งปันสิ่งดีๆให้เพื่อนฉ่ำ</span>
                        </div>
                        <div className="flex gap-3" >
                            <p className="font-bold">-</p>
                            <span>เชื่อว่าสติสำคัญในการพัฒนาชีวิต</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <section>
            <div className="bg-gradient-to-tr from-[#F2C762] to-red-400 flex justify-around ">
                <h1 className="font-bold text-white xl:text-3xl p-2"> ค่าเข้าร่วม สอบถามราคาอัพเดทกับ <br className="block md:hidden" /> Admin น้องฉ่ำใน LINE : @choomchambranding </h1>
            </div>
        </section>

        <Footer />
    </>
}

export default Service