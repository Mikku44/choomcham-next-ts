// 'use client'
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
                <div className="p-10 gap-5 sm:gap-0 sm:flex grid justify-items-center  sm:justify-evenly items-center ">
                    <div className="relative">
                        <img src="./icon.svg" className="z-[3] absolute w-[90px] sm:w-[200px]" alt="choomcham icon - splash water" />
                        <img draggable='false' src="/images/kruEve_image.jpg" alt="รูปครูอีฟ กำลังยิ้ม" className="w-72 max-w-[auto] sm:w-96 rounded-2xl sm:mb-0  rotate-6" />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-3xl font-bold">ครูอีฟ ภัทรัดจารินท์ สุวัชรานนท์ </h2>
                        <div className=" sm:w-[450px] text-lg sm:text-xl">นักสร้างแบรนด์รุ่นใหม่สายคุณค่า
                            บัณฑิตคณะศิลปศาสตร์ เอกภาษาศาสตร์ มหาวิทยาลัยธรรมศาสตร์
                            อดีตผู้ร่วมก่อตั้งสร้างแบรนด์ “เกลา นิสัยอันตราย” ผู้ติดตามล้านคน
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="p-10 grid sm:flex justify-items-center justify-around flex-row-reverse gap-5 ">
                    <div className="relative">
                        <img src="./icon.svg" className="z-[3] absolute w-[90px] sm:w-[200px] right-0 bottom-4" alt="choomcham icon - splash water" />
                        <img draggable='false' src="/images/kruEve_image2.jpg" alt="รูปครูอีฟ กำลังทำมือผิด" className="w-72 max-w-[auto] sm:w-96 rounded-2xl sm:mb-0  -rotate-6" />
                    </div>
                    <div>

                        <div className="sm:text-4xl text-xl font-bold ">ความเป็นมา</div>
                        <p className="sm:text-xl text-lg w-[400px] sm:w-[500px] text-pretty indent-10">
                            พูดไปคงไม่มีใครเชื่อว่าเมื่อก่อนอีฟเป็นเด็กขี้อาย พูดไม่รู้เรื่องคนหนึ่ง ไม่คิดไม่ฝันว่าโตขึ้นมาจะทำอาชีพที่ตรงกันข้ามกับนิสัยตัวเองแบบสุดขั้ว แต่จุดเปลี่ยนมันเกิดขึ้นจากที่หลังจากเรียนจบมา อีฟตั้งใจกับตัวเองว่าจะสละเวลาชีวิต 2 ปีทำอะไรเพื่อคนอื่นบ้าง เลยมาจบที่งานมูลนิธิ ขณะนั้นเป็นผู้หิวกระหายในการทดลองวิชาการสร้างแบรนด์
                        </p>
                        <div className='flex justify-center gap-2 p-4 w-[100%]'>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                        </div>
                        <p className="sm:text-xl text-lg w-[400px] sm:w-[500px] text-pretty indent-10">แม้ไม่เคยเรียนด้านนี้โดยตรง แต่ใจชอบเรื่องการค้าขาย การทำคอนเทนต์ สร้างเวบบอร์ดมาตั้งแต่เด็ก และเป็นคนชอบฟังธรรมแต่เด็ก เลยสงสัยว่า จะดีไหมถ้าเราปรับแพคเกจศีลธรรมให้เด็กรุ่นใหม่สนใจ จนในที่สุดก็สร้างแบรนด์ประสบความสำเร็จ และมีเจ้าของธุรกิจหลายคนอยากรู้วิธีทำยังไง เลยเกิดขึ้นมาเป็นคอร์สเล่าเรื่อง 3 นาทีให้ได้ใจคน ที่มีผู้เรียนมากกว่า 1,000 คน สร้างความสำเร็จให้กับเจ้าของธุรกิจ SME หน้าใหม่ได้มีที่ยืนในประเทศ</p>

                    </div>

                </div>
            </section>
            <section className="bg-slate-100">
                <div className="p-10 grid sm:flex justify-items-center justify-around  gap-5 ">
                    <div className="relative">
                        <img src="./icon.svg" className="z-[3] absolute w-[90px] sm:w-[150px] right-0 top-4" alt="choomcham icon - splash water" />
                        <img draggable='false' src="/images/kruEve_image3.jpg" alt="รูปครูอีฟ กำลังทำมือผิด" className="w-72 max-w-[auto] sm:w-96 rounded-2xl sm:mb-0  rotate-6" />
                    </div>
                    <div>

                        <div className="sm:text-4xl text-xl font-bold text-[--yellow]">ทำไมต้องชื่อชุ่มฉ่ำ?</div>
                        <p className="sm:text-xl text-lg w-[400px] sm:w-[500px] text-pretty indent-10">
                            ถ้าตอบตามจริงคือตอนแรกไม่มีความหมายอะไร นอกจากเป็นแค่คำพูดติดปากของเรา แต่เมื่อปลายปี 65 เป็นปีที่อีฟเกือบเลิกทำชุ่มฉ่ำ เพราะไม่มีความสุขกับสิ่งที่ตัวเองทำเลย หาจิตวิญญาณตัวเองไม่เจอว่าทำไปทำไม จนกระทั่งถอยห่างออกจากธุรกิจนี้ ไม่ทำอะไรเลย นอกจากไปปฏิบัติธรรมหรือเข้าหาธรรมชาติเพื่อตกผลึกกับตัวเอง ว่า ที่ผ่านมาเกิดอะไรขึ้น เลยเห็นภาพตัวเองในอดีตว่า เราทำอย่างไม่มีสติ เผลอไปใช้ตัวเลขนำทาง จนเกิดความเครียด กดดัน เพราะเราไม่ได้สร้างแบรนด์ด้วยจิตที่ชุ่มฉ่ำ ผลลัพธ์มันเลยไม่ชัดเจน เราก็เครียดที่ไม่ได้เป็นตัวของตัวเองเท่าที่ควร

                        </p>
                        <div className='flex justify-center gap-2 p-4 w-[100%]'>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                            <div className="rounded-full bg-[--pink] text-[--pink] w-5 h-5 text-center">.</div>
                        </div>
                        <p className="sm:text-xl text-lg w-[400px] sm:w-[500px] text-pretty indent-10">ตอนนี้ค้นพบแล้วว่า ความหมายของชุ่มฉ่ำ มันคือการที่คุณต้องวางจิตให้ชุ่มฉ่ำ เบิกบานอยู่เสมอ คุณถึงจะมองเห็นตัวเองได้ชัดและสร้างแบรนด์ให้คนมีความสุขตามไปด้วยได้


                            และอยากบอกเจ้าของธุรกิจทุกคนว่า อย่าทำมุ่งหน้าหาแต่เงินจนลืมไปว่าเราทุกคนก็ต้องตาย ทำทุกอย่างให้ดีที่สุดและอย่าลืมดูแลใจของตัวเองให้ฉ่ำตลอดเวลาด้วย เมื่อใจเราฉ่ำ ผลลัพธ์ก็จะฉ่ำตาม
                        </p>

                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default About