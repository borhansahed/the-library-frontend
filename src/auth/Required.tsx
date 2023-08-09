import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const Required = ({ children }: { children: ReactNode }) => {
  const user = false;

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default Required;
