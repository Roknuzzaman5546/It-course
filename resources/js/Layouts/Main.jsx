import Footer from "@/Pages/Shared/Footer";
import Navbar from "@/Pages/Shared/Navbar";




const Main = ({ children, auth }) => {
    return (
        <div className=" w-screen">
            <Navbar auth={auth}></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Main;
