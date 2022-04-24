import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
//   const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth")
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
