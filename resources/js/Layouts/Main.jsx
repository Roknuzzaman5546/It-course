import Footer from "@/Pages/Shared/Footer";
import Navbar from "@/Pages/Shared/Navbar";




const Main = ({ children, auth }) => {
    return (
        <div>
            <Navbar auth={auth}></Navbar>
            <div>
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
