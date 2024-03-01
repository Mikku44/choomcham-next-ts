"use client"
import Navbar from "../components/nav";
import Footer from '../components/footer';
import Head from "next/head";
import Image from "next/image";
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
        <div className=" h-16">
            <NavigationBar current="0" />
        </div>
        <section className="">



            <div className="relative">
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="">
                    <div className="flex justify-start bg-gradient-to-l from-white via-white via-20% to-[#F2E6D7]  xl:pl-32 pl-1  ">
                        <Image src="/images/kruEve_image4.jpg" className="xl:opacity-100 opacity-40 xl:w-[450px] w-[50vw]   blur-[0px]" alt="Description" width={1780} height={1280} />
                    </div>


                    <div className="  text-start absolute w-[550px]  xl:top-[120px] top-[40px] xl:right-[250px] right-[10px] shadow-2xl bg-gradient-to-b from-white via-white via-20% to-[#F2E6D7]   p-5  ">

                        <p className="text-[#549deb] pl-5 xl:pb-6 font-bold xl:text-5xl text-lg">ชุ่มฉ่ำ Mindful Circle</p>
                        <p className="text-[#000000] pl-5 font-normal xl:text-2xl text-base text-wrap">
                            สังคมกัลยาณมิตรธุรกิจ <br className="xl:hidden" />
                            ไปด้วยกัน ไปได้ไกลฉ่ำ
                        </p>
                        <div className="text-center  xl:pt-2 xl:text-xl text-sm bg-white border-2 border-[#D33666] xl:rounded-3xl rounded-xl xl:w-[240px] w-[100px]  xl:h-[60px] h-[20px] xl:mt-5 xl:mb-5 ">
                            <p className="leading-[50px] text-[#17A78A] font-bold text-xl">ปัญหาของตัวจริงไม่มีที่ยืน</p>
                        </div>
                        <div className="text-[#000000] pl-5 xl:text-xl text-sm mb-5 mt-5  " >
                            <div className="flex gap-2 mb-3 mt-3">
                                <span className="text-black font-bold">01</span>
                                <span className="underline underline-offset-8">ไม่มั่นใจในคอนเทนต์ของตัวเอง</span>
                            </div>
                            <div className="flex gap-2 mb-3 mt-3">
                                <span className="text-black font-bold">02</span>
                                <span className="underline underline-offset-8">เครียดง่ายเวลาเจอปัญหายอดตก</span>
                            </div>
                            <div className="flex gap-2 mb-3 mt-3">
                                <span className="text-black font-bold">03</span>
                                <span className="underline underline-offset-8">ไม่มีเพื่อนคุณภาพ อยากหา Connection
                                    <br />เพิ่มเติมเพื่อต่อยอด</span>
                            </div>
                            <div className="flex gap-2 mb-3 mt-3">
                                <span className="text-black font-bold">03</span>
                                <span className="underline underline-offset-8">ไม่มีไอเดีย รู้สึกตันๆกับตัวเอง</span>
                            </div>
                        </div>
                        <button className="btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-xl xl:w-[200px] w-[120px] bg-white  xl:text-xl text-xs " ><p className="text-[#17A78A]">สอบถามเพิ่มเติม</p></button>
                    </div>
                </motion.div>


                <div className="absolute xl:top-[0%] top-[50%] animate-pulse rotate-180 opacity-100">
                    <Image src="/images/sulmanservices/icon 1.png" className="xl:w-[300px] w-[500px] " alt="Description" width={1780} height={1280} />
                </div>
                <div className=" absolute top-[60%] right-[5%]">
                    <Image src="/images/sticker19.png" className="w-[20vw] " alt="Description" width={1780} height={1280} />
                </div>
                {/* <div className="absolute top-[22%] opacity-50 right-[14%] w-[550px] h-[450px] bg-[#F2E6D7] blur-[8px] rounded-3xl "></div> */}
            </div>

            <div className="flex justify-around xl:pt-11 xl:pb-7 h-auto w-[100%] bg-[#Ffff] border-5 border-[#F2E6D7] rounded-3xl ">
                {/* <button className="btn bg-black w-[200px] h-10 text-white text-center text-lg rounded-3xl"><p>หลักสูตรเจ้าของธุรกิจ</p></button>
                <button className="btn bg-black w-[200px] h-10 text-white text-center text-lg rounded-3xl"><p>สำหรับงานโปรดักชั่น</p></button>
                <button className="btn bg-black w-[200px] h-10 text-white text-center text-lg rounded-3xl"><p>คอร์สออนไลน์ </p></button> */}
                <div className=" ">
                    <p className="xl:text-3xl text-lg font-bold">
                        ชุ่มฉ่ำ Circle คือ
                    </p>
                    <span className="text-[#070814] xl:text-3xl text-xs">
                        กิจกรรม Mini Workshop เจอตัวประจำเดือน ให้นักธุรกิจตัวจริงมาเจอกัน<br className="xl:hidden" />
                        เพื่อฝึกสติให้ชุ่มฉ่ำจะได้สร้างแบรนด์สำเร็จอย่างมีความสุข <br />
                        ช่วยเหลือแบ่งปันเพื่อนธุรกิจให้สร้างแบรนด์ส่งต่อคุณค่าได้เพิ่มขึ้น
                    </span>
                </div>

            </div>
        </section >

        <section>
            <div className="relative  bg-gradient-to-b from-white to-[#F2E6D7]  pt-10 pr-10 h-[800px]">
                <div className="w-[75vw] h-[200px]  bg-white rounded-2xl shadow-2xl  z-10">
                    <div className="text-2xl text-balance text-center pl-10 pt-10">
                        <span >ชุ่มฉ่ำอยากให้คุณสร้างแบรนด์ได้สำเร็จอย่างยั่งยืน
                            ระหว่างทางจึงสำคัญไม่แพ้การตั้งเป้าหมาย<br />
                            การสร้างแบรนด์ให้สำเร็จเป็นการเดินทางไกล
                            เพื่อส่งต่อคุณค่าในระยะยาว
                            มีเพื่อนที่ดีจะทำให้คุณไม่หลงทาง
                        </span>
                    </div>
                </div>
                <div className="absolute top-[20%] animate-pulse right-[20%]">
                    <Image src="/icon.svg" className="w-[10vw] " alt="Description" width={1780} height={1280} />
                </div>
                <div className="absolute top-[5.5%]  left-[0%]">
                    <Image src="/masker.svg" className="w-[10vw] " alt="Description" width={1780} height={1280} />
                </div>
                <div className="flex justify-end pt-20">
                    <div className="w-[95vw] h-[350px] bg-white  rounded-2xl shadow-2xl z-0">
                        <div className="text-2xl text-balance text-start gap-3  pl-[550px] pt-10">
                            <div>
                                <p className="font-bold">รายละเอียด</p>
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
                        </div>
                    </div>
                    {/* <motion.div initial={{ opacity: 0, y: -100, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1 }} > */}
                    <div className="absolute left-[10%]  top-[25%] opacity-95 z-10">
                        <Image src="/images/kruEve_image3.jpg" className="w-[20vw] " alt="Description" width={1780} height={1280} />
                    </div>
                    {/* </motion.div> */}

                </div>
            </div>

            <div className="relative bg-cover bg-center flex justify-around pt-20 pb-10 " >


                <div className="w-[25vw] h-[250px] bg-gradient-to-l from-white via-[#F2E6D7] via-100% to-[#F2E6D7] rounded-2xl ">
                    <div className="text-xl text-balance text-start pl-10 pt-10">
                        <p className="font-bold">เหมาะกับใครบ้าง? </p>
                        <a>- เจ้าของธุรกิจที่เพิ่งเริ่ม</a><br />
                        <a>- เจ้าของธุรกิจที่ต้องการหา Connection</a><br />
                        <a>- เจ้าของธุรกิจที่สำเร็จแล้วอยากแบ่งปัน</a>
                    </div>

                </div>

                <div className="absolute top-[20.5%] left-[43%] animate-pulse">
                    <Image src="/images/sulmanservices/Rectangle 48.svg" className="w-[250px] " alt="Description" width={1780} height={1280} />
                </div>

                <div className="w-[25vw] h-[250px] bg-gradient-to-r from-white via-[#F2E6D7] via-100% to-[#F2E6D7] rounded-2xl ">
                    <div className="text-xl  text-balance text-start gap-3 pl-10 pt-10">
                        <p className="font-bold">คุณสมบัติผู้เข้าร่วม</p>
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
            <div className="bg-gradient-to-tr from-[#F2C762] to-red-400 flex justify-around pt-10 pb-10 ">
                <h1 className="font-bold text-white text-3xl"> ค่าเข้าร่วม สอบถามราคาอัพเดทกับ Admin น้องฉ่ำใน LINE : @choomchambranding </h1>
            </div>
        </section>

        <Footer />
    </>
}

export default Service