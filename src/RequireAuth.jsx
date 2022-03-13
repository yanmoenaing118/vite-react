import useAuth  from "./lib/useAuth";
import { useLocation, Navigate } from "react-router-dom";
export default function RequireAuth({ children }) {
  const { user } = useAuth();
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
