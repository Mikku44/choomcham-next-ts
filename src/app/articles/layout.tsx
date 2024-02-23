import Navbar from "../components/nav";
import Footer from '../components/footer';
import NavigationBar from "../components/navbar";

function layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }){

    return(
        <>
       <div className="glass absolute w-full">
         <NavigationBar current="2" />
       </div>
        {children}
        <Footer />
        </>
    )
}

export default layout