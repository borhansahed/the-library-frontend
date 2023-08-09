import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import user from "./user";

const Required = ({ children }: { children: ReactNode }) => {
  const verified = user();

  if (!verified) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default Required;
