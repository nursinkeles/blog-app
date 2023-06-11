import { useLocation } from "react-router-dom";
import { ROUTE } from "../constants/Constant";

export const useCurrentRoute = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const currentRoute = ROUTE.find((item) => item.pathname === currentPathname);
  return { currentRoute, currentPathname };
};
