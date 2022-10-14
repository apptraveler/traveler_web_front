import { Navigate } from "react-router-dom";

interface IAuthParams {
  token: string,
  children: any
}

const AuthRoute = ({ token, children }: IAuthParams) => {
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AuthRoute