import { Outlet } from "react-router";
import { Navigate } from "react-router";

export function ProtectedRouteForAdmin(){
    //const isLoggedIn = false;

    // backendden gelecek token burada kullanılacak eğer token varsa works görüntülenir, eğer yoksa login sayfasına geri yönlendirilecek.
    
    //const token = localStorage.getItem("token");

    //return token ? <Outlet/> : <Navigate to="/home"/>;
}

export function ProtectedRouteForManager(){
    
    const token = localStorage.getItem("token");

    return token ? <Outlet/> : <Navigate to="/login/manager"/>;
}