'use client'

import { motion } from 'framer-motion'
import Footer from './components/footer'
import Navbar from './components/nav'
import NavigationBar from './components/navbar'
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import Image from "next/image";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperOptions } from 'swiper/types'








export default function Home() {


    const videos = [
        { id: '1', src: 'https://www.facebook.com/video.php?v=993405428609497', description: 'name', platform: "facebook" },
        { id: '2', src: 'https://www.facebook.com/choomchambranding/videos/526606112193948/', description: 'name', platform: "facebook" },
        { id: '3', src: 'https://www.facebook.com/choomchambranding/videos/215435620461048/', description: 'name', platform: "facebook" },
    ]

    const courses = [
        { id: '1', title: "ที่ปรึกษาสะท้อนตัวตน 1:1", description: "ลองเปิดโอกาสให้คนนอกสนาม ช่วยสะท้อนสิ่งที่คุณไม่เห็นเพื่อให้ไปต่อได้ เปิดรับเพียงแค่ 5 แบรนด์/เดือน ไม่ได้รับทุกธุรกิจต้องผ่านการสัมภาษณ์ก่อนเท่านั้น", imageUrl: "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/394540875_832637978869474_2998277435694377056_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=KKZh2vSZnq0AX_DGuQd&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfAS9pAoTV6U6ajw0gtkLkeEpTCSVEJpMr-vqXtsa_yhbA&oe=65AD89E7", price: "15,000" },
        { id: '2', title: "Keynote Speaker ", description: "บรรยายให้ผู้เข้าร่วมงานเข้าใจเรื่อง Branding หรือ Storytelling แบบง่ายๆ นำไปใช้ในชีวิตได้จริง", imageUrl: "https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/413902958_366481376005129_6244924999535793949_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=x9oyjf3_Au0AX_RXaMB&_nc_ht=scontent.fbkk29-6.fna&oh=03_AdR99ysdhDvfov2IjqpNC6BPXHj078v0SOiwytJbVl1mQw&oe=65CF3423", price: " 125,000" },
        { id: '3', title: "In house Training ", description: "พัฒนาทีมให้เข้าใจการสร้าง Brand ยกระดับ Content ให้ได้ใจลูกค้าเพิ่ม ช่วยให้เจ้าของธุรกิจไม่ต้องเหนื่อย", imageUrl: "https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/394736445_831607658972506_7023956463251618192_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=QD9uI_a70GEAX9NZJzL&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfCId5Hhmpz4_TeGAvLU-Swc7ZBHV2-ydzbiojq9kPLGbw&oe=65AD23E2", price: " 125,000" },
        { id: '4', title: "Online Course  ", description: "คอร์สเข้าใจแบรนด์ตัวเอง คอร์สเล่าเรื่อง 3 นาทีให้มียอดขาย คอร์สสร้างคนดังในตำนาน เนื้อหาแน่น ห้ามพลาด", imageUrl: "https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/336890739_1354530558661892_5028428925110047977_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=VIkIn8LBXqoAX-Dvonk&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfDdNl-E1cJuHTaW5_T-_HFkLe88yy_Q3pkbBRcpmWihhg&oe=65ACB443", price: " 555" },
    ]
    return <div>

        <NavigationBar />

        <div id="fb-root"></div>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v18.0&appId=156838349817980" nonce="WQnbcNzF"></script>

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
                        <div className='h-10 w-10 rounded-full '>
                            <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <h3 className='text-xl font-bold'>  Branding Strategist</h3>
                        <div className="text-[18px]">
                            ถนัดวางแผนสร้างแบรนด์จาก 0 ให้มีชื่อเสียง
                        </div>
                    </CardBody>
                </Card>
                <Card className=' w-[350px] shadow-xl bg-slate-100'>
                    <CardHeader>
                        <div className='h-10 w-10 rounded-full '>
                            <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <h3 className='text-xl font-bold'>  Keynote Speaker </h3>
                        <div className="text-[18px]">

                            เปลี่ยนแปลงวิธีคิดในการสร้างแบรนด์ให้คนหลักพัน

                        </div>
                    </CardBody>
                </Card>
                <Card className=' w-[350px] shadow-xl bg-slate-100'>
                    <CardHeader>
                        <div className='h-10 w-10 rounded-full '>
                            <Image className='' width={300} height={300} src="./icon.svg" alt="" />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <h3 className='text-xl font-bold'>  Mindfulness learner</h3>
                        <div className="text-[18px]">

                            เน้นฝึกจิต ถือศีล 5 เป็นปกติ ตั้งแต่อายุ 13

                        </div>
                    </CardBody>
                </Card>

            </section>

            <section className='p-10 flex justify-evenly items-center'>
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ y: 0, opacity: 100 }} > <img width="250" src="https://www.choomcham.com/assets/images/6d557835.png" alt="อิโมจิชุ่มฉ่ำ ตัวจริงต้องมีที่ยืน" /></motion.div>
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ y: 0, opacity: 100 }} className='w-[450px]'>
                    <div className="text-xl sm:text-3xl font-bold  text-yellow-500 ">
                        ภารกิจตัวจริงต้องมีที่ยืน
                    </div>
                    <div className="text-lg sm:text-2xl ">คุณไม่จำเป็นต้องเป็นแบบใคร คุณแค่ต้องเป็นตัวเองให้ชัดพอ ที่เหลือเป็นเรื่องของศิลปะการถ่ายทอดว่าคุณจะทำให้คนจดจำคุณได้ยังไง และไปดึงดูดใครเข้ามา ธุรกิจคุณจะมีที่ยืนเมื่อคุณกล้าตัดสินใจจะเลิกอยู่ตรงกลาง</div>
                </motion.div>
            </section>

            <section className='p-10 bg-slate-100/40'>
                <div className=''>
                    <div className="text-2xl sm:text-4xl font-bold text-center py-10 ">
                        สร้างแบรนด์แบบชุ่มฉ่ำ คืออะไร?
                    </div>

                    <ul className="sm:text-2xl text-lg sm:flex grid justify-center items-strech  gap-10">
                        <li className="hover:-translate-y-3 duration-200 rounded-2xl text-center w-[250px]  p-3 grid ">
                            <div><img src="/images/sticker24.png" alt="" /></div>
                            <div>
                                <div className='font-bold text-[--green]'>1. จิตวิญญาณ</div>
                                <div className="text-[18px]">ถอดตัวตนพิเศษของคุณออกมาวางกลยุทธ์แบรนด์</div>
                            </div>
                        </li>
                        <li className="hover:-translate-y-3 duration-200 rounded-2xl text-center w-[250px]  p-3 grid ">
                            <div><img src="/images/sticker19.png" alt="" /></div>
                            <div>
                                <div className="font-bold text-[--green]">2. ความสุข</div>
                                <div className="text-[18px]">ใจใสใจสบายทำอะไรก็สำเร็จ</div>
                            </div>
                        </li>
                        <li className="hover:-translate-y-3 duration-200 rounded-2xl text-center w-[250px]  p-3 grid ">
                            <div><img src="/images/sticker7.png" alt="" /></div>
                            <div>
                                <div className="font-bold text-[--green]">3. ลูกค้า</div>
                                <div className="text-[18px]">เขาคือคนสำคัญที่สุดของคุณนะ เข้าใจเขาลึกมากพอรึยัง?</div>
                            </div>
                        </li>
                        <li className="hover:-translate-y-3 duration-200 rounded-2xl text-center w-[250px]  p-3 grid ">
                            <div><img src="/images/sticker21.png" alt="" /></div>
                            <div>
                                <div className="font-bold text-[--green]">4. ชื่อเสียง</div>
                                <div className="text-[18px]">ออกแบบคอนเทนต์คุณให้แตกต่างและลูกค้าจดจำ</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="flex sm:flex-row flex-col justify-evenly items-center gap-5 p-10 ">
                    <div className=' p-10 flex flex-col justify-between '>
                        <div>
                            <div className="text-3xl font-bold text-[--yellow]">Our Students</div>
                            <div className="text-lg w-[300px] "> ธุรกิจคุณจะมีที่ยืนเมื่อคุณกล้าตัดสินใจจะเลิกอยู่ตรงกลาง</div>
                        </div>
                        <div className="py-10"><Button className=" bg-[--green] text-white text-lg px-10 " radius='full'>สำรวจคอร์สที่เหมาะกับคุณ</Button></div>
                    </div>
                    <div className="flex flex-wrap sm:w-[30%] w-[300px] gap-5 justify-center ">
                        <img className="sm:h-[50px] h-[30px]" src="/images/100_logo.png" alt="โลโก้อายุน้อยร้อยล้าน" />
                        <img className="sm:h-[50px] h-[30px]" src="/images/bdms_logo.jpg" alt="โลโก้คลินิคบีดีเอ็มเอส" />
                        <img className="sm:h-[50px] h-[30px]" src="/images/chubbycheeks_logo.jpg" alt="โลโก้ชุบบี้ชิ๊กส์" />
                        <img className="sm:h-[50px] h-[30px]" src="/images/madamfin_logo.jpg" alt="โลโก้มาดามฟิน" />
                        <img className="sm:h-[50px] h-[30px]" src="/images/ondemand_logo.png" alt="โลโก้ออนดีมานด์" />
                        <img className="sm:h-[50px] h-[30px]" src="/images/sowonclinic_logo.jpg" alt="โลโก้โซวอนคลีนิค" />
                        <img className="sm:h-[50px] h-[30px]" src="/images/winkwhite_logo.jpg" alt="โลโก้วิ้งค์ไวท์" />
                    </div>
                </div>
            </section>

            <div className="divider-y"></div>

            <div className="text-2xl sm:text-4xl font-bold text-center py-10 flex flex-col justify-center items-center">
                What we do?
                <div className="rounded-full h-1 w-[100px] bg-[#D33666] "></div>
            </div>

            {/* scroll section */}
            <section className=''>


                <div className=" rounded-3xl bg-slate-100 w-[100%]">

                    <Swiper

                        // spaceBetween={50}
                        // slidesPerView={3}
                        navigation={true}
                        pagination={true} modules={[Pagination, Navigation]}

                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}

                    >

                        {courses.map(course =>

                            <SwiperSlide key={course.id} className="py-10 px-4 cursor-default" >
                                <div className="card  w-[60rem] sm:w-96 bg-base-100 shadow-xl overflow-hidden ">
                                    <figure className="h-[210px] sm:h-[240px] overflow-hidden"><img src={course.imageUrl} alt={course.title} /></figure>
                                    <div className="card-body h-[202px] sm:h-[auto]">
                                        <div className="card-title">
                                            {course.title}
                                            <div className="badge bg-[--pink] text-[--yellow] py-3 px-5">NEW</div>
                                        </div>
                                        <p className="h-[40px] sm:h-[80px] w-[auto] text-ellipsis overflow-hidden">{course.description}</p>
                                        <div className="card-actions justify-between">
                                            <Button>ดูรายละเอียด</Button>
                                            <div>
                                                <div className="font-bold">เริ่มต้นที่</div>
                                                <div className="text-[--dark-blue] font-bold">฿ {course.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )}

                    </Swiper>
                </div>
            </section>


            <section className=''>
                <div className='p-10'>

                    <div className="sm:text-3xl text-xl font-bold">ทำไมต้องชุ่มฉ่ำ?</div>
                    <div className="rounded-full h-1 w-[10%] bg-[#D33666]"></div>
                    <div className="py-3 my-3 collapse sm:collapse-open collapse-arrow divide-y">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl ">วีดีโอแนะนำฉ่ำ</div>
                        <div className="flex collapse-content  flex-wrap gap-10 items-center justify-center sm:justify-between">


                            {
                                videos.map((video) => {
                                    return (

                                        <motion.div key={video.id} initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 100 }} className="card w-[250px] sm:w-96 overflow-hidden shadow-xl flex justify-center items-center bg-black">
                                            <figure className="">
                                                {video.platform == "youtube"
                                                    ? <iframe width="560" src={video.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="object-cover  h-[auto]"></iframe>
                                                    : <iframe src={"https://www.facebook.com/plugins/video.php?href=" + video.src + "&height=520"} width="390" className=' h-[400px]' allowFullScreen={true}   ></iframe>}

                                            </figure>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>



            <section className='flex justify-center p-10'>
                <div className="w-[90vw] hero min-h-screen bg-slate-200  rounded-[40px] py-4 shadow-xl relative overflow-hidden">
                    <div className='w-48 h-48 bg-[#D33666] rounded-full absolute top-0 -right-32'></div>
                    <div className='w-96 h-96 bg-[#3C4297] rounded-full absolute bottom-0 -left-40'></div>
                    <div className='w-56 h-56 bg-[#17A78A] rounded-full absolute top-0 -left-10'></div>
                    <div className='w-[50rem] h-[50rem] bg-yellow-500 rounded-full absolute -bottom-[15rem] -right-[50px]'></div>

                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left p-5">




                            <div className="text-5xl font-bold " >เงื่อนไขก่อนสัมภาษณ์รับบริการ!</div>
                            <div className="">1.ธุรกิจของท่านถูกศีลธรรม ไม่ขัดต่อศีล 5

                            </div>
                            <div className="">2.คุณรักการเรียนรู้และการพัฒนาตัวเอง</div>
                            <div className="">3.ธุรกิจคุณมี Feedback ที่ดีมากกว่าเสีย</div>
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
    </div>
}