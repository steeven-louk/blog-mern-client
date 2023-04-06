import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) =>{

    const user = JSON.parse(localStorage.getItem('token'));

    if(!user){
        return <Navigate to='/login'/>;
    }else{
        return children
    }
}


export default ProtectedRoute;