import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/shared/LoadingSpinner";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()

    if(loading) return  <LoadingSpinner/>

 if(user) return children

 return <Navigate to='/signup' state={location.pathname} replace='true' />

    
};

export default PrivateRoute;