import { ReactNode, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigate } from "react-router-dom";

const Protected: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/signin" replace />;
  } else {
    return children;
  }
};

export default Protected;
