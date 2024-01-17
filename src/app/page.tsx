'use client'
import { motion } from 'framer-motion'
import Footer from './components/footer'
import Navbar from './components/nav'
import NavigationBar from './components/navbar'
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import Image from "next/image";
export default function Home() {
    return <>
        <NavigationBar />


        <header>
            <div className="relative bg-blue-900 line  ">
                <div className="absolute sm:top-[30%] top-[25%] sm:left-40 left-10">
                    <motion.div initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }}> <h1 className="text-white">ชุ่มฉ่ำ แบรนดิ้ง</h1></motion.div>
                    {/* top */}
                    <motion.div initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }} className="">
                        <div className="text-white">
                            <div className="mark">
                                <div className="line"> </div>
                            </div>

                            {/* top */}
                            <div className="mb-10">
                                <h2 className="text-2xl sm:text-5xl thai">อยากสร้างแบรนด์ให้ชัด <br />
                                    เล่าเรื่องให้โดน  <br />
                                    คุณมาถูกที่แล้ว</h2>
                                <br />
                                <h4>การเป็นตัวจริงแต่ไม่มีที่ยืน มัน<u>เจ็บปวด</u>ใช่ไหม?</h4>
                                <br />
                                {/* <Link href="/about"><div className="btn bg-primary rounded-full px-10 py-1 border-0 hover:scale-110 duration-150 text-white">About us</div></Link> */}
                                <Button>About Us</Button>
                            </div>
                        </div>
                        <br />
                    </motion.div>
                </div>
                <h4 className="absolute right-5 sm:right-20 bottom-5 sm:bottom-40 text-white thai">
                    <div>อีฟ ภัทรัดจารินท์​ สุวัชรานนท์</div>
                    <div>Brand Consultant / Teacher</div>
                </h4>
            </div>
        </header>

        <main>
            <section className=' flex flex-col gap-10  sm:flex-row sm:items-stretch items-center justify-items-center justify-between py-10 sm:px-36 work'>
                <Card className=' w-[350px] shadow-xl bg-slate-100'>
                    <CardHeader>
                        <p className='h-10 w-10 rounded-full '>
                            <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                        </p>
                    </CardHeader>
                    <CardBody>
                        <h3 className='text-xl font-bold'>  Branding Strategist</h3>
                        <p className="text-[18px]">
                            ถนัดวางแผนสร้างแบรนด์จาก 0 ให้มีชื่อเสียง
                        </p>
                    </CardBody>
                </Card>
                <Card className=' w-[350px] shadow-xl bg-slate-100'>
                    <CardHeader>
                        <p className='h-10 w-10 rounded-full '>
                            <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                        </p>
                    </CardHeader>
                    <CardBody>
                        <h3 className='text-xl font-bold'>  Keynote Speaker </h3>
                        <p className="text-[18px]">

                            เปลี่ยนแปลงวิธีคิดในการสร้างแบรนด์ให้คนหลักพัน

                        </p>
                    </CardBody>
                </Card>
                <Card className=' w-[350px] shadow-xl bg-slate-100'>
                    <CardHeader>
                        <p className='h-10 w-10 rounded-full '>
                            <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                        </p>
                    </CardHeader>
                    <CardBody>
                        <h3 className='text-xl font-bold'>  Mindfulness learner</h3>
                        <p className="text-[18px]">

                            เน้นฝึกจิต ถือศีล 5 เป็นปกติ ตั้งแต่อายุ 13

                        </p>
                    </CardBody>
                </Card>

            </section>

            <section className='flex justify-center p-10'>
                <div className= "w-[90vw] hero min-h-screen bg-slate-200  rounded-[40px] py-4 shadow-xl relative overflow-hidden">
                    <span className='w-48 h-48 bg-[#D33666] rounded-full absolute top-0 -right-32'></span>
                    <span className='w-96 h-96 bg-[#3C4297] rounded-full absolute bottom-0 -left-40'></span>
                    <span className='w-56 h-56 bg-[#17A78A] rounded-full absolute top-0 -left-10'></span>
                    <span className='w-[50rem] h-[50rem] bg-yellow-500 rounded-full absolute -bottom-[15rem] -right-[50px]'></span>

                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left p-5">
                        



                            <div className="text-5xl font-bold " >เงื่อนไขก่อนสัมภาษณ์รับบริการ!</div>
                            <p className="">1.ธุรกิจของท่านถูกศีลธรรม ไม่ขัดต่อศีล 5 
                            
                            </p>
                            <p className="">2.คุณรักการเรียนรู้และการพัฒนาตัวเอง</p>
                            <p className="">3.ธุรกิจคุณมี Feedback ที่ดีมากกว่าเสีย</p>
                        </div>
                        <div className="card flex-shrink-2 w-full max-w-xl shadow-2xl bg-base-100">
                            <div className=" card  bg-base-100 shadow-xl">
                                <div className="card-title text-2xl text-center p-10">ลงทะเบียนพูดคุยกับชุ่มฉ่ำ</div>
                                <form action="" className="grid gap-5 px-10 pb-10">
                                    <div className="grid grid-flow-col gap-5">
                                        <div>
                                            <label htmlFor='name'>ชื่อ</label>
                                            <input type="text" id='name' className="input input-bordered input-md w-full " placeholder="กรอกชื่อ" />
                                        </div>
                                        <div>
                                            <label htmlFor='tel'>เบอร์โทร</label>
                                            <input type="text" id='tel' className="input input-bordered input-md w-full " placeholder="กรอกเบอร์โทรศัพท์" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor='email'>อีเมล์</label>
                                        <input type="text" id='email' className="input input-bordered input-md w-full " placeholder="กรอกอีเมล์" />
                                    </div>
                                    <div>
                                        <label htmlFor='bussines'>ชื่อองค์กร/ธุรกิจที่คุณทำอยู่</label>
                                        <input type="text" id='bussines' className="input input-bordered input-md w-full " placeholder="กรอกชื่อองค์กร/ธุรกิจที่คุณทำอยู่" />
                                    </div>
                                    <div>
                                        <label htmlFor='fb'>Facebook / fanpage</label>
                                        <input type="text" id='fb' className="input input-bordered input-md w-full " placeholder="กรอกFacebook / fanpage" />
                                    </div>
                                    <div>
                                        <label htmlFor='trouble'>ปัญหาที่อยากระบาย</label>
                                        <textarea id='trouble' rows={50} className="input input-bordered input-md w-full " placeholder="ระบุ"></textarea>
                                    </div>

                                    <button type="submit" className="btn bg-primary">ลงทะเบียน</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>



        <Footer></Footer>
    </>
}