import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    // TODO: get admin value from the database 
    const isAdmin = true;
    return (
        // dashboard sidebar 
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to={'/dashboard/adminHome'}><FaHome />Admin Home</NavLink></li>
                                <li><NavLink to={'/dashboard/addItems'}><FaUtensils />Add Items</NavLink></li>
                                <li><NavLink to={'/dashboard/manageItems'}><FaList />Manage Items</NavLink></li>
                                <li><NavLink to={'/dashboard/booking'}><FaBook /> Manage Booking</NavLink></li>
                                <li><NavLink to={'/dashboard/users'}><FaUsers /> All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to={'/dashboard/userHome'}><FaHome />User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/reservation'}><FaCalendar />reservation</NavLink></li>
                                <li><NavLink to={'/dashboard/cart'}><FaShoppingCart /> My Cart</NavLink></li>
                                <li><NavLink to={'/dashboard/review'}><FaAd /> Add review</NavLink></li>
                                <li><NavLink to={'/dashboard/bookings'}><FaList /> My Booking</NavLink></li>
                            </>
                    }

                    {/* shard nave links */}
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome />Home</NavLink></li>
                    <li><NavLink to={'/order/salad'}><FaSearch />Menu</NavLink></li>
                    <li><NavLink to={'/order/contact'}><FaEnvelope />Contact</NavLink></li>
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