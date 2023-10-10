import Navbar from "../components/nav";
import Footer from '../components/footer';

function layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }){

    return(
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    )
}

export default layout