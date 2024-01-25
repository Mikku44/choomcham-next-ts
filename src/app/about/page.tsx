'use client'
// import Navbar from "../components/nav"
import NavigationBar from '../components/navbar';
import Footer from '../components/footer';
import { motion } from "framer-motion"

function About() {
    return (
        <>

            {/* <Navbar /> */}
            <NavigationBar />
            <div className="bg-slate-200 ">
                <div className="text-black  w-full h-[80px]   rounded-3xl">
                    .
                </div>
            </div>
            {/* <main className="relative">


                <div>
                    <img draggable='false' src="/images/kruEve_image.jpg" alt="" className="w-96 rounded-2xl sm:mb-0 mb-10" />
                </div>
                <div
                    className=" px-10 sm:absolute top-52 sm:left-2/4">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }} >เกี่ยวกับ ครูอีฟ ชุ่มฉ่ำ แบรนดิ้ง</motion.div>
                   
                    <div
                        className="pb-10 ">
                        <div>
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 100 }} className="text-3xl sm:text-5xl thai py-5">ชุ่มฉ่ำ branding มาจากไหน?</motion.h1>
                            <motion.h2
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 100 }} className="w-full text-xl">ใครเห็นชื่อก็ต้องสะดุด เกิดจากคำพูดติดปากของ คุณอีฟ ภัทรัดจารินท์ สุวัชรานนท์ ผู้ก่อตั้งองค์กรมีญาติคนนึงเขาจะพูดติดปากว่าฉ่ำ คุณอีฟเลยติดเขามาเอะอะก็ฉ่ำ อะไร ๆ ก็ฉ่ำ สวยฉ่ำ ดีฉ่ำ ปังฉ่ำจะทำบริษัทก็เลยเป็น ชุ่มฉ่ำ Branding</motion.h2>
                        </div>
                        <br />

                    </div>
                </div>

                <div className="sm:bx-10 grid gap-5 justify-center px-5">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }}
                         className='text-3xl sm:text-6xl text-center my-10 font-bold'>ผลงานของเรา</motion.h2>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }} className="flex sm:flex-row flex-col gap-3 items-center w-full">
                        <div className="rounded-3xl overflow-hidden">
                            <img src="https://www.choomcham.com/assets/images/ca3c5f78.png" className=" sm:w-[40vw]" alt="" />
                        </div>
                        <div className=' sm:w-1/2'>
                            <div
                                 className="text-xl font-bold">Title</div>
                            <div className="text-md sm:w-5/6 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur a quam dignissimos, expedita et iste voluptatum unde incidunt. Sit minus asperiores assumenda corrupti recusandae architecto, explicabo enim dolorum nihil laboriosam quod quaerat saepe, consectetur atque laudantium repellendus minima officia qui?</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }} className="flex sm:flex-row-reverse flex-col gap-3 items-center ">
                        <div className="rounded-3xl overflow-hidden">
                            <img src="https://www.choomcham.com/assets/images/3f2f09b5.png" className=" sm:w-[40vw]" alt="" />
                        </div>
                        <div className=' sm:w-1/2'>
                            <div className="text-xl font-bold">Title</div>
                            <div className="text-md sm:w-5/6 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur a quam dignissimos, expedita et iste voluptatum unde incidunt. Sit minus asperiores assumenda corrupti recusandae architecto, explicabo enim dolorum nihil laboriosam quod quaerat saepe, consectetur atque laudantium repellendus minima officia qui?</div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }} className="flex sm:flex-row flex-col gap-3 items-center ">
                        <div className="rounded-3xl overflow-hidden">
                            <img src="https://blog.choomcham.com/wp-content/uploads/2023/01/302153258_811615940253393_7549579098883693459_n-e1673467951770-1536x864.jpg" className=" sm:w-[40vw]" alt="" />
                        </div>
                        <div className=' sm:w-1/2'>
                            <div className="text-xl font-bold">Title</div>
                            <div className="text-md sm:w-5/6 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur a quam dignissimos, expedita et iste voluptatum unde incidunt. Sit minus asperiores assumenda corrupti recusandae architecto, explicabo enim dolorum nihil laboriosam quod quaerat saepe, consectetur atque laudantium repellendus minima officia qui?</div>
                        </div>
                    </motion.div>


                    <div className="flex w-1/2">
                        <img src="https://blog.choomcham.com/wp-content/uploads/2023/01/285933007_755002819248039_7005441046324586670_n-1536x857.jpg" alt="" />
                        <img src="https://blog.choomcham.com/wp-content/uploads/2023/01/129775117_395975328484125_5543274781438096971_n-e1673468247661-1536x864.jpg" alt="" />
                    </div>
                </div>


            </main> */}

            <section className="bg-slate-100">
                <div className="p-10 flex justify-evenly items-center">
                    <div className="relative">
                        <img draggable='false' src="/images/kruEve_image.jpg" alt="" className="w-96 rounded-2xl sm:mb-0 mb-10 rotate-6" />
                    </div>
                    <div>
                        <h2 className=" text-3xl font-bold">ครูอีฟ ภัทรัดจารินท์ สุวัชรานนท์ </h2>
                        <div className="w-[450px] text-xl">นักสร้างแบรนด์รุ่นใหม่สายคุณค่า
                            บัณฑิตคณะศิลปศาสตร์ เอกภาษาศาสตร์ มหาวิทยาลัยธรรมศาสตร์
                            อดีตผู้ร่วมก่อตั้งสร้างแบรนด์ “เกลา นิสัยอันตราย” ผู้ติดตามล้านคน
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default About