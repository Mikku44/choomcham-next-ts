import Navbar from "../components/nav"
import Footer from '../components/footer';

function About(){
    return(
        <><Navbar /><main className="">
       
        <div>
            <img draggable='false' src="https://www.choomcham.com/assets/images/4bf230f2.png" alt="" className="w-full sm:mb-0 mb-10"/>
        </div>
        <div className=" px-10 sm:absolute top-52 sm:left-2/4">
            <div >เกี่ยวกับ ครูอีฟ ชุ่มฉ่ำ แบรนดิ้ง</div>
            {/* top */}
            <div className="pb-10 ">
                <div>
                    <h1 className="text-3xl sm:text-5xl thai py-5">ชุ่มฉ่ำ branding มาจากไหน?</h1>
                    <h2 className="w-full text-xl">ใครเห็นชื่อก็ต้องสะดุด เกิดจากคำพูดติดปากของ คุณอีฟ ภัทรัดจารินท์ สุวัชรานนท์ ผู้ก่อตั้งองค์กรมีญาติคนนึงเขาจะพูดติดปากว่าฉ่ำ คุณอีฟเลยติดเขามาเอะอะก็ฉ่ำ อะไร ๆ ก็ฉ่ำ สวยฉ่ำ ดีฉ่ำ ปังฉ่ำจะทำบริษัทก็เลยเป็น ชุ่มฉ่ำ Branding</h2>
                </div>
                <br />
            
            </div>
        </div>
        <div className="sm:bx-10 grid gap-5 justify-center px-5">
            <h2 className='text-3xl sm:text-6xl text-center my-10 font-bold'>ผลงานของเรา</h2>

            <div className="flex sm:flex-row flex-col gap-3 items-center w-full">
                <div className="rounded-3xl overflow-hidden">
                    <img src="https://www.choomcham.com/assets/images/ca3c5f78.png" alt="" />
                </div>
                <div className=' sm:w-1/2'>
                    <div className="text-xl font-bold">Title</div>
                    <div className="text-md sm:w-5/6 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur a quam dignissimos, expedita et iste voluptatum unde incidunt. Sit minus asperiores assumenda corrupti recusandae architecto, explicabo enim dolorum nihil laboriosam quod quaerat saepe, consectetur atque laudantium repellendus minima officia qui?</div>
                </div>
            </div>

            <div className="flex sm:flex-row-reverse flex-col gap-3 items-center ">
                <div className="rounded-3xl overflow-hidden">
                    <img src="https://www.choomcham.com/assets/images/3f2f09b5.png" alt="" />
                </div>
                <div className=' sm:w-1/2'>
                    <div className="text-xl font-bold">Title</div>
                    <div className="text-md sm:w-5/6 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur a quam dignissimos, expedita et iste voluptatum unde incidunt. Sit minus asperiores assumenda corrupti recusandae architecto, explicabo enim dolorum nihil laboriosam quod quaerat saepe, consectetur atque laudantium repellendus minima officia qui?</div>
                </div>
            </div>



        </div>

    </main>
    <Footer />
    </>
    )
}

export default About