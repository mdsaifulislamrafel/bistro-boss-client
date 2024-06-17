import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        // dashboard sidebar 

        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li><NavLink to={'/dashboard/userHome'}><FaHome />User Home</NavLink></li>
                    <li><NavLink to={'/dashboard/reservation'}><FaCalendar />reservation</NavLink></li>
                    <li><NavLink to={'/dashboard/cart'}><FaShoppingCart /> My Cart</NavLink></li>
                    <li><NavLink to={'/dashboard/review'}><FaAd /> Add review</NavLink></li>
                    <li><NavLink to={'/dashboard/bookings'}><FaList /> My Booking</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome />Home</NavLink></li>
                    <li><NavLink to={'/order/salad'}><FaSearch />Menu</NavLink></li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;