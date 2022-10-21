import { Navigate } from "react-router-dom";

interface IPrivateRouteParams {
  token: string,
  children: any
}

const PrivateRoute = ({ token, children }: IPrivateRouteParams) => {
  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default PrivateRoute