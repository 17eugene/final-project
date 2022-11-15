import { Navigate } from "react-router-dom";

interface IPrivateRoure {
  children: JSX.Element;
  token: string | null;
}

const PrivateRoute = ({ children, token }: IPrivateRoure) => {
  if (token) {
    return children;
  }

  return <Navigate to="/signin" replace />;
};

export default PrivateRoute;
