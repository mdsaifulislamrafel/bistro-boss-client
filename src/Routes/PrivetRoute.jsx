import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace />
};

export default PrivetRoute;