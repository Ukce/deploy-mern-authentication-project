import React, {useEffect} from "react";
import { replace, useLocation , useNavigate} from "react-router-dom";

function RefrshHandler({SetIsAuthenticated}) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            SetIsAuthenticated(true);
            if (location.pathname === '/' ||
                location.pathname === '/login' ||
                location.pathname === '/signup'
            ) {
                navigate('/home', {replace: false});
            }
        }
}, [location, navigate, SetIsAuthenticated])
    return (
        null
    )
}
export default RefrshHandler