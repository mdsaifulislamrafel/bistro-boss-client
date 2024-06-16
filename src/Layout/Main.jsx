import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shard/Footer/Footer";
import NavBar from "../pages/Shard/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup');
    return (
        <div>
            {noHeaderFooter || <NavBar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;