import Navbar from "../components/nav";
import Footer from '../components/footer';

function Work(){
    return(
        <><Navbar /><main className="">
       
        <div className="p-48 bg-blue-900 text-yellow-500">
            <div>ชุ่มฉ่ำ แบรนดิ้ง</div>
            {/* top */}
            <div className="">
                <h1 className="text-3xl sm:text-5xl thai">ผลงานของเรา</h1>
                <br />
            
            </div>
        </div>

        <div>
            <h2 className="text-3xl font-bold text-center py-5">Our clients</h2>
            <div className="grid gap-5 sm:grid-cols-3 sm:grid-row-2 justify-items-center items-center">
                <div className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/b2f28f3e.png" alt="" /></div>
                <div className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/edda82c3.png" alt="" /></div>
                <div className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/c77f2ea0.png" alt="" /></div>
                <div className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/d8606cc4.png" alt="" /></div>
                <div className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/0ceaa160.png" alt="" /></div>
                <div className="overflow-hidden rounded-xl h-14"><img className="h-full object-cover" src="https://www.choomcham.com/assets/images/26ca482f.png" alt="" /></div>
            </div>
        </div>
    </main>
    <Footer />
    </>
    )
}

export default Work