import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { logout, useCurrentToken } from "../redux/services/auth/authSlice";
import { toast } from "sonner";

function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const token = useSelector(useCurrentToken);

  if (token) {
    const decodedToken = jwtDecode(token);
    const tokenExpirationTime = decodedToken.exp * 1000;
    const currentTime = Date.now();

    if (tokenExpirationTime > currentTime) {
      const timeUntilExpiration = tokenExpirationTime - currentTime;
      setTimeout(() => {
        toast.error("Your session expired! Please log in again.");
        dispatch(logout());
      }, timeUntilExpiration);

      return children;
    }
  }

  return <Navigate to={"/login"} replace={true} />;
}

export default PrivateRoute;
