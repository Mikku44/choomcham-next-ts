// 'use client'
// import { motion } from "framer-motion"
import Image from 'next/image'
import Navbar from './components/nav'
import Link from 'next/link'
// import { useState } from 'react'
import Footer from './components/footer'
import Head from 'next/head'


const review = [
  { id: '0', name: 'user001', msg: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat temporibus dicta iste. Commodi blanditiis temporibus laborum, adipisci sit aut autem.' },
  { id: '1', name: 'user001', msg: ' Commodi blanditiis temporibus laborum, adipisci sit aut autem.' },
  { id: '2', name: 'user001', msg: 'Repellat temporibus dicta iste. Commodi blanditiis temporibus laborum, adipisci sit aut autem.' },
  { id: '3', name: 'user001', msg: ' Commodi blanditiis temporibus laborum, adipisci sit aut autem.' },
  { id: '3', name: 'user001', msg: ' Commodi blanditiis temporibus laborum, adipisci sit aut autem.' },
  { id: '3', name: 'user001', msg: ' Commodi blanditiis temporibus laborum, adipisci sit aut autem.' },
  { id: '3', name: 'user001', msg: ' Commodi blanditiis temporibus laborum, adipisci sit aut autem.' },
  { id: '3', name: 'user001', msg: ' Commodi blanditiis temporibus laborum, adipisci sit aut autem.' },
  { id: '3', name: 'user001', msg: ' Commodi blanditiis temporibus laborum, adipisci sit aut autem.' },
  { id: '3', name: 'user001', msg: ' Commodi blanditiis temporibus laborum, adipisci sit aut autem.' },

]


const courses = [
  { id: '0', title: 'Online course', des: 'รู้เรื่องธุรกิจใน 3 นาที' },
  { id: '1', title: 'Online course', des: 'รู้เรื่องธุรกิจใน 3 นาที' },
  { id: '2', title: 'Online course', des: 'รู้เรื่องธุรกิจใน 3 นาที' },
  { id: '3', title: 'Online course', des: 'รู้เรื่องธุรกิจใน 3 นาที' },
  { id: '4', title: 'Online course', des: 'รู้เรื่องธุรกิจใน 3 นาที' },
  { id: '5', title: 'Online course', des: 'รู้เรื่องธุรกิจใน 3 นาที' },
  { id: '6', title: 'Online course', des: 'รู้เรื่องธุรกิจใน 3 นาที' },
]


const consults = [
  { id: '0', name: 'Willian', des: 'blanditiis temporibus laborum, adipisci sit aut autem.' },
  { id: '1', name: 'Angiliga', des: 'blanditiis temporibus laborum, adipisci sit aut autem.' },
  { id: '2', name: 'Roren', des: 'blanditiis temporibus laborum, adipisci sit aut autem.' },
]

export default function Home() {

  // const [count, setCount] = useState(0)
  return (
    <>
      {/* <motion.div initial={false} animate={{ x: 100 }} /> */}
      <Navbar />
      <div className='absolute sm:block hidden top-[90%]  sm:-left t-10 -z-10'>
        <svg className='w-[30rem] sm:w-[60rem]' height="663" viewBox="0 0 703 663" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M199.454 2.92203C279.775 -15.3187 339.711 70.1149 416.946 98.6863C494.048 127.209 592.553 103.304 644.027 167.383C703.092 240.912 717.201 346.332 687.906 435.999C657.722 528.382 580.504 597.873 490.991 635.787C404.172 672.56 306.079 670.549 218.921 634.64C134.943 600.042 72.2263 530.766 35.0215 447.928C-1.7947 365.956 -12.3364 273.409 18.8157 189.101C49.9672 104.795 111.792 22.83 199.454 2.92203Z" fill="#D33666" fill-opacity="0.5" />
        </svg>
      </div>

      <div className='absolute sm:block  top-[100rem] sm:right-0 -z-10'>
        <svg className='w-[30rem] sm:w-[60rem]' height="663" viewBox="0 0 703 663" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M199.454 2.92203C279.775 -15.3187 339.711 70.1149 416.946 98.6863C494.048 127.209 592.553 103.304 644.027 167.383C703.092 240.912 717.201 346.332 687.906 435.999C657.722 528.382 580.504 597.873 490.991 635.787C404.172 672.56 306.079 670.549 218.921 634.64C134.943 600.042 72.2263 530.766 35.0215 447.928C-1.7947 365.956 -12.3364 273.409 18.8157 189.101C49.9672 104.795 111.792 22.83 199.454 2.92203Z" fill="#3C4297" fill-opacity="0.5" />
        </svg>
      </div>

      <div className='absolute sm:block hidden top-[150rem] sm:-left-10 -z-10'>
        <svg className='w-[30rem] sm:w-[60rem]' height="663" viewBox="0 0 703 663" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M199.454 2.92203C279.775 -15.3187 339.711 70.1149 416.946 98.6863C494.048 127.209 592.553 103.304 644.027 167.383C703.092 240.912 717.201 346.332 687.906 435.999C657.722 528.382 580.504 597.873 490.991 635.787C404.172 672.56 306.079 670.549 218.921 634.64C134.943 600.042 72.2263 530.766 35.0215 447.928C-1.7947 365.956 -12.3364 273.409 18.8157 189.101C49.9672 104.795 111.792 22.83 199.454 2.92203Z" fill="#17A78A" fill-opacity="0.5" />
        </svg>
      </div>

      <div className='absolute sm:block  top-[200rem] sm:right-0 -z-10'>
        <svg className='w-[30rem] sm:w-[60rem]' height="663" viewBox="0 0 703 663" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M199.454 2.92203C279.775 -15.3187 339.711 70.1149 416.946 98.6863C494.048 127.209 592.553 103.304 644.027 167.383C703.092 240.912 717.201 346.332 687.906 435.999C657.722 528.382 580.504 597.873 490.991 635.787C404.172 672.56 306.079 670.549 218.921 634.64C134.943 600.042 72.2263 530.766 35.0215 447.928C-1.7947 365.956 -12.3364 273.409 18.8157 189.101C49.9672 104.795 111.792 22.83 199.454 2.92203Z" fill="#68686A" fill-opacity="0.5" />
        </svg>
      </div>

      <div className='absolute sm:block hidden top-[250rem] sm:-left-10 -z-10'>
        <svg className='w-[30rem] sm:w-[60rem]' height="663" viewBox="0 0 703 663" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M199.454 2.92203C279.775 -15.3187 339.711 70.1149 416.946 98.6863C494.048 127.209 592.553 103.304 644.027 167.383C703.092 240.912 717.201 346.332 687.906 435.999C657.722 528.382 580.504 597.873 490.991 635.787C404.172 672.56 306.079 670.549 218.921 634.64C134.943 600.042 72.2263 530.766 35.0215 447.928C-1.7947 365.956 -12.3364 273.409 18.8157 189.101C49.9672 104.795 111.792 22.83 199.454 2.92203Z" fill="#028ECA" fill-opacity="0.5" />
        </svg>
      </div>

      <div className='absolute sm:block  top-[300rem] sm:right-0 -z-10'>
        <svg className='w-[30rem] sm:w-[60rem]' height="663" viewBox="0 0 703 663" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M199.454 2.92203C279.775 -15.3187 339.711 70.1149 416.946 98.6863C494.048 127.209 592.553 103.304 644.027 167.383C703.092 240.912 717.201 346.332 687.906 435.999C657.722 528.382 580.504 597.873 490.991 635.787C404.172 672.56 306.079 670.549 218.921 634.64C134.943 600.042 72.2263 530.766 35.0215 447.928C-1.7947 365.956 -12.3364 273.409 18.8157 189.101C49.9672 104.795 111.792 22.83 199.454 2.92203Z" fill="#F2C762" fill-opacity="0.5" />
        </svg>
      </div>

      <main className="my-10 sm:mx-10 mx-5">

        <div className="text-white">
          <div className="mark">
            <div className="line"> </div>
          </div>
          <div>ชุ่มฉ่ำ แบรนดิ้ง</div>
          {/* top */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-5xl thai">อยากสร้างแบรนด์ให้ชัด <br />
              เล่าเรื่องให้โดน  <br />
              คุณมาถูกที่แล้ว</h1>
            <br />
            <h4>การเป็นตัวจริงแต่ไม่มีที่ยืน มัน<u>เจ็บปวด</u>ใช่ไหม?</h4>
            <br />
            <Link href="/about"><div className="btn bg-primary rounded-full px-10 py-1 border-0 hover:scale-110 duration-150 text-white">About us</div></Link>
          </div>
        </div>


        {/* review */}

        <div className="   p-10 my-10">
          <h2 className="text-2xl font-bold text-center py-5 pt-24">รีวิวคอร์สและหนังสือ</h2>
          <div className="flex justify-center gap-5" >

            <a className="tab actived border-2 rounded-full">Coure review</a>
            <a className="tab border-2 rounded-full">Books</a>

          </div>

          <div className="grid grid-flow-row sm:grid-flow-col my-10 gap-5 overflow-scroll  scrollbar-hide py-10">

            {review.map((post) => {
              return <div key={post.id}>

                {/* 1 */}


                <div className="card carousel-item w-96 bg-base-100 shadow-md border-green-300" >
                  <div className="card-body" >

                    <div className="card-actions justify-end">
                      <button className="btn btn-square btn-sm" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <div className="grid gap-3 grid-flow-row">
                      <div className="bg-primary rounded-full w-20 h-20 overflow-hidden"><img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" className="w-full h-full object-cover" alt="" /></div>
                      <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                      </div>
                      <div>
                        <p>{post.name}</p>
                        <p className="text-sm">{post.msg}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            })}



          </div>
        </div>
        {/*  */}

        {/* <div className="divider"></div> */}

        {/* course */}
        <div className="rounded-xl">
          <h2 className="text-2xl font-bold text-center ">คอร์สรีวิว 3 นาที</h2>

          <div className="flex overflow-scroll  scrollbar-hide py-10 gap-5">
            {courses.map((course) => {
              return <>
                <div className="grid gap-10 sm:flex justify-center" key={course.id}>
                  <div className="card w-60 sm:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <div className="rounded-2xl overflow-hidden "><img src="https://www.choomcham.com/assets/images/84dfa30d.png" alt="course one" className="hover:saturate-50 rounded-2xl hover:scale-110 duration-150" /></div>
                    </figure>
                    <div className="card-body ">
                      <h2 className="card-title">{course.title}</h2>
                      <p>{course.des}</p>
                      <div className="card-actions">
                        <button className="btn bg-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            })}
          </div>

        </div>

        {/* consult */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center py-5 pt-24">ที่ปรึกษา</h2>

          <div className="grid gap-10 sm:flex justify-center">
            {consults.map((consult) => {
              return <>
                <div className=" w-96 grid justify-center justify-items-center text-center" key={consult.id}>
                  <figure className="px-10 pt-10 pb-5">
                    <div className="rounded-full w-48 h-48 overflow-hidden drop-shadow-xl"><img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80  " alt="course one" className="w-full" /></div>
                  </figure>
                  <div className="">
                    <h2 className="font-bold">{consult.name}</h2>
                    <p className="font-thin p-4">{consult.des}</p>

                  </div>
                </div>

              </>
            })}


            {/*  */}


          </div>
        </div>


        {/* menu */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center py-5 pt-24">หมวดหมู่</h2>

          <div className="grid gap-10 sm:flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl duration-150 hover:-translate-y-4 hover:text-blue-400">
              <figure className="px-10 py-10">
                <div className="rounded-2xl overflow-hidden ">Product</div>
              </figure>

            </div>

            {/*  */}

            <div className="card w-96 bg-base-100 shadow-xl duration-150 hover:-translate-y-4 hover:text-blue-400">
              <figure className="px-10 py-10">
                <div className="rounded-2xl overflow-hidden ">Course</div>
              </figure>

            </div>

            <div className="card w-96 bg-base-100 shadow-xl duration-150 hover:-translate-y-4 hover:text-blue-400">
              <figure className="px-10 py-10">
                <div className="rounded-2xl overflow-hidden ">Consult</div>
              </figure>

            </div>

            <div className="card w-96 bg-base-100 shadow-xl duration-150 hover:-translate-y-4 hover:text-blue-400">
              <figure className="px-10 py-10">
                <div className="rounded-2xl overflow-hidden ">Team training</div>
              </figure>

            </div>


          </div>
        </div>


        {/* contents */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center py-5 pt-24">Contents</h2>

          <div className="grid gap-10 sm:flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="rounded-2xl overflow-hidden "><img src="https://www.choomcham.com/assets/images/84dfa30d.png" alt="course one" className="hover:saturate-50 rounded-2xl hover:scale-110 duration-150" /></div>
              </figure>
              <div className="card-body ">
                <h2 className="card-title">Online course</h2>
                <p>รู้เรื่องธุรกิจใน 3 นาที</p>
                <div className="card-actions">
                  <button className="btn bg-primary">Buy Now</button>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="rounded-2xl overflow-hidden "><img src="https://www.choomcham.com/assets/images/84dfa30d.png" alt="course two" className="hover:saturate-50 rounded-2xl hover:scale-110 duration-150" /></div>
              </figure>
              <div className="card-body ">
                <h2 className="card-title">Online course</h2>
                <p>รู้เรื่องธุรกิจใน 3 นาที</p>
                <div className="card-actions">
                  <button className="btn bg-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* video content */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center py-5 pt-24">Videos</h2>

          <div className="grid gap-10 sm:flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="rounded-2xl overflow-hidden "><img src="https://www.choomcham.com/assets/images/84dfa30d.png" alt="course one" className="hover:saturate-50 rounded-2xl hover:scale-110 duration-150" /></div>
              </figure>
              <div className="card-body ">
                <h2 className="card-title">Online course</h2>
                <p>รู้เรื่องธุรกิจใน 3 นาที</p>
                <div className="card-actions">
                  <button className="btn bg-primary">Buy Now</button>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="rounded-2xl overflow-hidden "><img src="https://www.choomcham.com/assets/images/84dfa30d.png" alt="course two" className="hover:saturate-50 rounded-2xl hover:scale-110 duration-150" /></div>
              </figure>
              <div className="card-body ">
                <h2 className="card-title">Online course</h2>
                <p>รู้เรื่องธุรกิจใน 3 นาที</p>
                <div className="card-actions">
                  <button className="btn bg-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Our work */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center py-5 pt-24">งานของเรา</h2>

          <div className="grid gap-10 sm:flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="rounded-2xl overflow-hidden "><img src="https://www.choomcham.com/assets/images/84dfa30d.png" alt="course one" className="hover:saturate-50 rounded-2xl hover:scale-110 duration-150" /></div>
              </figure>
              <div className="card-body ">
                <h2 className="card-title">Online course</h2>
                <p>รู้เรื่องธุรกิจใน 3 นาที</p>
                <div className="card-actions">
                  <button className="btn bg-primary">Buy Now</button>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="rounded-2xl overflow-hidden "><img src="https://www.choomcham.com/assets/images/84dfa30d.png" alt="course two" className="hover:saturate-50 rounded-2xl hover:scale-110 duration-150" /></div>
              </figure>
              <div className="card-body ">
                <h2 className="card-title pt-24">Online course</h2>
                <p>รู้เรื่องธุรกิจใน 3 นาที</p>
                <div className="card-actions">
                  <button className="btn bg-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* registation */}

        {/* <div className="mt-10 card  bg-base-100 shadow-xl">
          <h3 className="card-title text-center p-10">ลงทะเบียนพูดคุยกับชุ่มฉ่ำ</h3>
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
        </div> */}

        {/*  */}
        <div className='py-20'></div>
        <div className="hero min-h-screen bg-slate-200  rounded-[40px] py-4 shadow-xl relative overflow-hidden">
          <span className='w-48 h-48 bg-[#D33666] rounded-full absolute top-0 -right-32'></span>
          <span className='w-96 h-96 bg-[#3C4297] rounded-full absolute bottom-0 -left-40'></span>
          <span className='w-56 h-56 bg-[#17A78A] rounded-full absolute top-0 -left-10'></span>
          <span className='w-[50rem] h-[50rem] bg-yellow-500 rounded-full absolute -bottom-[15rem] -right-[50px]'></span>

          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left p-5">
              <h1 className="text-5xl font-bold " >เงื่อนไขการรับบริการ!</h1>
              <p className="">1.เป็นเจ้าของธุรกิจตัวจริงในวงการนั้นๆ
                <div className="w-96">
                  มี PASSION ในธุรกิจนั้น
                  มีเรื่องราวหรือประสบการณ์ <br />
                  มี FEEDBACK ที่ดีมากกว่าเสีย
                </div>
              </p>
              <p className="">2.ทีมงานชุ่มฉ่ำสัมภาษณ์คัดกรอง</p>
            </div>
            <div className="card flex-shrink-2 w-full max-w-xl shadow-2xl bg-base-100">
              <div className=" card  bg-base-100 shadow-xl">
                <h3 className="card-title text-2xl text-center p-10">ลงทะเบียนพูดคุยกับชุ่มฉ่ำ</h3>
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


      </main>
      <Footer />
    </>
  )
}
