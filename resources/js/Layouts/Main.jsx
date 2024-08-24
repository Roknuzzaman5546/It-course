import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";


const Main = ({ children }) => {
    return (
        <div className=" w-screen">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Main;