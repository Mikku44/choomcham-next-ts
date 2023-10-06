import Navbar from "../components/nav";
import Footer from '../components/footer';
import Head from "next/head";
import Image from "next/image";




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

        <title>Services | ชุ่มฉ่ำ Branding ตัวจริงต้องมีที่ยืน</title>

        <Navbar />
        <div className="my-10 ">

            {/* <div>ชุ่มฉ่ำ แบรนดิ้ง</div> */}
            {/* top */}
            {/* <div className="mb-10">
           <h1 className="text-3xl sm:text-5xl thai">Service</h1>
           <br />
           
       </div> */}

            <div className="bg-radial rounded-xl h-[400px] p-10 pb-[26rem] mt-5 relative text-white sm:mx-20 mx-5">
                <h2 className="text-blue-600 text-[62px] font-bold">Service</h2>
                <h3 className="text-2xl">ให้ทีมงานช่วยเลือกบริการที่เหมาะสมกับคุณ</h3>
                <div className="py-5"></div>
                <div className="rounded-full bg-primary px-4 py-2 w-48 text-center">เงื่อนไขการให้บริการ</div>
                <div className="py-2"></div>
                <ul className="">
                    <li className="flex gap-3 "><div className="text-2xl text-white/50">01</div><div>เป็นเจ้าของธุรกิจตัวจริงในวงการนั้นๆ</div></li>
                    <li className="flex gap-3 "><div className="text-2xl text-white/50">02</div><div>มี PASSION ในธุรกิจนั้นมีเรื่องราวหรือประสบการณ์มี FEEDBACK ที่ดีมากกว่าเสีย</div></li>
                    <li className="flex gap-3 "><div className="text-2xl text-white/50">03</div><div>ทีมงานชุ่มฉ่ำสัมภาษณ์คัดกรอง</div></li>

                </ul>

                <Image className='absolute right-10 bottom-[36px]' width={300} height={300} src="./icon.svg" alt="" />
                <div className="text-center bg-white px-3 py-2 text-green-600 rounded-md w-48 mt-5 btn">สอบถามเพิ่มเติม</div>

            </div>


            <div className="p-10">
                <ul className="grid  sm:grid-flow-col gap-5 text-center">
                    <li className="rounded-full bg-black px-4 py-2 btn text-white"><a href="#bussiness">หลักสูตรเจ้าของธุรกิจ</a></li>
                    <li className="rounded-full bg-black px-4 py-2 btn text-white"><a href="#production">สำหรับงานโปรดักชั่น</a></li>
                    <li className="rounded-full bg-black px-4 py-2 btn text-white"><a href="#online">คอร์สออนไลน์</a></li>
                    <li className="rounded-full bg-black px-4 py-2 btn text-white"><a href="#last">คอร์สออนไลน์</a></li>
                </ul>
            </div>

            <div className="bg-[#17A78ABA] pb-[80px]">
                <h4 className="text-center text-white text-3xl py-5 font-bold" id="bussiness">หลักสูตรเจ้าของธุรกิจ</h4>
                <div className="h-5"></div>

                <div className="grid grid-flow-col py-8 gap-10 sm:gap-[25em] snap-x snap-proximity rounded-md mx-10 overflow-scroll  scrollbar-hide">
                    <div className="sm:block hidden"></div>
                    {bussiness.map((post) => {
                        return <>

                            <div id={"B"+post.id} className="bg-white rounded-[30px]  snap-center w-[25rem]  sm:w-[48rem] px-6 py-10 gap-5 h-[15rem] shadow-xl flex  items-center justify-items-center" key={post.id}>
                                <div className="overflow-hidden rounded-[20px] h-48"><img className="object-cover h-full" src="https://www.choomcham.com/assets/images/0374f75c.png" alt="" /></div>
                                <div className="grid ">
                                    <div className="text-xl font-bold">{post.title} {post.id}</div>
                                    <div>{post.description}</div>
                                    <div className="flex flex-end"><button className="bg-[#17A78ABA] px-3 py-1 rounded-md hover:bg-[#17a78ae5] ">ซื้อคอร์ส</button></div>
                                </div>
                            </div>


                        </>
                    })}

                    <div className="sm:block hidden"></div>
                </div>
                <div className="flex justify-center gap-3 pt-5">
                    {bussiness.map((x)=> {
                        return <>
                        <a href={"#B"+x.id}>
                            <div className="w-4 h-4 rounded-full border-2 border-pink-500"></div>
                        </a>
                        
                        </>
                    })}
                </div>

            </div>

            <div className="bg-[#3C429780] pb-[80px]">
                <h4 className="text-center text-white text-3xl py-5 font-bold" id='production'>สำหรับงานโปรดักชั่น</h4>
                <div className="h-5"></div>
                <div className="grid grid-flow-col py-8 gap-10 sm:gap-[25em] snap-x snap-proximity rounded-md mx-10 overflow-scroll  scrollbar-hide">

                    <div className="sm:block hidden"></div>
                    {bussiness.map((post) => {
                        return <>

                            <div id={"P"+post.id} className="bg-white rounded-[30px]  snap-center w-[25rem]  sm:w-[48rem] px-6 py-10 gap-5 h-[15rem] shadow-xl flex  items-center justify-items-center" key={post.id}>
                                <div className="overflow-hidden rounded-[20px] h-48"><img className="object-cover h-full" src="https://www.choomcham.com/assets/images/c41ef567.png" alt="" /></div>
                                <div className="grid ">
                                    <div className="text-xl font-bold">{post.title} {post.id}</div>
                                    <div>{post.description}</div>
                                    <div className="flex flex-end"><button className="bg-[#3C429780] px-3 py-1 rounded-md hover:bg-[#3c4297da] ">ซื้อคอร์ส</button></div>
                                </div>
                            </div>


                        </>
                    })}

                    <div className="sm:block hidden"></div>
                </div>
                <div className="flex justify-center gap-3 pt-5">
                    {bussiness.map((x)=> {
                        return <>
                        <a href={'#P'+x.id}>
                            <div className="w-4 h-4 rounded-full border-2 border-pink-500 "></div>
                        </a>
                        
                        </>
                    })}
                </div>
            </div>

            <div className="bg-[#F2C76291] pb-[80px]">
                <h4 className="text-center text-white text-3xl py-5 font-bold" id='online'>คอร์สออนไลน์</h4>
                <div className="h-5"></div>
                <div className="grid grid-flow-col py-8 gap-10 sm:gap-[25em] snap-x snap-proximity rounded-md mx-10 overflow-scroll  scrollbar-hide">

                    <div className="sm:block hidden"></div>
                    {bussiness.map((post) => {
                        return <>

                            <div id={"C"+post.id} className="bg-white rounded-[30px]  snap-center w-[25rem]  sm:w-[48rem] px-6 py-10 gap-5 h-[15rem] shadow-xl flex  items-center justify-items-center" key={post.id}>
                                <div className="overflow-hidden rounded-[20px] h-48"><img className="object-cover h-full" src="https://www.choomcham.com/assets/images/84dfa30d.png" alt="" /></div>
                                <div className="grid ">
                                    <div className="text-xl font-bold">{post.title} {post.id}</div>
                                    <div>{post.description}</div>
                                    <div className="flex flex-end"><button className="bg-[#F2C76291] px-3 py-1 rounded-md hover:bg-[#f2c762ed] ">ซื้อคอร์ส</button></div>
                                </div>
                            </div>


                        </>
                    })}

                    <div className="sm:block hidden"></div>
                </div>
                <div className="flex justify-center gap-3 pt-5">
                    {bussiness.map((x,index)=> {
                        return <>
                        <a href={'#C'+x.id}>
                            <div className="w-4 h-4 rounded-full border-2 border-pink-500 "></div>
                        </a>
                        
                        </>
                    })}
                </div>
            </div>

            <div className="bg-pink-500/50 pb-[80px]">
                <h4 className="text-center text-white text-3xl py-5 font-bold" id='last'>คอร์สออนไลน์</h4>
                <div className="h-5"></div>
                <div className="grid grid-flow-col py-8 gap-10 sm:gap-[25em] snap-x snap-proximity rounded-md mx-10 overflow-scroll  scrollbar-hide">


                    <div className="sm:block hidden"></div>
                    {bussiness.map((post) => {
                        return <>

                            <div id={"D"+post.id} className="bg-white rounded-[30px]  snap-center w-[25rem]  sm:w-[48rem] px-6 py-10 gap-5 h-[15rem] shadow-xl flex  items-center justify-items-center" key={post.id}>
                                <div className="overflow-hidden rounded-[20px] h-48"><img className="object-cover h-full" src="https://www.choomcham.com/assets/images/b1eddfa0.png" alt="" /></div>
                                <div className="grid ">
                                    <div className="text-xl font-bold">{post.title} {post.id}</div>
                                    <div>{post.description}</div>
                                    <div className="flex flex-end"><button className="bg-pink-500/50 px-3 py-1 rounded-md hover:bg-pink-500 ">ซื้อคอร์ส</button></div>
                                </div>
                            </div>


                        </>
                    })}

                    <div className="sm:block hidden"></div>
                </div>
                <div className="flex justify-center gap-3 pt-5">
                    {bussiness.map((x)=> {
                        return <>
                        <a href={'#D'+x.id}>
                            <div className="w-4 h-4 rounded-full border-2 border-pink-500 "></div>
                        </a>
                        
                        </>
                    })}
                </div>

            </div>
        </div>
        <Footer />
    </>
}

export default Service