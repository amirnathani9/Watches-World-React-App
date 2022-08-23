import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
  const location = useLocation()
  const isAuth = localStorage.getItem("isAuth")
  return isAuth ? <Outlet /> : <Navigate to="/login" state={{from:location}} replace />;
};
