import { Outlet } from "react-router-dom";
import Footer from "../pages/Shard/Footer/Footer";
import NavBar from "../pages/Shard/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;